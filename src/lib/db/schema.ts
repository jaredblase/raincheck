import { sql } from 'drizzle-orm'
import { index, integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core'

export const events = sqliteTable('events', {
	id: integer('id').notNull().primaryKey(),
	name: text('name').notNull(),
	hash: text('hash').notNull().unique(),
	startTime: text('start_time').notNull(),
	endTime: text('end_time').notNull(),
	createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`)
}, table => ({
	hashIdx: index('hash').on(table.hash)
}))

export type InsertEvent = typeof events.$inferInsert
export type SelectEvent = typeof events.$inferSelect

export const dates = sqliteTable('dates', {
	id: integer('id').notNull().primaryKey(),
	eventId: integer('event_id').notNull().references(() => events.id),
	date: integer('date').notNull(),
}, table => ({
	eventIdx: index('event_idx').on(table.eventId),
	eventDateUnique: uniqueIndex('event_date_unique').on(table.eventId, table.date),
}))

export type InsertDate = typeof dates.$inferInsert
export type SelectDate = typeof dates.$inferSelect

export const users = sqliteTable('users', {
	id: integer('id').notNull().primaryKey(),
	name: text('name'),
	eventId: integer('event_id').notNull().references(() => events.id),
	password: text('password'),
}, table => ({
	eventIdx: index('event_idx').on(table.eventId)
}))

export type InsertUser = typeof users.$inferInsert
export type SelectUser = typeof users.$inferSelect

export const availabilities = sqliteTable('availabilities', {
	id: integer('id').notNull().primaryKey(),
	userId: integer('id').notNull().references(() => users.id),
	date: integer('date').notNull(),
}, table => ({
	userIdx: index('user_idx').on(table.userId),
	userDateUnique: uniqueIndex('user_date_unique').on(table.userId, table.date),
}))

export type InsertAvailability = typeof availabilities.$inferInsert
export type SelectAvailability = typeof availabilities.$inferSelect
