import { FiDownload, FiShield, FiRefreshCw, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const GovDashboardHero = ({
  activeRange,
  onChangeRange,
  rangeOptions,
  onExportAll,
  onRefresh,
  lastUpdated,
}) => {
  return (
    <section className="relative overflow-hidden bg-brown-normal text-orange-light">
      <div className="absolute inset-0 opacity-15">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="batik-dots"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="#f0d8a1" />
              <circle cx="0" cy="0" r="1" fill="#dd9e59" />
              <circle cx="60" cy="60" r="1" fill="#dd9e59" />
              <circle cx="60" cy="0" r="0.8" fill="#f0d8a1" />
              <circle cx="0" cy="60" r="0.8" fill="#f0d8a1" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#batik-dots)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-brown-normal via-brown-normal/95 to-brown-dark/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-10 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between"
        >
          <div className="min-w-0 flex-1">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-normal/40 bg-yellow-normal/10 px-3 py-1.5 backdrop-blur">
              <FiShield size={13} className="text-yellow-normal" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-yellow-normal">
                Provincial Government Panel · Restricted Access
              </span>
            </div>

            <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[34px]">
              Pemprov Bali Dashboard
            </h1>

            <p className="mt-1.5 max-w-2xl text-sm font-medium leading-relaxed text-yellow-normal/90 sm:text-[15px]">
              Real-time monitoring of cultural violation reports across 9
              regencies/cities — integrated with Pemprov Bali.
            </p>

            <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-orange-light/60">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span>Live · Last updated {lastUpdated}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:items-center">
            <div className="flex items-center rounded-2xl border border-yellow-normal/30 bg-white/10 p-1 backdrop-blur">
              {rangeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onChangeRange(option.value)}
                  className={`rounded-xl px-3 py-2 text-[12px] font-bold transition sm:px-4 ${
                    activeRange === option.value
                      ? 'bg-yellow-normal text-brown-normal'
                      : 'text-orange-light/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onRefresh}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-yellow-normal/30 bg-white/10 px-4 text-[12px] font-bold text-orange-light backdrop-blur transition hover:bg-white/20"
            >
              <FiRefreshCw size={14} />
              Refresh
            </button>

            <button
              type="button"
              onClick={onExportAll}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-yellow-normal px-4 text-[12px] font-bold text-brown-normal transition hover:bg-yellow-light"
            >
              <FiDownload size={14} />
              Export
            </button>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-orange-light/60">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
            <FiCalendar size={13} />
            2026 Monitoring Period
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5">
            Bali Province · 9 regencies/cities
          </span>
        </div>
      </div>
    </section>
  );
};

export default GovDashboardHero;