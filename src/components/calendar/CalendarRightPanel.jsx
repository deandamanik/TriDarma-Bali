import { FiBell, FiCalendar, FiClock, FiMapPin, FiSun } from 'react-icons/fi';

const formatSelectedDate = (dateKey) => {
  if (!dateKey) return 'Select a date';

  return new Date(dateKey).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const CalendarRightPanel = ({
  selectedDate,
  selectedDayData,
  onOpenDatePicker,
  onOpenReminder,
}) => {
  const selectedEvents = selectedDayData?.events || [];
  const selectedEvent = selectedEvents[0];

  return (
    <section>
      <div className="mb-5 flex items-center justify-between border-b border-yellow-normal pb-5">
        <div>
          <h2 className="text-base font-extrabold text-brown-normal">
            {formatSelectedDate(selectedDate)}
          </h2>

          <p className="mt-1 text-xs font-semibold text-brown-dark/45">
            {selectedEvents.length} ceremony
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenDatePicker}
          className="grid h-11 w-11 place-items-center rounded-xl text-brown-normal transition hover:bg-yellow-light"
          aria-label="Open date picker"
        >
          <FiCalendar size={27} />
        </button>
      </div>

      {selectedEvent ? (
        <article className="overflow-hidden rounded-2xl border border-yellow-normal bg-yellow-light">
          <div className="p-5">
            <h3 className="text-base font-extrabold text-brown-normal">
              {selectedEvent.title}
            </h3>

            <p className="mt-2 text-sm font-medium leading-relaxed text-brown-dark/65">
              {selectedEvent.description}
            </p>
          </div>

          <div className="border-t border-brown-normal/20 px-5 py-4">
            <div className="space-y-3 text-xs text-brown-dark/60">
              <div className="flex gap-2">
                <FiClock className="mt-0.5 shrink-0 text-brown-dark/35" />
                <div>
                  <p className="font-bold text-brown-dark/35">Saka</p>
                  <p className="font-semibold">{selectedDayData.saka}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <FiSun className="mt-0.5 shrink-0 text-brown-dark/35" />
                <div>
                  <p className="font-bold text-brown-dark/35">Pawukon</p>
                  <p className="font-semibold">{selectedDayData.pawukon}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <FiMapPin className="mt-0.5 shrink-0 text-brown-dark/35" />
                <div>
                  <p className="font-bold text-brown-dark/35">Location</p>
                  <p className="font-semibold">{selectedEvent.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 pt-0">
            <button
              type="button"
              onClick={() => onOpenReminder(selectedEvent)}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brown-normal text-sm font-bold text-white transition hover:bg-brown-dark"
            >
              <FiBell size={15} />
              Remind Me
            </button>
          </div>
        </article>
      ) : (
        <article className="rounded-2xl border border-yellow-normal bg-yellow-light p-5">
          <h3 className="text-base font-extrabold text-brown-normal">
            Balinese Day Information
          </h3>

          <div className="mt-4 space-y-3 text-xs text-brown-dark/60">
            <div>
              <p className="font-bold text-brown-dark/35">Saka</p>
              <p className="font-semibold">{selectedDayData?.saka || '-'}</p>
            </div>

            <div>
              <p className="font-bold text-brown-dark/35">Pawukon</p>
              <p className="font-semibold">{selectedDayData?.pawukon || '-'}</p>
            </div>

            <div>
              <p className="font-bold text-brown-dark/35">Wuku</p>
              <p className="font-semibold">{selectedDayData?.wuku || '-'}</p>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default CalendarRightPanel;