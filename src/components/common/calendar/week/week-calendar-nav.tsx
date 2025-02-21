export function WeekCalendarNav({
  containerNav,
}: {
  containerNav: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div
      ref={containerNav}
      className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black/5 sm:pr-8"
    >
      <div className="grid grid-cols-7 text-sm/6 text-gray-500 sm:hidden">
        <button type="button" className="flex flex-col items-center pb-3 pt-2">
          M{" "}
          <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">
            10
          </span>
        </button>
        <button type="button" className="flex flex-col items-center pb-3 pt-2">
          T{" "}
          <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">
            11
          </span>
        </button>
        <button type="button" className="flex flex-col items-center pb-3 pt-2">
          W{" "}
          <span className="mt-1 flex size-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
            12
          </span>
        </button>
        <button type="button" className="flex flex-col items-center pb-3 pt-2">
          T{" "}
          <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">
            13
          </span>
        </button>
        <button type="button" className="flex flex-col items-center pb-3 pt-2">
          F{" "}
          <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">
            14
          </span>
        </button>
        <button type="button" className="flex flex-col items-center pb-3 pt-2">
          S{" "}
          <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">
            15
          </span>
        </button>
        <button type="button" className="flex flex-col items-center pb-3 pt-2">
          S{" "}
          <span className="mt-1 flex size-8 items-center justify-center font-semibold text-gray-900">
            16
          </span>
        </button>
      </div>

      <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm/6 text-gray-500 sm:grid">
        <div className="col-end-1 w-14" />
        <div className="flex items-center justify-center py-3">
          <span>
            Mon{" "}
            <span className="items-center justify-center font-semibold text-gray-900">
              10
            </span>
          </span>
        </div>
        <div className="flex items-center justify-center py-3">
          <span>
            Tue{" "}
            <span className="items-center justify-center font-semibold text-gray-900">
              11
            </span>
          </span>
        </div>
        <div className="flex items-center justify-center py-3">
          <span className="flex items-baseline">
            Wed{" "}
            <span className="ml-1.5 flex size-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
              12
            </span>
          </span>
        </div>
        <div className="flex items-center justify-center py-3">
          <span>
            Thu{" "}
            <span className="items-center justify-center font-semibold text-gray-900">
              13
            </span>
          </span>
        </div>
        <div className="flex items-center justify-center py-3">
          <span>
            Fri{" "}
            <span className="items-center justify-center font-semibold text-gray-900">
              14
            </span>
          </span>
        </div>
        <div className="flex items-center justify-center py-3">
          <span>
            Sat{" "}
            <span className="items-center justify-center font-semibold text-gray-900">
              15
            </span>
          </span>
        </div>
        <div className="flex items-center justify-center py-3">
          <span>
            Sun{" "}
            <span className="items-center justify-center font-semibold text-gray-900">
              16
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
