"use client";

import { useEffect, useRef } from "react";
import { WeekCalendarHeader } from "./week-calendar-header";
import { WeekCalendarNav } from "./week-calendar-nav";
import { WeekCalendarGrid } from "./week-calendar-grid";
import { WeekCalendarEvents } from "./week-calendar-events";

export function WeekCalendar() {
  const container = useRef<HTMLDivElement>(null);
  const containerNav = useRef<HTMLDivElement>(null);
  const containerOffset = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !containerNav.current || !containerOffset.current)
      return;

    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    container.current.scrollTop =
      ((container.current.scrollHeight -
        containerNav.current.offsetHeight -
        containerOffset.current.offsetHeight) *
        currentMinute) /
      1440;
  }, []);

  return (
    <div className="flex h-full flex-col p-4">
      <WeekCalendarHeader />
      <div
        ref={container}
        className="isolate flex flex-auto flex-col overflow-auto rounded-lg bg-white"
      >
        <div
          style={{ width: "165%" }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          <WeekCalendarNav containerNav={containerNav} />
          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Grid - Controls the actual layout of the calendar */}
              <WeekCalendarGrid containerOffset={containerOffset} />
              {/* Events that are displayed on the grid */}
              <WeekCalendarEvents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
