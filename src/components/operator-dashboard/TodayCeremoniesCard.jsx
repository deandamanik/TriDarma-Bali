import { motion } from 'framer-motion';
import { FiSun, FiClock, FiMapPin } from 'react-icons/fi';

const statusConfig = {
    ongoing: {
        label: 'Ongoing',
        badge: 'bg-emerald-50 text-emerald-700',
        dot: 'bg-emerald-500',
    },
    upcoming: {
        label: 'Upcoming',
        badge: 'bg-orange-light text-orange-dark-active',
        dot: 'bg-orange-normal',
    },
    done: {
        label: 'Done',
        badge: 'bg-brown-light text-brown-dark/60',
        dot: 'bg-brown-dark/30',
    },
};

const TodayCeremoniesCard = ({ ceremonies }) => {
    return (
        <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-light text-orange-normal-active">
                        <FiSun size={16} />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-brown-normal sm:text-[17px]">
                            Today's Ceremonies
                        </h3>
                        <p className="text-[12px] font-medium text-brown-dark/55">
                            {ceremonies.length} ceremonies to monitor
                        </p>
                    </div>
                </div>
            </div>

            {ceremonies.length === 0 ? (
                <p className="py-8 text-center text-[12.5px] font-medium text-brown-dark/45">
                    No ceremonies today.
                </p>
            ) : (
                <div className="space-y-2.5">
                    {ceremonies.map((ceremony, idx) => {
                        const s = statusConfig[ceremony.status];
                        return (
                            <motion.div
                                key={ceremony.id}
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25, delay: idx * 0.06 }}
                                className="flex items-start gap-3 rounded-xl border border-brown-dark/5 bg-yellow-light/40 p-3.5"
                            >
                                {/* Timeline dot */}
                                <div className="relative shrink-0">
                                    <div className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
                                    {ceremony.status === 'ongoing' && (
                                        <div className={`absolute inset-0 h-2.5 w-2.5 animate-ping rounded-full ${s.dot} opacity-75`} />
                                    )}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-start justify-between gap-2">
                                        <p className="text-[13px] font-bold text-brown-normal">
                                            {ceremony.name}
                                        </p>
                                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${s.badge}`}>
                                            {s.label}
                                        </span>
                                    </div>

                                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] font-medium text-brown-dark/60">
                                        <span className="inline-flex items-center gap-1">
                                            <FiMapPin size={11} />
                                            {ceremony.temple}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <FiClock size={11} />
                                            {ceremony.time}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TodayCeremoniesCard;