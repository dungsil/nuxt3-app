import { createDatabase } from 'db0'
import libSql from 'db0/connectors/libsql/node'
import { drizzle } from 'db0/integrations/drizzle'

const { database } = useRuntimeConfig()

const dbClient = createDatabase(libSql({
  url: database.location,
  authToken: database.token,
}))

export const db = drizzle(dbClient)
