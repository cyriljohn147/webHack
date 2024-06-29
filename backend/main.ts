import "dotenv/config";
import { db } from "./drizzle/db";
import { UserTable } from "backend/drizzle/schema";
import { asc, count, desc, eq, sql } from "drizzle-orm";

async function main() {
  const user = await db.select().from(UserTable);

  console.log(user);
}

main();
