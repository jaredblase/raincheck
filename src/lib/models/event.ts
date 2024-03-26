import { z } from 'zod'

function getDate() {
	const date = new Date()
	date.setHours(0, 0, 0, 0)
	return date
}

export const eventSchema = z.object({
	name: z.string().min(1).max(255),
	startDate: z.date().min(getDate(), { message: 'Date cannot be in the past.' }),
	endDate: z.date(),
	startTime: z.string().regex(/\d\d:\d\d/).default('00:00'),
	endTime: z.string().regex(/\d\d:\d\d/).default('00:00'),
}).refine(data => data.endDate.getTime() <= new Date().setDate(data.startDate.getDate() + 366), {
	message: 'End date cannot be more than 1 year apart from start date',
	path: ['endDate']
}).refine(data => data.startDate <= data.endDate, {
	message: 'End date cannot be earlier than start date',
	path: ['endDate']
}).refine(data => data.startTime <= data.endTime, {
	message: 'End time cannot be earlier than start time',
	path: ['endTime']
})

export type EventSchema = typeof eventSchema
