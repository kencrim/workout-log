import { currentUser } from "@clerk/nextjs/server";
import { getWorkouts } from "@/server/queries";
export async function WorkoutList() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  // Select all workouts
  const selectedWorkouts = await getWorkouts();

  return (
    <div>
      {selectedWorkouts.map((workout) => (
        <div key={workout.id}>{workout.name}</div>
      ))}
    </div>
  );
}
