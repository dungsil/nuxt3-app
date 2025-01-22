import process from 'node:process'
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from '../db/schema'

const { database } = useRuntimeConfig()

const dbClient = createClient({
  url: database.location,
  authToken: database.token,
})

export * from '../db/schema'

export const db = drizzle(dbClient, {
  schema,
  logger: process.env.NODE_ENV !== 'production',
})
