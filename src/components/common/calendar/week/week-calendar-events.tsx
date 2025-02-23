import { WorkoutEvent } from "../common/workout-event";
export function WeekCalendarEvents() {
  return (
    <ol
      className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
      style={{
        gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
      }}
    >
      <WorkoutEvent idx={4} start={74} end={82} title="Workout" />
    </ol>
  );
}
