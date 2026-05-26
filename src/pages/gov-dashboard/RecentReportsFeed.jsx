import { motion } from 'framer-motion';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const severityDot = {
  critical: 'bg-rose-500',
  high: 'bg-orange-normal',
  medium: 'bg-yellow-normal',
  low: 'bg-sky-400',
};

const statusBadge = {
  pending: 'bg-rose-50 text-rose-700',
  investigating: 'bg-sky-50 text-sky-700',
  resolved: 'bg-emerald-50 text-emerald-700',
};

const statusLabel = {
  pending: 'Menunggu',
  investigating: 'Diproses',
  resolved: 'Selesai',
};

const RecentReportsFeed = ({ reports, limit = 5 }) => {
  const visible = reports.slice(0, limit);

  return (
    <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="text-base font-bold text-brown-normal sm:text-[17px]">
          Laporan Terbaru
        </h3>

        <Link
          to="/gov-dashboard/laporan"
          className="inline-flex items-center gap-1 text-[12px] font-semibold text-brown-dark/65 transition hover:text-brown-normal"
        >
          <span>Lihat semua</span>
          <FiArrowRight size={12} />
        </Link>
      </div>

      <div className="space-y-2.5">
        {visible.map((report, idx) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="rounded-xl border border-brown-dark/5 bg-yellow-light/40 p-3 transition hover:border-brown-normal/15 hover:bg-yellow-light"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 flex-1 items-start gap-2.5">
                <span
                  className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${severityDot[report.severity]}`}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-bold text-brown-normal">
                    {report.title}
                  </p>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-[11.5px] font-medium text-brown-dark/55">
                    <FiMapPin size={11} className="shrink-0" />
                    {report.temple}
                  </p>
                  <p className="mt-0.5 text-[10.5px] font-medium text-brown-dark/45">
                    {report.time}
                  </p>
                </div>
              </div>

              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${statusBadge[report.status]}`}
              >
                {statusLabel[report.status]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentReportsFeed;