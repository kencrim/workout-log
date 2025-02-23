const TIMES = [
  "12AM",
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
];

import React from "react";

export function WeekCalendarGrid({
  containerOffset,
}: {
  containerOffset: React.RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {/* Horizontal lines */}
      <div
        className="col-start-1 col-end-2 row-start-1 grid divide-y divide-zinc-800"
        style={{ gridTemplateRows: "repeat(48, minmax(2.5rem, 1fr))" }}
      >
        <div ref={containerOffset} className="row-end-1 h-7"></div>
        {TIMES.map((t) => (
          <React.Fragment key={t}>
            <div>
              <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                {t}
              </div>
            </div>
            <div />
          </React.Fragment>
        ))}
      </div>
      {/* Vertical lines */}
      <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-zinc-800 sm:grid sm:grid-cols-7">
        <div className="col-start-1 row-span-full" />
        <div className="col-start-2 row-span-full" />
        <div className="col-start-3 row-span-full" />
        <div className="col-start-4 row-span-full" />
        <div className="col-start-5 row-span-full" />
        <div className="col-start-6 row-span-full" />
        <div className="col-start-7 row-span-full" />
        <div className="col-start-8 row-span-full w-8" />
      </div>
    </>
  );
}
