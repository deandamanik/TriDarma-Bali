import { FiMapPin, FiClock } from 'react-icons/fi';
import { MY_REPORTS } from '../../data/profile';

// Warna badge per status laporan
const STATUS_STYLES = {
  'In Review': 'bg-yellow-normal/25 text-yellow-darker',
  Resolved: 'bg-green-100 text-green-700',
  Rejected: 'bg-red-100 text-red-600',
};

const MyReports = () => {
  if (MY_REPORTS.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-brown-normal/15 shadow-sm p-10 text-center">
        <p className="text-brown-normal/60 text-sm">
          You haven&apos;t submitted any reports yet.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {MY_REPORTS.map((report) => (
        <div
          key={report.id}
          className="bg-white rounded-3xl border border-brown-normal/15 shadow-sm p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="grow">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs font-bold text-brown-normal/40 tracking-wide">
                {report.id}
              </span>
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                  STATUS_STYLES[report.status] || 'bg-orange-light text-orange-dark'
                }`}
              >
                {report.status}
              </span>
            </div>
            <h3 className="mt-1.5 text-base font-bold text-brown-normal leading-snug">
              {report.title}
            </h3>
            <div className="mt-2 flex flex-col sm:flex-row sm:gap-5 gap-1 text-xs text-brown-normal/55 font-medium">
              <span className="flex items-center gap-1.5">
                <FiMapPin size={13} /> {report.location}
              </span>
              <span className="flex items-center gap-1.5">
                <FiClock size={13} /> {report.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReports;