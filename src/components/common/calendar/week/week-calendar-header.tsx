import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function WeekCalendarHeader() {
  return (
    <header className="flex flex-none items-center justify-between px-6 py-4">
      <h1 className="text-base font-semibold text-muted-foreground">
        <time dateTime="2022-01">January 2022</time>
      </h1>
      <div className="flex items-center">
        <div className="relative flex items-center rounded-md bg-card shadow-sm md:items-stretch">
          <button
            type="button"
            className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-border pr-1 text-muted-foreground hover:text-foreground focus:relative md:w-9 md:pr-0 md:hover:bg-muted"
          >
            <span className="sr-only">Previous week</span>
            <ChevronLeftIcon className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hidden border-y border-border px-3.5 text-sm font-semibold text-muted-foreground hover:bg-muted focus:relative md:block"
          >
            Today
          </button>
          <span className="relative -mx-px h-5 w-px bg-border md:hidden" />
          <button
            type="button"
            className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-border pl-1 text-muted-foreground hover:text-foreground focus:relative md:w-9 md:pl-0 md:hover:bg-muted"
          >
            <span className="sr-only">Next week</span>
            <ChevronRightIcon className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:ml-4 md:flex md:items-center">
          <div className="ml-6 h-6 w-px bg-border" />
          <button
            type="button"
            className="ml-6 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Add workout
          </button>
        </div>
      </div>
    </header>
  );
}
