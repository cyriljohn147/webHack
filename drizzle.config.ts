import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "backend/drizzle/schema.ts",
  out: "backend/drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: { url: process.env.DATABASE_URL as string },
  verbose: true,
  strict: true,
});
