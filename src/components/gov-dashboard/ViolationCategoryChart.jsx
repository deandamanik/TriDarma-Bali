import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiPieChart } from 'react-icons/fi';

const ViolationCategoryChart = ({ categories }) => {
  const total = useMemo(
    () => categories.reduce((sum, c) => sum + c.count, 0),
    [categories]
  );

  // Buat segments untuk SVG donut
  const segments = useMemo(() => {
    const radius = 75;
    const strokeWidth = 28;
    const circumference = 2 * Math.PI * radius;

    let cumulativeOffset = 0;

    return categories.map((cat) => {
      const percentage = (cat.count / total) * 100;
      const dashLength = (percentage / 100) * circumference;
      const dashGap = circumference - dashLength;

      const segment = {
        ...cat,
        percentage,
        dashArray: `${dashLength} ${dashGap}`,
        dashOffset: -cumulativeOffset,
      };

      cumulativeOffset += dashLength;
      return segment;
    });
  }, [categories, total]);

  // Top category (untuk display di tengah)
  const topCategory = useMemo(() => {
    return [...categories].sort((a, b) => b.count - a.count)[0];
  }, [categories]);

  return (
    <section className="rounded-2xl border border-orange-light-active bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-start gap-2">
        <FiPieChart size={16} className="mt-0.5 shrink-0 text-brown-normal" />
        <div>
          <h2 className="text-base font-extrabold text-brown-normal sm:text-lg">
            Kategori Pelanggaran
          </h2>
          <p className="mt-0.5 text-xs font-medium text-brown-dark/55">
            Breakdown by violation type
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[180px_1fr] sm:items-center">
        {/* Donut Chart */}
        <div className="relative mx-auto h-44 w-44 sm:h-44 sm:w-44">
          <svg
            viewBox="0 0 200 200"
            className="-rotate-90 transform"
            aria-label="Violation categories donut chart"
          >
            {/* Background ring */}
            <circle
              cx="100"
              cy="100"
              r="75"
              fill="none"
              stroke="#fcf5ee"
              strokeWidth="28"
            />

            {/* Segments */}
            {segments.map((seg, idx) => (
              <motion.circle
                key={seg.id}
                cx="100"
                cy="100"
                r="75"
                fill="none"
                stroke={seg.color}
                strokeWidth="28"
                strokeDasharray={seg.dashArray}
                strokeDashoffset={seg.dashOffset}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              />
            ))}
          </svg>

          {/* Center label */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-brown-dark/45">
              Total
            </p>
            <p className="text-3xl font-extrabold leading-none text-brown-normal">
              {total}
            </p>
            <p className="mt-0.5 text-[10px] font-bold text-brown-dark/55">
              reports
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {[...categories]
            .sort((a, b) => b.count - a.count)
            .map((cat, idx) => {
              const pct = ((cat.count / total) * 100).toFixed(1);
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  <span className="flex-1 truncate text-xs font-bold text-brown-dark/75">
                    {cat.label}
                  </span>
                  <span className="text-xs font-extrabold text-brown-normal">
                    {cat.count}
                  </span>
                  <span className="w-10 text-right text-[10px] font-bold text-brown-dark/45">
                    {pct}%
                  </span>
                </motion.div>
              );
            })}
        </div>
      </div>

      {topCategory && (
        <div className="mt-5 rounded-xl border border-yellow-normal/50 bg-yellow-light p-3">
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-brown-dark/55">
            Top Concern
          </p>
          <p className="mt-1 text-sm font-extrabold text-brown-normal">
            {topCategory.label} ({((topCategory.count / total) * 100).toFixed(0)}
            % of all reports)
          </p>
        </div>
      )}
    </section>
  );
};

export default ViolationCategoryChart;