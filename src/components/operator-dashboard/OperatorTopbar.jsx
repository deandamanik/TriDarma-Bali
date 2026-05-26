import { FiBell, FiMenu } from 'react-icons/fi';

const formatToday = () =>
    new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

const OperatorTopbar = ({ title, subtitle, onOpenMobileSidebar, action }) => {
    return (
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-brown-dark/5 bg-orange-light/95 px-4 backdrop-blur-md sm:px-6 lg:h-20 lg:px-8">
            <button
                type="button"
                onClick={onOpenMobileSidebar}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-brown-dark/70 hover:bg-orange-light-active lg:hidden cursor-pointer"
                aria-label="Open menu"
            >
                <FiMenu size={20} />
            </button>

            <div className="min-w-0 flex-1">
                <h1 className="truncate text-lg font-bold leading-tight text-brown-normal sm:text-xl lg:text-[22px]">
                    {title}
                </h1>
                <p className="mt-0.5 truncate text-[11px] font-medium text-brown-dark/55 sm:text-[12.5px]">
                    {subtitle || `${formatToday()} · Welcome back`}
                </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                {action}

                <button
                    type="button"
                    className="relative grid h-10 w-10 place-items-center rounded-xl border border-brown-dark/10 bg-white text-brown-dark/70 transition hover:border-brown-normal/30 hover:bg-orange-light hover:text-brown-normal cursor-pointer"
                    aria-label="Notifications"
                >
                    <FiBell size={17} />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
                </button>
            </div>
        </header>
    );
};

export default OperatorTopbar;