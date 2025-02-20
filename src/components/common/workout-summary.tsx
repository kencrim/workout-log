import { Workout } from "@/types/workouts";

const DUMMY_WORKOUTS: Workout[] = [
  {
    id: "1",
    name: "Chest Day",
    description: "Chest workout",
    entries: [
      {
        id: "1",
        exerciseId: "1",
        sets: [
          { id: "1", reps: 10, weight: 100, isFailure: false },
          { id: "2", reps: 10, weight: 100, isFailure: false },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Back Day",
    description: "Back workout",
    entries: [
      {
        id: "1",
        exerciseId: "1",
        sets: [],
      },
    ],
  },
  {
    id: "3",
    name: "Leg Day",
    description: "Leg workout",
    entries: [
      {
        id: "1",
        exerciseId: "1",
        sets: [],
      },
    ],
  },
];

export function WorkoutSummary() {
  return (
    <div className="flex flex-col gap-4">
      {DUMMY_WORKOUTS.map((workout) => (
        <div key={workout.id}>
          {workout.name}: {workout.entries.length} entries
        </div>
      ))}
    </div>
  );
}
