import { FiBell, FiMenu, FiChevronDown } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

const formatToday = () => {
  return new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const yearOptions = [2026, 2025, 2024];

const GovTopbar = ({ title, subtitle, onOpenMobileSidebar, hasNotifications = true }) => {
  const today = formatToday();
  const [selectedYear, setSelectedYear] = useState(2026);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const yearMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (yearMenuRef.current && !yearMenuRef.current.contains(e.target)) {
        setIsYearOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-brown-dark/5 bg-orange-light/95 px-4 backdrop-blur-md sm:px-6 lg:h-20 lg:px-8">
      {/* Mobile menu */}
      <button
        type="button"
        onClick={onOpenMobileSidebar}
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-brown-dark/70 hover:bg-orange-light-active lg:hidden cursor-pointer"
        aria-label="Buka menu"
      >
        <FiMenu size={20} />
      </button>

      {/* Title + subtitle */}
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-lg font-bold leading-tight text-brown-normal sm:text-xl lg:text-[22px]">
          {title}
        </h1>
        <p className="mt-0.5 truncate text-[11px] font-medium text-brown-dark/55 sm:text-[12.5px]">
          {subtitle || `${today} · Data diperbarui 5 menit lalu`}
        </p>
      </div>

      {/* Right actions */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        {/* Year selector */}
        <div className="relative" ref={yearMenuRef}>
          <button
            type="button"
            onClick={() => setIsYearOpen((v) => !v)}
            className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-brown-dark/10 bg-white px-3.5 text-sm font-semibold text-brown-normal transition hover:border-brown-normal/30 hover:bg-orange-light cursor-pointer"
          >
            <span>{selectedYear}</span>
            <FiChevronDown
              size={14}
              className={`transition-transform ${isYearOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isYearOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-32 overflow-hidden rounded-xl border border-brown-dark/10 bg-white shadow-lg">
              {yearOptions.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => {
                    setSelectedYear(year);
                    setIsYearOpen(false);
                  }}
                  className={`flex w-full items-center px-4 py-2.5 text-left text-sm font-semibold transition cursor-pointer ${
                    year === selectedYear
                      ? 'bg-orange-light text-brown-normal'
                      : 'text-brown-dark/65 hover:bg-orange-light/60 hover:text-brown-normal'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notification bell */}
        <button
          type="button"
          className="relative grid h-10 w-10 place-items-center rounded-xl border border-brown-dark/10 bg-white text-brown-dark/70 transition hover:border-brown-normal/30 hover:bg-orange-light hover:text-brown-normal cursor-pointer"
          aria-label="Notifikasi"
        >
          <FiBell size={17} />
          {hasNotifications && (
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          )}
        </button>
      </div>
    </header>
  );
};

export default GovTopbar;