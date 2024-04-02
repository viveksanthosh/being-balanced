import pg from "pg";
import { Kysely, PostgresDialect } from "kysely";

import { Database } from "./schemas";

const dialect = new PostgresDialect({
  pool: new pg.Pool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    user: process.env.DB_USER,
    max: process.env.DB_CONNECTIONS as unknown as number,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});

db.selectFrom("users").select("email").executeTakeFirst().then(console.log);
