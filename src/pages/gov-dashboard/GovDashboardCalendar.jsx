import { Link } from 'react-router-dom';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const GovDashboardCalendar = () => {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="rounded-2xl border border-brown-dark/5 bg-white p-8 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-12">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-orange-light text-brown-normal">
            <FiCalendar size={26} />
          </div>

          <h2 className="mt-5 text-xl font-bold text-brown-normal sm:text-2xl">
            Balinese Traditional Ceremony Calendar
          </h2>

          <p className="mt-2 text-sm font-medium leading-relaxed text-brown-dark/60">
            Traditional ceremony schedules that need to be monitored by the
            Pemprov Bali team. View ceremonial details in the public TriDarma
            Bali calendar.
          </p>

          <Link
            to="/calendar"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-brown-normal px-5 text-sm font-bold text-orange-light transition hover:bg-brown-dark"
          >
            <span>Open Calendar</span>
            <FiArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GovDashboardCalendar;