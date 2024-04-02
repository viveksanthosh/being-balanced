import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres({
  database: process.env.DB_NAME,
  host: "localhost",
  port: 5444,
  username: process.env.DB_USER,
});

queryClient`select * from users`.then(console.log);
