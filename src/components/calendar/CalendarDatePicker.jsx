import { useState } from 'react';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CalendarDatePicker = ({
  isOpen,
  selectedDate,
  onClose,
  onApplyDate,
}) => {
  const initialDate = selectedDate ? new Date(selectedDate) : new Date();

  const [day, setDay] = useState(initialDate.getDate());
  const [month, setMonth] = useState(initialDate.getMonth());
  const [year, setYear] = useState(initialDate.getFullYear());

  if (!isOpen) return null;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handleApply = () => {
    const safeDay = Math.min(Number(day), daysInMonth);
    const pickedDate = new Date(Number(year), Number(month), safeDay);

    onApplyDate(pickedDate);
    onClose();
  };

  const years = Array.from({ length: 101 }, (_, index) => {
    return new Date().getFullYear() - 50 + index;
  });

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-brown-dark/50 px-5">
      <div className="w-full max-w-md rounded-[28px] bg-white p-6 shadow-2xl">
        <div className="mb-5">
          <h2 className="text-xl font-extrabold text-brown-normal">
            Select Date
          </h2>

          <p className="mt-1 text-sm font-medium text-brown-dark/50">
            Choose a day, month, and year to jump quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <label>
            <span className="mb-2 block text-xs font-extrabold text-brown-normal">
              Day
            </span>

            <select
              value={day}
              onChange={(event) => setDay(Number(event.target.value))}
              className="h-12 w-full rounded-xl border border-yellow-normal bg-white px-3 text-sm font-bold text-brown-normal outline-none"
            >
              {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(
                (item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
            </select>
          </label>

          <label>
            <span className="mb-2 block text-xs font-extrabold text-brown-normal">
              Month
            </span>

            <select
              value={month}
              onChange={(event) => setMonth(Number(event.target.value))}
              className="h-12 w-full rounded-xl border border-yellow-normal bg-white px-3 text-sm font-bold text-brown-normal outline-none"
            >
              {MONTHS.map((item, index) => (
                <option key={item} value={index}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="mb-2 block text-xs font-extrabold text-brown-normal">
              Year
            </span>

            <select
              value={year}
              onChange={(event) => setYear(Number(event.target.value))}
              className="h-12 w-full rounded-xl border border-yellow-normal bg-white px-3 text-sm font-bold text-brown-normal outline-none"
            >
              {years.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-7 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="h-11 rounded-xl border border-yellow-normal px-5 text-sm font-bold text-brown-normal transition hover:bg-orange-light"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleApply}
            className="h-11 rounded-xl bg-brown-normal px-5 text-sm font-bold text-white transition hover:bg-brown-dark"
          >
            Apply Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarDatePicker;