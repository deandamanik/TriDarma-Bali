import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiHome,
    FiMapPin,
    FiShoppingBag,
    FiSettings,
    FiLogOut,
    FiX,
} from 'react-icons/fi';
import logo from '../../assets/tridarma-logo.svg';
import { operatorUser } from '../../data/operatorDashboardData';

const navItems = [
    { to: '/operator-dashboard', label: 'Overview', icon: FiHome, end: true },
    { to: '/operator-dashboard/pura', label: 'Manage Temples', icon: FiMapPin },
    { to: '/operator-dashboard/umkm', label: 'Local UMKM', icon: FiShoppingBag },
    { to: '/operator-dashboard/pengaturan', label: 'Settings', icon: FiSettings },
];

const OperatorSidebar = ({ isMobileOpen, onCloseMobile }) => {
    const navigate = useNavigate();

    const content = (
        <div className="flex h-full flex-col bg-white">
            {/* Profile card */}
            <div className="px-5 pb-4 pt-6 lg:pt-7">
                <div className="flex items-center gap-3 rounded-2xl bg-yellow-light p-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brown-normal text-sm font-bold text-orange-light">
                        {operatorUser.initials}
                    </div>
                    <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-brown-normal">
                            {operatorUser.name}
                        </p>
                        <p className="truncate text-[11px] font-medium text-brown-dark/55">
                            {operatorUser.role}
                        </p>
                    </div>
                </div>

                {/* Scope indicator */}
                <div className="mt-3 inline-flex w-full items-center gap-1.5 rounded-lg bg-orange-light/60 px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span className="truncate text-[11px] font-semibold text-brown-dark/70">
                        Region: {operatorUser.region}
                    </span>
                </div>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto px-3 pb-4">
                <ul className="space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end={item.end}
                                    onClick={onCloseMobile}
                                    className={({ isActive }) =>
                                        `group flex items-center gap-3 rounded-xl px-4 py-3 text-[13.5px] font-semibold transition-all ${isActive
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
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="border-t border-brown-dark/5 px-5 py-4">
                <p className="mb-2 text-[10.5px] font-medium text-brown-dark/45">
                    Registered by:
                    <br />
                    <span className="font-semibold text-brown-dark/65">
                        {operatorUser.registeredBy}
                    </span>
                </p>
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-[13.5px] font-semibold text-rose-600 transition hover:bg-rose-50 cursor-pointer"
                >
                    <FiLogOut size={17} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop */}
            <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-brown-dark/5 lg:block xl:w-64">
                <div className="flex h-16 items-center gap-2.5 border-b border-brown-dark/5 bg-white px-5">
                    <img src={logo} alt="TriDarma Bali" className="h-9 w-auto" />
                    <span className="text-base font-bold tracking-tight text-brown-normal">
                        TriDarma<span className="text-orange-normal">Bali</span>
                    </span>
                </div>
                {content}
            </aside>

            {/* Mobile drawer */}
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
                                    className="grid h-9 w-9 place-items-center rounded-lg text-brown-dark/70 hover:bg-orange-light cursor-pointer"
                                    aria-label="Close menu"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>
                            {content}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default OperatorSidebar;