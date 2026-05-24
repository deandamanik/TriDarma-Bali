import { useState } from 'react';
import { FiBell, FiCheckCircle, FiX } from 'react-icons/fi';

const reminderOptions = [
  {
    label: 'On the day',
    value: 'on-the-day',
  },
  {
    label: '1 day before',
    value: '1-day-before',
  },
  {
    label: '3 days before',
    value: '3-days-before',
  },
  {
    label: '1 week before',
    value: '1-week-before',
  },
];

const CalendarReminderModal = ({
  isOpen,
  event,
  selectedDate,
  onClose,
}) => {
  const [selectedReminder, setSelectedReminder] = useState('1-day-before');
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSaveReminder = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-brown-dark/55 px-5">
      <div className="w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-2xl">
        <div className="flex items-start justify-between bg-brown-normal px-6 py-5 text-orange-light">
          <div>
            <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
              <FiBell size={20} />
            </div>

            <h2 className="text-xl font-extrabold leading-tight">
              Set Ceremony Reminder
            </h2>

            <p className="mt-1 text-sm font-medium text-orange-light/75">
              Get reminded before this Balinese ceremony.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close reminder modal"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="p-6">
          {event ? (
            <div className="rounded-2xl border border-yellow-normal bg-yellow-light p-4">
              <p className="text-xs font-bold uppercase text-brown-dark/40">
                Ceremony
              </p>

              <h3 className="mt-1 text-lg font-extrabold text-brown-normal">
                {event.title}
              </h3>

              <p className="mt-2 text-sm font-medium leading-relaxed text-brown-dark/60">
                {event.description}
              </p>

              <div className="mt-4 grid gap-3 text-xs font-semibold text-brown-dark/60">
                <div>
                  <p className="font-bold text-brown-dark/35">Date</p>
                  <p>{selectedDate}</p>
                </div>

                <div>
                  <p className="font-bold text-brown-dark/35">Location</p>
                  <p>{event.location}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-yellow-normal bg-yellow-light p-4">
              <h3 className="text-lg font-extrabold text-brown-normal">
                No ceremony selected
              </h3>

              <p className="mt-2 text-sm font-medium text-brown-dark/60">
                Please select a date that contains a ceremony before setting a reminder.
              </p>
            </div>
          )}

          {event && (
            <>
              <div className="mt-6">
                <p className="mb-3 text-sm font-extrabold text-brown-normal">
                  Remind me
                </p>

                <div className="grid gap-3">
                  {reminderOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-3 transition ${
                        selectedReminder === option.value
                          ? 'border-brown-normal bg-orange-light text-brown-normal'
                          : 'border-yellow-normal bg-white text-brown-dark hover:bg-yellow-light'
                      }`}
                    >
                      <span className="text-sm font-bold">
                        {option.label}
                      </span>

                      <input
                        type="radio"
                        name="reminder"
                        value={option.value}
                        checked={selectedReminder === option.value}
                        onChange={(event) =>
                          setSelectedReminder(event.target.value)
                        }
                        className="h-4 w-4 accent-brown-normal"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {isSaved && (
                <div className="mt-5 flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
                  <FiCheckCircle size={18} />
                  Reminder saved successfully.
                </div>
              )}

              <div className="mt-7 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-11 flex-1 rounded-xl border border-yellow-normal text-sm font-bold text-brown-normal transition hover:bg-orange-light"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSaveReminder}
                  className="h-11 flex-1 rounded-xl bg-brown-normal text-sm font-bold text-white transition hover:bg-brown-dark"
                >
                  Save Reminder
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarReminderModal;