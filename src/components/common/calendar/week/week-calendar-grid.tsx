export function WeekCalendarGrid({
  containerOffset,
}: {
  containerOffset: React.RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {/* Horizontal lines */}
      <div
        className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
        style={{ gridTemplateRows: "repeat(48, minmax(3.5rem, 1fr))" }}
      >
        <div ref={containerOffset} className="row-end-1 h-7"></div>
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            12AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            1AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            2AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            3AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            4AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            5AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            6AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            7AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            8AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            9AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            10AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            11AM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            12PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            1PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            2PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            3PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            4PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            5PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            6PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            7PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            8PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            9PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            10PM
          </div>
        </div>
        <div />
        <div>
          <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
            11PM
          </div>
        </div>
        <div />
      </div>

      {/* Vertical lines */}
      <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
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
