import { WeekCalendar } from "@/components/common/calendar/week";
import { LastWorkout } from "./_components/last-workout";
export default async function LogPage() {
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });
  return (
    <div>
      <LastWorkout />
      <WeekCalendar days={days} />
    </div>
  );
}
