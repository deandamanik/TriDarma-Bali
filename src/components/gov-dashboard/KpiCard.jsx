import { motion } from 'framer-motion';

// Variant config: warna icon, warna angka, warna badge trend
const variants = {
  brown: {
    iconBg: 'bg-orange-light',
    iconColor: 'text-brown-normal',
    valueColor: 'text-brown-normal',
  },
  green: {
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    valueColor: 'text-emerald-600',
  },
  orange: {
    iconBg: 'bg-orange-light',
    iconColor: 'text-orange-normal-active',
    valueColor: 'text-orange-normal-active',
  },
  blue: {
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    valueColor: 'text-sky-600',
  },
};

const trendBadgeStyles = {
  positive: 'bg-emerald-50 text-emerald-700',
  negative: 'bg-rose-50 text-rose-700',
  neutral: 'bg-orange-light text-brown-dark/70',
};

const KpiCard = ({
  icon: Icon,
  label,
  value,
  variant = 'brown',
  trend,
  trendText,
  trendType = 'neutral',
  index = 0,
}) => {
  const v = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.07, ease: 'easeOut' }}
      className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] transition hover:shadow-md sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${v.iconBg}`}>
          <Icon size={20} className={v.iconColor} />
        </div>

        {(trend !== undefined || trendText) && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${trendBadgeStyles[trendType]}`}
          >
            {trendText || `${trend > 0 ? '+' : ''}${trend}%`}
          </span>
        )}
      </div>

      <div className="mt-5">
        <p className={`text-4xl font-extrabold leading-none tracking-tight sm:text-[40px] ${v.valueColor}`}>
          {value}
        </p>
        <p className="mt-2 text-sm font-medium text-brown-dark/65">{label}</p>
      </div>
    </motion.div>
  );
};

export default KpiCard;