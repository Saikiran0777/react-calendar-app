export default function Header({ month, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={onPrev}
        className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
      >
        ◀
      </button>

      <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
        {month.format("MMMM YYYY")}
      </h2>

      <button
        onClick={onNext}
        className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
      >
        ▶
      </button>
    </div>
  );
}
