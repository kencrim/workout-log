import { CalendarEvent } from "../common/calendar-event";
import { WorkoutEvent } from "../common/workout-event";
export function WeekCalendarEvents() {
  return (
    <ol
      className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
      style={{
        gridTemplateRows: "1.75rem repeat(288, minmax(0, 1fr)) auto",
      }}
    >
      <CalendarEvent idx={0} start={74} end={86} title="Breakfast" />
      <CalendarEvent idx={1} start={92} end={122} title="Flight to Paris" />
      <CalendarEvent
        idx={2}
        start={122}
        end={152}
        title="Meeting with design team at Disney"
      />
      <CalendarEvent idx={3} start={152} end={182} title="Lunch with John" />
      <WorkoutEvent idx={4} start={74} end={82} title="Workout" />
    </ol>
  );
}
