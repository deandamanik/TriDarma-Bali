import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiBarChart2,
  FiFileText,
  FiMap,
  FiCalendar,
  FiBell,
  FiSettings,
  FiLogOut,
  FiX,
} from 'react-icons/fi';
import logo from '../../assets/tridarma-logo.svg';
import { govUser } from '../../data/govDashboardData';

const navItems = [
  { to: '/gov-dashboard', label: 'Summary', icon: FiBarChart2, end: true },
  {
    to: '/gov-dashboard/laporan',
    label: 'Incoming Reports',
    icon: FiFileText,
    badge: 19,
  },
  { to: '/gov-dashboard/peta', label: 'Violation Map', icon: FiMap },
  {
    to: '/gov-dashboard/kalender',
    label: 'Ceremony Calendar',
    icon: FiCalendar,
  },
  {
    to: '/gov-dashboard/notifikasi',
    label: 'Notifications',
    icon: FiBell,
    badge: 5,
    badgeStyle: 'alert',
  },
  { to: '/gov-dashboard/pengaturan', label: 'Settings', icon: FiSettings },
];

const GovSidebar = ({ isMobileOpen, onCloseMobile }) => {
  const navigate = useNavigate();

  const sidebarContent = (
    <div className="flex h-full flex-col bg-white">
      <div className="px-5 pb-5 pt-6 lg:pt-7">
        <div className="flex items-center gap-3 rounded-2xl bg-yellow-light p-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brown-normal text-sm font-bold text-orange-light">
            {govUser.initials}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-brown-normal">
              {govUser.name}
            </p>

            <p className="truncate text-[11px] font-medium text-brown-dark/55">
              {govUser.role}
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isAlertBadge = item.badgeStyle === 'alert';

            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={onCloseMobile}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3 rounded-xl px-4 py-3 text-[13.5px] font-semibold transition-all ${
                      isActive
                        ? 'bg-brown-normal text-orange-light shadow-sm'
                        : 'text-brown-dark/70 hover:bg-orange-light hover:text-brown-normal'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={17}
                        className={
                          isActive
                            ? 'text-orange-light'
                            : 'text-brown-dark/55 group-hover:text-brown-normal'
                        }
                      />

                      <span className="flex-1 truncate">{item.label}</span>

                      {item.badge !== undefined && (
                        <span
                          className={`inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                            isActive
                              ? 'bg-orange-light/25 text-orange-light'
                              : isAlertBadge
                              ? 'bg-rose-500 text-white'
                              : 'bg-brown-dark text-orange-light'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-brown-dark/5 px-5 py-4">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-2.5 text-[13.5px] font-semibold text-rose-600 transition hover:bg-rose-50"
        >
          <FiLogOut size={17} />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-brown-dark/5 lg:block xl:w-64">
        <div className="flex h-16 items-center gap-2.5 border-b border-brown-dark/5 bg-white px-5">
          <img src={logo} alt="TriDarma Bali" className="h-9 w-auto" />

          <span className="text-base font-bold tracking-tight text-brown-normal">
            TriDarma<span className="text-orange-normal">Bali</span>
          </span>
        </div>

        {sidebarContent}
      </aside>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onCloseMobile}
              className="fixed inset-0 z-40 bg-black lg:hidden"
            />

            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-brown-dark/5 px-5">
                <div className="flex items-center gap-2.5">
                  <img src={logo} alt="TriDarma Bali" className="h-9 w-auto" />

                  <span className="text-base font-bold tracking-tight text-brown-normal">
                    TriDarma<span className="text-orange-normal">Bali</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg text-brown-dark/70 hover:bg-orange-light"
                  aria-label="Close menu"
                >
                  <FiX size={20} />
                </button>
              </div>

              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default GovSidebar;