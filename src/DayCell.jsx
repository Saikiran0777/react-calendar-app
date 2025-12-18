import dayjs from "dayjs";
import { events } from "./events";

export default function DayCell({ day, currentMonth }) {
  const dayEvents = events.filter(e =>
    dayjs(e.date).isSame(day, "day")
  );

  const isToday = day.isSame(dayjs(), "day");
  const isCurrentMonth = day.month() === currentMonth.month();

  return (
    <div
      className={`rounded-2xl border p-2 h-28 transition hover:shadow-md
        ${!isCurrentMonth ? "bg-gray-50 text-gray-400" : "bg-white"}
        ${isToday ? "ring-2 ring-indigo-500" : ""}`}
    >
      <div className="flex items-center justify-between mb-1">
        <span
          className={`text-sm font-semibold
            ${isToday ? "text-indigo-600" : ""}`}
        >
          {day.date()}
        </span>

        {dayEvents.length > 1 && (
          <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
            Conflict
          </span>
        )}
      </div>

      <div className="space-y-1">
        {dayEvents.map(event => (
          <div
            key={event.id}
            className={`text-[11px] px-2 py-1 rounded-lg text-white truncate
              ${dayEvents.length > 1 ? "bg-red-500" : "bg-indigo-500"}`}
          >
            {event.title} • {event.time}
          </div>
        ))}
      </div>
    </div>
  );
}
