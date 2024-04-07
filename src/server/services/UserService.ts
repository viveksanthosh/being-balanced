import { db } from "../database";
import { InsertUsers } from "../database/schemas";

export function createUser(user: InsertUsers) {
  return db.insertInto("users").values(user).executeTakeFirstOrThrow();
}

export function loginUser(user: InsertUsers) {
  return db
    .selectFrom("users")
    .select("users.email")
    .where("email", "=", user.email)
    .where("password", "=", user.password)
    .execute();
}
