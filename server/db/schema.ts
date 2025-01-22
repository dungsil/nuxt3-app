// noinspection ES6PreferShortImport

import type { InferInsertModel } from 'drizzle-orm'
import { int, sqliteTable as table, text } from 'drizzle-orm/sqlite-core'

import { APP_PREFIX_LOWER } from '../../shared/constants'

export const user = table(`${APP_PREFIX_LOWER}_user`, {
  id: int().primaryKey({ autoIncrement: true }),
  username: text().notNull().unique('users__username--uk'),
})

export const session = table('session', {
  id: text().primaryKey(),
  user: int().notNull().references(() => user.id),
  expiresAt: int({ mode: 'timestamp' }).notNull(),
})

export type UserInfo = InferSelectModel<typeof user>
export type UserSpec = InferInsertModel<typeof user>

export type SessionInfo = InferSelectModel<typeof session>
export type SessionSpec = InferInsertModel<typeof session>
