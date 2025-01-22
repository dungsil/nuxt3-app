import { db, session } from '~~/server/utils/database'

export default defineEventHandler(async () => {
  return db.select().from(session)
})
