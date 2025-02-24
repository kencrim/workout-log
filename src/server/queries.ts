import { workouts } from "@/server/db/schema";
import { db } from "@/server/db";
import { currentUser } from "@clerk/nextjs/server";
import { isValid } from "date-fns";
import { eq } from "drizzle-orm";

import { revalidatePath } from "next/cache";
export async function createWorkout(workout: { name: string; date: string }) {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  const parsedDate = new Date(workout.date);

  // Validate date
  if (!isValid(parsedDate)) {
    throw new Error("Invalid date");
  }

  await db.insert(workouts).values({
    ...workout,
    userId: user.id,
  });

  revalidatePath("/dashboard");
}

export async function getWorkouts() {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  const selectedWorkouts = await db
    .select()
    .from(workouts)
    .where(eq(workouts.userId, user.id));
  return selectedWorkouts;
}
