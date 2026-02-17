import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config();

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set!");
}

export default defineConfig({
    dialect: "sqlite",
    dbCredentials: {
        url: databaseUrl,
    },
    out: "./migrations",
    schema: "./src/db/schema.ts",
});