import type { LucideIcon } from "lucide-react";

export interface CalendarEventProps {
  idx: number;
  start: number;
  end: number;
  icon?: LucideIcon;
  title: string;
}

export function CalendarEvent({
  idx,
  start,
  end,
  icon: Icon,
  title,
}: CalendarEventProps) {
  const gridRow = `${start} / span ${end - start + 1}`;
  return (
    <li
      className={`relative mt-px flex sm:col-start-1`}
      style={{ gridRow, gridColumnStart: idx + 1 }}
    >
      <a
        href="#"
        className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-green-700 p-2 text-xs/5 hover:bg-green-600"
      >
        {Icon && (
          <div className="relative flex w-full items-center justify-center">
            <span className="inline-flex items-center before:absolute before:left-0 before:top-1/2 before:block before:h-px before:w-[calc(50%-12px)] before:bg-zinc-300 before:content-[''] after:absolute after:right-0 after:top-1/2 after:block after:h-px after:w-[calc(50%-12px)] after:bg-zinc-300 after:content-['']">
              <Icon size={14} className="text-zinc-300" />
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <p className="text-zinc-300 group-hover:text-zinc-200">
            <time dateTime="2022-01-12T06:00">6:00 AM</time>
          </p>
          <p className="max-w-[50%] font-semibold text-zinc-300 group-hover:text-zinc-200">
            {title}
          </p>
        </div>
      </a>
    </li>
  );
}
