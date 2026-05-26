import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiEdit3, FiAlertCircle } from 'react-icons/fi';
import StatusBadge from './StatusBadge';

const TempleCard = ({ temple, onEdit, index = 0 }) => {
    const utilizationPct = Math.round((temple.todayVisitors / temple.capacity) * 100);
    const utilizationColor =
        utilizationPct > 80
            ? 'bg-rose-500'
            : utilizationPct > 50
                ? 'bg-orange-normal'
                : 'bg-emerald-500';

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="overflow-hidden rounded-2xl border border-brown-dark/5 bg-white shadow-[0_1px_2px_rgba(98,43,20,0.04)] transition hover:shadow-md"
        >
            {/* Header dengan accent gradient */}
            <div className={`relative h-24 bg-gradient-to-br ${temple.accent}`}>
                <div className="absolute right-3 top-3">
                    <StatusBadge status={temple.status} size="sm" />
                </div>

                {temple.ceremonyActive && (
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-orange-dark-active backdrop-blur">
                        <FiAlertCircle size={10} />
                        <span>Ceremony until {temple.ceremonyEndDate}</span>
                    </div>
                )}
            </div>

            {/* Body */}
            <div className="p-4 sm:p-5">
                <div className="mb-3">
                    <h3 className="text-[15px] font-bold leading-tight text-brown-normal">
                        {temple.name}
                    </h3>
                    <p className="mt-0.5 text-[12px] font-medium text-brown-dark/55">
                        {temple.location}
                    </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-orange-light/40 p-2.5">
                        <div className="flex items-center gap-1.5 text-brown-dark/55">
                            <FiClock size={11} />
                            <span className="text-[10px] font-semibold">Opening Hours</span>
                        </div>
                        <p className="mt-1 text-[12.5px] font-bold text-brown-normal">
                            {temple.openingHours.open} – {temple.openingHours.close}
                        </p>
                    </div>

                    <div className="rounded-xl bg-orange-light/40 p-2.5">
                        <div className="flex items-center gap-1.5 text-brown-dark/55">
                            <FiUsers size={11} />
                            <span className="text-[10px] font-semibold">Today</span>
                        </div>
                        <p className="mt-1 text-[12.5px] font-bold text-brown-normal">
                            {temple.todayVisitors}
                            <span className="text-[10.5px] font-medium text-brown-dark/45">
                                {' '}
                                / {temple.capacity}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Capacity bar */}
                <div className="mt-3">
                    <div className="flex items-center justify-between text-[10.5px] font-semibold text-brown-dark/55">
                        <span>Capacity used</span>
                        <span className="text-brown-normal">{utilizationPct}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-brown-dark/5">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${utilizationPct}%` }}
                            transition={{ duration: 0.7, delay: index * 0.05 + 0.2 }}
                            className={`h-full rounded-full ${utilizationColor}`}
                        />
                    </div>
                </div>

                {/* Action */}
                <button
                    type="button"
                    onClick={() => onEdit(temple)}
                    className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-brown-normal text-[13px] font-bold text-orange-light transition hover:bg-brown-dark cursor-pointer"
                >
                    <FiEdit3 size={14} />
                    <span>Update Status</span>
                </button>
            </div>
        </motion.div>
    );
};

export default TempleCard;