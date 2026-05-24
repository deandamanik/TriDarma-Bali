const CalendarHolidaySummary = ({ events, selectedDate, meta }) => {
  const passedEvents = selectedDate
    ? events.filter((event) => new Date(event.date) < new Date(selectedDate))
    : [];

  const upcomingEvents = selectedDate
    ? events.filter((event) => new Date(event.date) >= new Date(selectedDate))
    : events;

  return (
    <section className="rounded-2xl bg-brown-normal p-5 text-orange-light shadow-lg">
      <h2 className="text-base font-extrabold">
        Balinese Holidays in {meta.gregorian}
      </h2>

      <p className="mt-2 text-sm font-medium leading-relaxed text-orange-light/80">
        Here are some Balinese holidays this month.
      </p>

      <div className="mt-5 rounded-xl border border-orange-light bg-orange-normal p-4 text-white">
        <div>
          <h3 className="text-sm font-extrabold">Has Passed</h3>

          <ul className="mt-2 space-y-1 text-[11px] font-semibold">
            {passedEvents.length > 0 ? (
              passedEvents.map((event) => (
                <li key={event.id}>• {event.title}</li>
              ))
            ) : (
              <li>• No passed holidays</li>
            )}
          </ul>
        </div>

        <div className="my-4 h-px bg-white/80" />

        <div>
          <h3 className="text-sm font-extrabold">Will Come</h3>

          <ul className="mt-2 space-y-1 text-[11px] font-semibold">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <li key={event.id}>• {event.title}</li>
              ))
            ) : (
              <li>• No upcoming holidays</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CalendarHolidaySummary;