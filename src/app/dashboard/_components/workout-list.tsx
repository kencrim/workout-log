import { db } from "@/server/db";
import { workouts } from "@/server/db/schema";
import { eq, desc } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
export async function WorkoutList() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  // Select all workouts
  const selectedWorkouts = await db
    .select()
    .from(workouts)
    .where(eq(workouts.userId, user?.id))
    .orderBy(desc(workouts.createdAt));

  return (
    <div>
      {selectedWorkouts.map((workout) => (
        <div key={workout.id}>{workout.name}</div>
      ))}
    </div>
  );
}
