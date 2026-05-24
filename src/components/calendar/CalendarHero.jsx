import {
    FiCalendar,
    FiChevronLeft,
    FiChevronRight,
    FiDownload,
} from 'react-icons/fi';
import calendarHero from '../../assets/calendar/calendar-hero.png';

const CalendarHero = ({
    meta,
    onPrevMonth,
    onNextMonth,
    onToday,
    onExportPdf,
    isExporting,
}) => {
    return (
        <section className="relative overflow-hidden bg-brown-normal text-orange-light">
            <img
                src={calendarHero}
                alt="Balinese calendar background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-brown-dark/60" />

            <div className="relative z-10 px-6 py-7 sm:px-8 lg:px-10">
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h1 className="text-[28px] font-extrabold leading-tight text-white sm:text-[30px]">
                            {meta.title}
                        </h1>

                        <p className="mt-1 max-w-[240px] text-sm font-medium leading-snug text-yellow-normal sm:max-w-none">
                            {meta.subtitle}
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                        <button
                            type="button"
                            onClick={onExportPdf}
                            disabled={isExporting}
                            className="hidden h-10 items-center gap-2 rounded-full bg-white/20 px-5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-60 md:inline-flex"
                        >
                            <FiDownload size={15} />
                            {isExporting ? 'Exporting...' : 'Export PDF'}
                        </button>

                        <button
                            type="button"
                            onClick={onToday}
                            className="hidden h-10 items-center rounded-full bg-white/20 px-5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/30 md:inline-flex"
                        >
                            Today
                        </button>

                        <button
                            type="button"
                            onClick={onPrevMonth}
                            className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
                            aria-label="Previous month"
                        >
                            <FiChevronLeft size={20} />
                        </button>

                        <button
                            type="button"
                            onClick={onNextMonth}
                            className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
                            aria-label="Next month"
                        >
                            <FiChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                    <div className="rounded-2xl bg-white/20 px-5 py-4 backdrop-blur">
                        <div className="mb-2 flex items-center gap-2 text-[11px] font-extrabold uppercase text-yellow-normal">
                            <FiCalendar size={13} />
                            Gregorian Calendar
                        </div>

                        <p className="text-lg font-extrabold text-white">
                            {meta.gregorian}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/20 px-5 py-4 backdrop-blur">
                        <div className="mb-2 flex items-center gap-2 text-[11px] font-extrabold uppercase text-yellow-normal">
                            ☾ Saka Calendar
                        </div>

                        <p className="text-lg font-extrabold text-white">
                            {meta.saka}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white/20 px-5 py-4 backdrop-blur sm:col-span-2 lg:col-span-1">
                        <div className="mb-2 flex items-center gap-2 text-[11px] font-extrabold uppercase text-yellow-normal">
                            ☼ Pawukon
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {meta.pawukon.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-white/25 px-3 py-1 text-[10px] font-bold text-white"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onToday}
                    className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white backdrop-blur transition hover:bg-white/30 md:hidden"
                >
                    Today
                </button>

                <button
                    type="button"
                    onClick={onExportPdf}
                    disabled={isExporting}
                    className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-white/20 text-sm font-bold text-white backdrop-blur transition hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-60 md:hidden"
                >
                    <FiDownload size={15} />
                    {isExporting ? 'Exporting...' : 'Export PDF'}
                </button>
            </div>
        </section>
    );
};

export default CalendarHero;