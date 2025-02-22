import { WeekCalendar } from "@/components/common/calendar/week";
import { LastWorkout } from "./_components/last-workout";
export default async function LogPage() {
  return (
    <div>
      <LastWorkout />
      <WeekCalendar />
    </div>
  );
}
