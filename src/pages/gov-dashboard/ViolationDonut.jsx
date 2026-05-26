import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const ViolationDonut = ({ categories }) => {
    const [hoverId, setHoverId] = useState(null);

    const total = useMemo(
        () => categories.reduce((s, c) => s + c.count, 0),
        [categories]
    );

    const segments = useMemo(() => {
        const R = 70;
        const C = 2 * Math.PI * R;

        return categories.map((cat, idx) => {
            const pct = cat.count / total;
            const dash = pct * C;
            const offset = categories
                .slice(0, idx)
                .reduce((sum, prevCat) => sum + (prevCat.count / total) * C, 0);

            return {
                ...cat,
                dashArray: `${dash} ${C - dash}`,
                dashOffset: -offset,
            };
        });
    }, [categories, total]);

    return (
        <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
            <div className="mb-4">
                <h3 className="text-base font-bold text-brown-normal sm:text-[17px]">
                    Jenis Pelanggaran
                </h3>
                <p className="mt-0.5 text-[12.5px] font-medium text-brown-dark/55">
                    Distribusi bulan ini
                </p>
            </div>

            <div className="flex flex-col items-center gap-5">
                {/* Donut */}
                <div className="relative h-44 w-44">
                    <svg viewBox="0 0 200 200" className="-rotate-90 transform">
                        <circle cx="100" cy="100" r="70" fill="none" stroke="#fcf5ee" strokeWidth="24" />
                        {segments.map((seg, idx) => (
                            <motion.circle
                                key={seg.id}
                                cx="100"
                                cy="100"
                                r="70"
                                fill="none"
                                stroke={seg.color}
                                strokeWidth={hoverId === seg.id ? 30 : 24}
                                strokeDasharray={seg.dashArray}
                                strokeDashoffset={seg.dashOffset}
                                strokeLinecap="butt"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                onMouseEnter={() => setHoverId(seg.id)}
                                onMouseLeave={() => setHoverId(null)}
                                style={{
                                    cursor: 'pointer',
                                    transition: 'stroke-width 0.2s ease',
                                }}
                            />
                        ))}
                    </svg>

                    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                        <p className="text-[11px] font-semibold text-brown-dark/55">Total</p>
                        <p className="text-3xl font-extrabold leading-none text-brown-normal">
                            {total}
                        </p>
                        <p className="mt-0.5 text-[10.5px] font-medium text-brown-dark/55">
                            laporan
                        </p>
                    </div>
                </div>

                {/* Legend */}
                <div className="w-full space-y-2.5">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, x: 6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            onMouseEnter={() => setHoverId(cat.id)}
                            onMouseLeave={() => setHoverId(null)}
                            className={`flex items-center gap-2.5 rounded-lg px-2 py-1 transition cursor-pointer ${hoverId === cat.id ? 'bg-orange-light' : ''
                                }`}
                        >
                            <span
                                className="h-2.5 w-2.5 shrink-0 rounded-full"
                                style={{ backgroundColor: cat.color }}
                            />
                            <span className="flex-1 truncate text-[13px] font-medium text-brown-dark/75">
                                {cat.label}
                            </span>
                            <span className="text-[13px] font-bold text-brown-normal">
                                {cat.percentage}%
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViolationDonut;