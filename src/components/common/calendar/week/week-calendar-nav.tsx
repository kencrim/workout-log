import { weekDays, weekDaysShort } from "../constants";

function WeekCalendarNavItem({ day }: { day: Date }) {
  const dayOfWeek = day.getDay();
  const dayOfMonth = day.getDate();
  const isToday = day.toDateString() === new Date().toDateString();
  return (
    <button type="button" className="flex flex-col items-center pb-3 pt-2">
      {weekDays[dayOfWeek]}
      <span
        className={`mt-1 flex size-8 items-center justify-center font-semibold ${
          isToday
            ? "rounded-full bg-indigo-600 font-semibold text-white"
            : "text-gray-900"
        }`}
      >
        {dayOfMonth}
      </span>
    </button>
  );
}

function WeekCalendarNavItemShort({
  day,
  isToday,
}: {
  day: Date;
  isToday: boolean;
}) {
  const dayOfWeek = day.getDay();
  const dayOfMonth = day.getDate();
  return (
    <div className="flex items-center justify-center py-3">
      <span className={isToday ? "flex items-baseline" : ""}>
        {weekDaysShort[dayOfWeek]}{" "}
        <span
          className={`items-center justify-center font-semibold ${
            isToday
              ? "ml-1.5 flex size-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
              : "text-gray-900"
          }`}
        >
          {dayOfMonth}
        </span>
      </span>
    </div>
  );
}

export function WeekCalendarNav({
  containerNav,
  days,
}: {
  containerNav: React.RefObject<HTMLDivElement>;
  days: Date[];
}) {
  return (
    <div
      ref={containerNav}
      className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black/5 sm:pr-8"
    >
      <div className="grid grid-cols-7 text-sm/6 text-gray-500 sm:hidden">
        {days.map((day) => (
          <WeekCalendarNavItem key={day.toISOString()} day={day} />
        ))}
      </div>

      <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm/6 text-gray-500 sm:grid">
        <div className="col-end-1 w-14" />

        {days.map((day) => (
          <WeekCalendarNavItemShort
            key={day.toISOString()}
            day={day}
            isToday={day.toDateString() === new Date().toDateString()}
          />
        ))}
      </div>
    </div>
  );
}
