import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp } from 'react-icons/fi';

const TempleReportsBar = ({ data }) => {
  const [hoverIdx, setHoverIdx] = useState(null);

  const maxValue = useMemo(() => {
    const peak = Math.max(...data.map((d) => d.total));
    return Math.ceil(peak / 15) * 15;
  }, [data]);

  const yTicks = useMemo(() => {
    const steps = 4;
    return Array.from({ length: steps + 1 }, (_, i) => (maxValue / steps) * i);
  }, [maxValue]);

  return (
    <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-brown-normal sm:text-[17px]">
            Laporan per Lokasi Pura
          </h3>
          <p className="mt-0.5 text-[12.5px] font-medium text-brown-dark/55">
            Pelanggaran &amp; penyelesaian per pura
          </p>
        </div>

        <div className="grid h-8 w-8 place-items-center rounded-lg bg-orange-light text-brown-normal">
          <FiTrendingUp size={15} />
        </div>
      </div>

      <div className="flex gap-3">
        {/* Y-axis */}
        <div className="flex w-8 shrink-0 flex-col-reverse justify-between pb-9 pt-2 text-right text-[10.5px] font-semibold text-brown-dark/45">
          {yTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        {/* Bars area */}
        <div className="relative flex-1">
          {/* Grid lines */}
          <div className="absolute inset-0 bottom-9 flex flex-col-reverse justify-between">
            {yTicks.map((tick) => (
              <div key={tick} className="h-px w-full bg-brown-dark/5" />
            ))}
          </div>

          {/* Bars */}
          <div className="relative flex h-56 items-end gap-2 sm:gap-3">
            {data.map((item, idx) => {
              const totalH = (item.total / maxValue) * 100;
              const resolvedH = (item.resolved / maxValue) * 100;
              const isHovered = hoverIdx === idx;

              return (
                <div
                  key={item.id}
                  className="group relative flex h-full flex-1 items-end gap-1"
                  onMouseEnter={() => setHoverIdx(idx)}
                  onMouseLeave={() => setHoverIdx(null)}
                >
                  {/* Tooltip */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.12 }}
                      className="absolute -top-2 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-xl bg-brown-normal px-3 py-2 shadow-xl"
                    >
                      <p className="text-[11px] font-medium text-yellow-normal">
                        Pura {item.name}
                      </p>
                      <p className="text-[12px] font-semibold text-white">
                        Total: {item.total} · Selesai: {item.resolved}
                      </p>
                    </motion.div>
                  )}

                  {/* Total bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${totalH}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.06, ease: 'easeOut' }}
                    className={`relative w-full rounded-t-md transition-colors ${
                      isHovered ? 'bg-brown-normal' : 'bg-brown-normal/85'
                    }`}
                  />

                  {/* Resolved bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${resolvedH}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.06 + 0.15, ease: 'easeOut' }}
                    className={`relative w-full rounded-t-md transition-colors ${
                      isHovered ? 'bg-yellow-normal' : 'bg-yellow-normal/85'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* X labels */}
          <div className="mt-3 flex gap-2 sm:gap-3">
            {data.map((item, idx) => (
              <div
                key={item.id}
                className={`flex-1 text-center text-[11px] font-semibold transition ${
                  hoverIdx === idx ? 'text-brown-normal' : 'text-brown-dark/60'
                }`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-5 flex items-center justify-center gap-5 border-t border-brown-dark/5 pt-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-3 rounded-sm bg-brown-normal" />
          <span className="text-[12px] font-medium text-brown-dark/70">
            Total Laporan
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-3 rounded-sm bg-yellow-normal" />
          <span className="text-[12px] font-medium text-brown-dark/70">
            Terselesaikan
          </span>
        </div>
      </div>
    </div>
  );
};

export default TempleReportsBar;