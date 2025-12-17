import { pgTable, varchar, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    email: varchar(255).notNull().unique(),
    password: varchar(255).notNull(),
    salt: varchar(255).notNull(),
    createdAt: timestamp().defaultNow()
})


export const sessionTable = pgTable("user_sessions", {
    id: uuid().primaryKey().defaultRandom(),
    userId: uuid().references(() => userTable.id).notNull(),
    createdAt: timestamp().defaultNow()
});