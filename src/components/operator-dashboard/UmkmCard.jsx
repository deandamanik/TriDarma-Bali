import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiEdit3, FiTrash2 } from 'react-icons/fi';
import StatusBadge from './StatusBadge';
import { umkmTypes } from '../../data/operatorDashboardData';

// Color accent mapping per UMKM type
const typeAccent = {
    warung: 'bg-orange-light text-orange-dark-active',
    cafe: 'bg-yellow-light text-yellow-darker',
    'oleh-oleh': 'bg-emerald-50 text-emerald-700',
    kerajinan: 'bg-brown-light text-brown-normal',
    'produk-lokal': 'bg-sky-50 text-sky-700',
    others: 'bg-brown-light text-brown-dark/60',
};

const getTypeLabel = (typeId) =>
    umkmTypes.find((t) => t.id === typeId)?.label || 'Others';

const UmkmCard = ({ umkm, onEdit, onDelete, index = 0 }) => {
    // Initials from name for avatar
    const initials = umkm.name
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] transition hover:shadow-md"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 flex-1 items-start gap-3">
                    {/* Avatar */}
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brown-normal text-sm font-bold text-orange-light">
                        {initials}
                    </div>

                    <div className="min-w-0 flex-1">
                        <h3 className="truncate text-[15px] font-bold text-brown-normal">
                            {umkm.name}
                        </h3>

                        <div className="mt-1 flex flex-wrap items-center gap-1.5">
                            <span
                                className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold ${typeAccent[umkm.type]}`}
                            >
                                {getTypeLabel(umkm.type)}
                            </span>
                            <StatusBadge status={umkm.status} size="sm" />
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-3 line-clamp-2 text-[12px] font-medium leading-relaxed text-brown-dark/65">
                {umkm.description}
            </p>

            {/* Info */}
            <div className="mt-3 space-y-1.5 rounded-xl bg-orange-light/40 p-3">
                <p className="text-[12px] font-semibold text-brown-normal">
                    {umkm.owner}
                </p>
                <div className="flex items-center gap-1.5 text-[11.5px] font-medium text-brown-dark/60">
                    <FiPhone size={11} className="shrink-0" />
                    <span className="truncate">{umkm.phone}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11.5px] font-medium text-brown-dark/60">
                    <FiMapPin size={11} className="shrink-0" />
                    <span className="truncate">{umkm.address}</span>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-3 flex items-center justify-between border-t border-brown-dark/5 pt-3">
                <p className="text-[10.5px] font-medium text-brown-dark/45">
                    Registered {umkm.registeredDate}
                </p>

                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        onClick={() => onEdit(umkm)}
                        className="grid h-8 w-8 place-items-center rounded-lg text-brown-dark/65 transition hover:bg-orange-light hover:text-brown-normal cursor-pointer"
                        aria-label="Edit"
                    >
                        <FiEdit3 size={14} />
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(umkm)}
                        className="grid h-8 w-8 place-items-center rounded-lg text-brown-dark/65 transition hover:bg-rose-50 hover:text-rose-600 cursor-pointer"
                        aria-label="Delete"
                    >
                        <FiTrash2 size={14} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default UmkmCard;