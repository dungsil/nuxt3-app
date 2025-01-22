import process from 'node:process'
import { defineConfig } from 'drizzle-kit'

import 'dotenv/config'

export default defineConfig({
  schema: './db/schema.ts',
  out: './db/migrations/',

  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.APP_DATABASE_LOCATION!,
    token: process.env.APP_DATABASE_TOKEN!,
  },
})
