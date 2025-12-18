import dayjs from "dayjs";
import { useState } from "react";
import Header from "./Header";
import DayCell from "./DayCell";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const start = currentMonth.startOf("month").startOf("week");
  const end = currentMonth.endOf("month").endOf("week");

  const days = [];
  let date = start;

  while (date.isBefore(end)) {
    days.push(date);
    date = date.add(1, "day");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-6xl mx-auto p-6">
        <Header
          month={currentMonth}
          onPrev={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          onNext={() => setCurrentMonth(currentMonth.add(1, "month"))}
        />

        <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-500 mb-3">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
            <div key={d} className="uppercase tracking-wide">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-3">
          {days.map((day, i) => (
            <DayCell key={i} day={day} currentMonth={currentMonth} />
          ))}
        </div>
      </div>
    </div>
  );
}
