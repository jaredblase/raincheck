import { superValidate } from "sveltekit-superforms"
import { eventSchema } from "$lib/models/event"
import { zod } from "sveltekit-superforms/adapters"
import { fail } from "@sveltejs/kit"
import { db } from '$lib/db/db.server'
import { dates, events, type InsertDate } from '$lib/db/schema'
import { createHash } from 'crypto'

export const load = async () => {
	return {
		form: await superValidate(zod(eventSchema)),
	}
}

function generateHash(input: string) {
	return createHash('md5')
		.update(input + new Date() + Math.random() * 1000)
		.digest('base64url')
		.slice(0, 10)
}

export const actions = {
	default: async event => {
		const form = await superValidate(event, zod(eventSchema))

		if (!form.valid) {
			return fail(400, { form })
		}

		const { name, startDate, endDate, startTime, endTime } = form.data

		const datesData: InsertDate[] = []
		const hash = generateHash(name)

		await db.transaction(async (tx) => {
			const [{ eventId }] = await tx.insert(events).values({ name, startTime, endTime, hash }).returning({ eventId: events.id })

			do {
				datesData.push({ date: startDate.getTime(), eventId })
				startDate.setDate(startDate.getDate() + 1)
			} while (startDate <= endDate)

			await tx.insert(dates).values(datesData)
		})

		return { form }
	}
}