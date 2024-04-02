import { db } from "../database";
import { InsertUsers } from "../database/schemas";

export function createUser(user: InsertUsers) {
  return db.insertInto("users").values(user).executeTakeFirstOrThrow();
}
