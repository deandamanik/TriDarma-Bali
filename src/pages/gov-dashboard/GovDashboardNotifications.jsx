import { motion } from 'framer-motion';
import {
  FiBell,
  FiAlertTriangle,
  FiCheckCircle,
  FiTrendingUp,
  FiInbox,
  FiInfo,
} from 'react-icons/fi';
import { notifications } from '../../data/govDashboardData';

const typeMeta = {
  new: { icon: FiInbox, color: 'text-sky-600', bg: 'bg-sky-50' },
  escalation: {
    icon: FiAlertTriangle,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  resolved: {
    icon: FiCheckCircle,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  alert: {
    icon: FiTrendingUp,
    color: 'text-orange-normal-active',
    bg: 'bg-orange-light',
  },
  info: { icon: FiInfo, color: 'text-brown-normal', bg: 'bg-yellow-light' },
};

const GovDashboardNotifications = () => {
  const unread = notifications.filter((n) => n.unread).length;

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <FiBell size={17} className="text-brown-normal" />

            <h3 className="text-base font-bold text-brown-normal">
              All Notifications
            </h3>

            {unread > 0 && (
              <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1.5 text-[10px] font-bold text-white">
                {unread}
              </span>
            )}
          </div>

          <button
            type="button"
            className="cursor-pointer text-[12px] font-semibold text-brown-dark/60 hover:text-brown-normal"
          >
            Mark all as read
          </button>
        </div>

        <div className="space-y-2.5">
          {notifications.map((notif, idx) => {
            const meta = typeMeta[notif.type];
            const Icon = meta.icon;

            return (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className={`flex items-start gap-3 rounded-xl border p-4 transition ${
                  notif.unread
                    ? 'border-brown-normal/15 bg-yellow-light/40 hover:bg-yellow-light'
                    : 'border-brown-dark/5 bg-white hover:bg-orange-light/30'
                }`}
              >
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${meta.bg}`}
                >
                  <Icon size={17} className={meta.color} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[13.5px] font-bold text-brown-normal">
                      {notif.title}
                    </p>

                    {notif.unread && (
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                    )}
                  </div>

                  <p className="mt-0.5 text-[12.5px] font-medium leading-relaxed text-brown-dark/65">
                    {notif.desc}
                  </p>

                  <p className="mt-1.5 text-[11px] font-medium text-brown-dark/45">
                    {notif.time}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GovDashboardNotifications;