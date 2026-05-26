import { motion } from 'framer-motion';
import {
    FiActivity,
    FiClock,
    FiAlertCircle,
    FiShoppingBag,
    FiEdit3,
    FiLock,
} from 'react-icons/fi';

const typeConfig = {
    update: {
        icon: FiEdit3,
        bg: 'bg-sky-50',
        color: 'text-sky-600',
    },
    ceremony: {
        icon: FiAlertCircle,
        bg: 'bg-orange-light',
        color: 'text-orange-normal-active',
    },
    umkm: {
        icon: FiShoppingBag,
        bg: 'bg-emerald-50',
        color: 'text-emerald-600',
    },
    status: {
        icon: FiLock,
        bg: 'bg-rose-50',
        color: 'text-rose-600',
    },
};

const RecentActivityCard = ({ activities }) => {
    return (
        <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
            <div className="mb-4 flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-orange-light text-brown-normal">
                    <FiActivity size={16} />
                </div>
                <div>
                    <h3 className="text-base font-bold text-brown-normal sm:text-[17px]">
                        Recent Activities
                    </h3>
                    <p className="text-[12px] font-medium text-brown-dark/55">
                        Track of changes you made
                    </p>
                </div>
            </div>

            <div className="space-y-2">
                {activities.map((act, idx) => {
                    const t = typeConfig[act.type] || typeConfig.update;
                    const Icon = t.icon;

                    return (
                        <motion.div
                            key={act.id}
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: idx * 0.04 }}
                            className="flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-orange-light/40"
                        >
                            <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${t.bg}`}>
                                <Icon size={14} className={t.color} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-[12.5px] font-medium text-brown-dark/75">
                                    <span className="font-semibold">{act.action}</span>{' '}
                                    <span className="font-bold text-brown-normal">{act.target}</span>
                                </p>
                                <p className="mt-0.5 inline-flex items-center gap-1 text-[10.5px] font-medium text-brown-dark/45">
                                    <FiClock size={9} />
                                    {act.time}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentActivityCard;