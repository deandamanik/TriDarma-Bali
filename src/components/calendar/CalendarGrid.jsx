import CalendarDayCell from './CalendarDayCell';

const weekDays = [
  {
    desktop: 'Sunday',
    mobile: 'SUN',
  },
  {
    desktop: 'Monday',
    mobile: 'MON',
  },
  {
    desktop: 'Tuesday',
    mobile: 'TUE',
  },
  {
    desktop: 'Wednesday',
    mobile: 'WED',
  },
  {
    desktop: 'Thursday',
    mobile: 'THU',
  },
  {
    desktop: 'Friday',
    mobile: 'FRI',
  },
  {
    desktop: 'Saturday',
    mobile: 'SAT',
  },
];

const getCalendarCells = (currentDate, monthDays) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDate = new Date(year, month, 1);
  const startBlankCount = firstDate.getDay();

  const blankCells = Array.from({ length: startBlankCount }, () => null);

  return [...blankCells, ...monthDays];
};

const CalendarGrid = ({
  currentDate,
  monthDays,
  selectedDate,
  onSelectDate,
}) => {
  const cells = getCalendarCells(currentDate, monthDays);

  return (
    <div className="w-full overflow-hidden">
      <div className="mb-3 grid grid-cols-7 gap-1.5 sm:gap-2 lg:gap-3">
        {weekDays.map((day, index) => (
          <div
            key={day.desktop}
            className={`text-center text-[9px] font-extrabold uppercase sm:text-[10px] lg:text-[11px] ${
              index === 0 ? 'text-red-500' : 'text-brown-normal'
            }`}
          >
            <span className="sm:hidden">{day.mobile}</span>
            <span className="hidden sm:inline">{day.desktop}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5 sm:gap-2 lg:gap-3">
        {cells.map((dayData, index) => (
          <CalendarDayCell
            key={dayData ? dayData.date : `blank-${index}`}
            dayData={dayData}
            selectedDate={selectedDate}
            onSelectDate={onSelectDate}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;