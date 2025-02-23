import { BicepsFlexed } from "lucide-react";
import { CalendarEvent, type CalendarEventProps } from "./calendar-event";

type WorkoutEventProps = Omit<CalendarEventProps, "icon">;

export function WorkoutEvent({ title, idx, start, end }: WorkoutEventProps) {
  return (
    <CalendarEvent
      idx={idx}
      icon={BicepsFlexed}
      start={start}
      end={end}
      title={title}
    />
  );
}
