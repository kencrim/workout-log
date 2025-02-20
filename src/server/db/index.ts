import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { env } from "process";

/**
 * Cache the database connection in development to creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: NeonQueryFunction<any, any> | undefined;
};

const sql = globalForDb.conn ?? neon(process.env.DATABASE_URL!);
if (env.NODE_ENV !== "production") globalForDb.conn = sql;

export const db = drizzle(sql, { schema });
