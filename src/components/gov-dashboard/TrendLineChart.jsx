import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// Smooth cardinal spline path antara titik-titik
const buildSmoothPath = (points) => {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
};

const formatK = (n) => `${Math.round(n / 1000)}K`;

const TrendLineChart = ({ data }) => {
  const [hoverIdx, setHoverIdx] = useState(null);

  const W = 720;
  const H = 280;
  const PAD = { top: 24, right: 24, bottom: 36, left: 48 };

  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const maxVal = useMemo(() => {
    const peak = Math.max(...data.flatMap((d) => [d.actual, d.target]));
    return Math.ceil(peak / 60000) * 60000;
  }, [data]);

  const minVal = 0;

  const xFor = (i) => PAD.left + (i / (data.length - 1)) * innerW;
  const yFor = (val) => PAD.top + innerH - ((val - minVal) / (maxVal - minVal)) * innerH;

  const actualPoints = data.map((d, i) => ({ x: xFor(i), y: yFor(d.actual) }));
  const targetPoints = data.map((d, i) => ({ x: xFor(i), y: yFor(d.target) }));

  const actualPath = buildSmoothPath(actualPoints);
  const targetPath = buildSmoothPath(targetPoints);

  // Y-axis ticks
  const yTicks = useMemo(() => {
    const steps = 4;
    return Array.from({ length: steps + 1 }, (_, i) => (maxVal / steps) * i);
  }, [maxVal]);

  return (
    <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-brown-normal sm:text-[17px]">
            Tren Kunjungan Wisatawan 2026
          </h3>
          <p className="mt-0.5 text-[12.5px] font-medium text-brown-dark/55">
            Dibandingkan dengan target tahunan
          </p>
        </div>

        <div className="flex items-center gap-3 text-[12px] font-semibold text-brown-dark/70">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-[3px] w-5 rounded-full bg-brown-normal" />
            Aktual
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="flex w-5 items-center">
              <span className="h-[2px] w-1.5 rounded-full bg-brown-dark/30" />
              <span className="ml-0.5 h-[2px] w-1.5 rounded-full bg-brown-dark/30" />
            </span>
            Target
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="h-full w-full"
          onMouseLeave={() => setHoverIdx(null)}
        >
          {/* Y grid lines */}
          {yTicks.map((tick) => (
            <g key={tick}>
              <line
                x1={PAD.left}
                y1={yFor(tick)}
                x2={W - PAD.right}
                y2={yFor(tick)}
                stroke="#efeae8"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <text
                x={PAD.left - 10}
                y={yFor(tick)}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize="11"
                fontWeight="600"
                fill="#7a4a35"
                opacity="0.55"
              >
                {tick === 0 ? '0K' : formatK(tick)}
              </text>
            </g>
          ))}

          {/* X labels */}
          {data.map((d, i) => (
            <text
              key={d.month}
              x={xFor(i)}
              y={H - 10}
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill="#7a4a35"
              opacity={hoverIdx === i ? '1' : '0.55'}
            >
              {d.month}
            </text>
          ))}

          {/* Target line (dashed) */}
          <motion.path
            d={targetPath}
            fill="none"
            stroke="#a67743"
            strokeWidth="2"
            strokeDasharray="6 5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            opacity="0.5"
          />

          {/* Actual line */}
          <motion.path
            d={actualPath}
            fill="none"
            stroke="#622b14"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />

          {/* Hover hotspots + dots */}
          {data.map((d, i) => (
            <g key={d.month}>
              <rect
                x={xFor(i) - innerW / (data.length * 2)}
                y={PAD.top}
                width={innerW / data.length}
                height={innerH}
                fill="transparent"
                onMouseEnter={() => setHoverIdx(i)}
                style={{ cursor: 'pointer' }}
              />
              <motion.circle
                cx={xFor(i)}
                cy={yFor(d.actual)}
                r={hoverIdx === i ? 5.5 : 3.5}
                fill="#622b14"
                stroke="#fff8e8"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.04 }}
                style={{ transition: 'r 0.2s ease' }}
              />

              {/* Hover line + tooltip */}
              {hoverIdx === i && (
                <>
                  <line
                    x1={xFor(i)}
                    y1={PAD.top}
                    x2={xFor(i)}
                    y2={H - PAD.bottom}
                    stroke="#622b14"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                    opacity="0.3"
                  />
                </>
              )}
            </g>
          ))}
        </svg>

        {/* HTML Tooltip overlay */}
        {hoverIdx !== null && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full"
            style={{
              left: `${(xFor(hoverIdx) / W) * 100}%`,
              top: `${(yFor(data[hoverIdx].actual) / H) * 100}%`,
              marginTop: '-12px',
            }}
          >
            <div className="whitespace-nowrap rounded-xl bg-brown-normal px-3 py-2 text-white shadow-xl">
              <p className="text-[11px] font-medium text-yellow-normal">
                {data[hoverIdx].month} 2026
              </p>
              <p className="text-sm font-bold">
                {data[hoverIdx].actual.toLocaleString('id-ID')}
              </p>
              <p className="text-[10px] font-medium text-orange-light/70">
                Target: {data[hoverIdx].target.toLocaleString('id-ID')}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendLineChart;