import { z } from 'zod'

export const eventSchema = z.object({
	name: z.string().min(1).max(255),
	startDate: z.date(),
	endDate: z.date(),
	startTime: z.string().regex(/\d\d:\d\d/).default('00:00'),
	endTime: z.string().regex(/\d\d:\d\d/).default('00:00'),
}).refine(data => data.startDate <= data.endDate, {
	message: 'End date cannot be earlier than start date',
	path: ['endDate']
}).refine(data => data.startTime <= data.endTime, {
	message: 'End time cannot be earlier than start time',
	path: ['endTime']
})

export type EventSchema = typeof eventSchema
