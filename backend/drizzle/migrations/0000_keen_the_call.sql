CREATE TABLE IF NOT EXISTS "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"dates" json NOT NULL,
	"streak" integer DEFAULT 0 NOT NULL,
	"money" real DEFAULT 0 NOT NULL,
	"stage" integer DEFAULT 0 NOT NULL,
	"latestDate" timestamp NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
