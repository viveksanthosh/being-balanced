import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  users: UserTable;
}

export interface UserTable {
  id: Generated<number>;

  email: string;
  password: string;
}

// You should not use the table schema interfaces directly. Instead, you should
// use the `Selectable`, `Insertable` and `Updateable` wrappers. These wrappers
// make sure that the correct types are used in each operation.
//
// Most of the time you should trust the type inference and not use explicit
// types at all. These types can be useful when typing function arguments.
export type Person = Selectable<UserTable>;
export type NewPerson = Insertable<UserTable>;
export type PersonUpdate = Updateable<UserTable>;
