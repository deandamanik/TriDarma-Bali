const getCellClassName = (events, isSelected) => {
  if (isSelected) {
    return 'border-brown-normal bg-brown-normal text-white shadow-lg shadow-brown-normal/20';
  }

  if (events.some((event) => event.type === 'holiday')) {
    return 'border-yellow-normal bg-yellow-normal/60 text-brown-normal';
  }

  if (events.length > 0) {
    return 'border-yellow-normal bg-yellow-light text-brown-normal';
  }

  return 'border-yellow-normal/80 bg-white text-brown-normal hover:bg-yellow-light';
};

const CalendarDayCell = ({ dayData, selectedDate, onSelectDate }) => {
  if (!dayData) {
    return (
      <div className="h-[88px] rounded-xl bg-orange-light/40 sm:h-[96px] sm:rounded-2xl lg:h-[100px]" />
    );
  }

  const isSelected = selectedDate === dayData.date;
  const dayNumber = Number(dayData.date.split('-')[2]);
  const firstEvent = dayData.events[0];

  return (
    <button
      type="button"
      onClick={() => onSelectDate(dayData.date)}
      className={`h-[88px] min-w-0 rounded-xl border px-1.5 py-2 text-left transition sm:h-[96px] sm:rounded-2xl sm:p-3 lg:h-[100px] ${getCellClassName(
        dayData.events,
        isSelected
      )}`}
    >
      <span className="block text-center text-sm font-extrabold sm:text-left">
        {dayNumber}
      </span>

      <div className="mt-3 min-w-0 space-y-1 sm:mt-4">
        {firstEvent ? (
          <>
            <p
              className={`truncate text-center text-[8px] font-extrabold sm:text-left sm:text-[10px] ${
                isSelected ? 'text-white' : 'text-brown-normal'
              }`}
              title={firstEvent.title}
            >
              • {firstEvent.title}
            </p>

            <p
              className={`hidden truncate text-[8px] font-medium sm:block sm:text-[9px] ${
                isSelected ? 'text-white/70' : 'text-brown-dark/45'
              }`}
              title={firstEvent.pawukon}
            >
              {firstEvent.pawukon}
            </p>
          </>
        ) : (
          <p
            className={`truncate text-center text-[8px] font-medium sm:text-left sm:text-[9px] ${
              isSelected ? 'text-white/70' : 'text-brown-dark/35'
            }`}
            title={`${dayData.pancawara} · ${dayData.wuku}`}
          >
            {dayData.pancawara}
          </p>
        )}
      </div>
    </button>
  );
};

export default CalendarDayCell;