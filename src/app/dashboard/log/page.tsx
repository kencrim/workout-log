import { WeekCalendar } from "@/components/common/calendar/week";
export default async function LogPage() {
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });
  return (
    <div>
      <WeekCalendar days={days} />
    </div>
  );
}
