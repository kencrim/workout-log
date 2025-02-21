import { WeekCalendar } from "@/components/common/calendar/week";
import { db } from "@/server/db";
export default async function LogPage() {
  const posts = await db.query.posts.findMany();

  return (
    <div>
      <WeekCalendar />
    </div>
  );
}
