import "dotenv/config";
import { db } from "./drizzle/db";
import { UserTable } from "./drizzle/schema";
import { asc, count, desc, eq, sql } from "drizzle-orm";
import { authenticateUser, updateUser } from "../lib/frontend_functions";

async function main() {
  // const user = await db.select().from(UserTable);
  // const user = await db.insert(UserTable).values({
  //   email: "alice.johnson@example.com",
  //   name: "Alice Johnson",
  //   password: "password789",
  //   dates: JSON.stringify([
  //     { startDate: "2023-04-01", endDate: "2023-04-15" },
  //     { startDate: "2023-05-01", endDate: "2023-05-15" },
  //     { startDate: "2023-06-01", endDate: "2023-06-15" },
  //   ]),
  //   streak: 30,
  //   money: 230.5,
  //   stage: 1,
  //   latestDate: new Date("2023-05-14"),
  // });
  // const user = await db
  //   .insert(UserTable)
  //   .values([
  //     {
  //       name: "Veer",
  //       age: 19,
  //       email: "abc@test.com",
  //     },
  //     { name: "Brr", age: 24, email: "idk@idk.com" },
  //   ])
  //   .returning({
  //     id: UserTable.id,
  //     userName: UserTable.name,
  //   })
  //   .onConflictDoUpdate({
  //     target: UserTable.email,
  //     set: { name: "Updated Name" },
  //   });
  const user = await authenticateUser("john.doe@example.com", "password123");
  const id = user.data?.id;
  const msg = await updateUser({ money: 999 }, id as string);

  console.log(user, msg);
}

main();
