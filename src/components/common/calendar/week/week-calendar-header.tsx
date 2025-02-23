import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function WeekCalendarHeader() {
  return (
    <header className="flex flex-none items-center justify-between px-6 py-4">
      <h1 className="text-base font-semibold text-zinc-400">
        <time dateTime="2022-01">January 2022</time>
      </h1>
      <div className="flex items-center">
        <div className="relative flex items-center rounded-md bg-zinc-800 shadow-sm md:items-stretch">
          <button
            type="button"
            className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-zinc-700 pr-1 text-zinc-400 hover:text-zinc-500 focus:relative md:w-9 md:pr-0 md:hover:bg-zinc-700"
          >
            <span className="sr-only">Previous week</span>
            <ChevronLeftIcon className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hidden border-y border-zinc-700 px-3.5 text-sm font-semibold text-zinc-400 hover:bg-zinc-700 focus:relative md:block"
          >
            Today
          </button>
          <span className="relative -mx-px h-5 w-px bg-zinc-700 md:hidden" />
          <button
            type="button"
            className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-zinc-700 pl-1 text-zinc-400 hover:text-zinc-500 focus:relative md:w-9 md:pl-0 md:hover:bg-zinc-700"
          >
            <span className="sr-only">Next week</span>
            <ChevronRightIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:ml-4 md:flex md:items-center">
          <div className="ml-6 h-6 w-px bg-zinc-700" />
          <button
            type="button"
            className="ml-6 rounded-md bg-green-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
          >
            Add workout
          </button>
        </div>
      </div>
    </header>
  );
}
