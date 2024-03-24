import { superValidate } from "sveltekit-superforms"
import { eventSchema } from "../models/event"
import { zod } from "sveltekit-superforms/adapters"
import { fail } from "@sveltejs/kit"

export const load = async () => {
	return {
		form: await superValidate(zod(eventSchema)),
	}
}

export const actions = {
	default: async event => {
		const form = await superValidate(event, zod(eventSchema))
		console.log(form)
		if (!form.valid) {
			return fail(400, { form })
		}
		return { form }
	}
}