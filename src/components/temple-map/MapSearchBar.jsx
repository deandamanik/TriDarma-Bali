import { useState, useEffect, useRef } from 'react';
import { FiFilter, FiSearch, FiChevronDown } from 'react-icons/fi';

const MapSearchBar = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  sortBy,
  onSortChange,
}) => {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const statusRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusRef.current && !statusRef.current.contains(event.target)) {
        setIsStatusOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const statusLabels = {
    all: 'All Status',
    ceremony: 'Ceremony',
    crowded: 'Very Crowded',
    normal: 'Normal / Open',
  };

  const sortLabels = {
    recommended: 'Recommended',
    rating: 'Highest Rating',
    visitors: 'Most Visitors',
    name: 'Name A-Z',
  };

  return (
    <div className="absolute left-4 right-4 top-6 z-500 flex flex-col gap-3 lg:left-6 lg:right-auto lg:top-5 lg:w-max font-poppins select-none">
      <div className="flex flex-col gap-3 xl:flex-row w-full">

        <div className="flex h-12 w-full xl:w-80 items-center gap-3 rounded-2xl border border-yellow-normal/70 bg-white px-4 text-brown-dark shadow-lg shadow-brown-dark/10 md:h-14 md:px-5">
          <FiSearch className="shrink-0 text-brown-dark/40" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Cari pura di Bali..."
            className="h-full w-full bg-transparent text-sm font-medium text-brown-dark outline-none placeholder:text-brown-dark/35"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 w-full lg:flex lg:w-auto">
          
          <div ref={statusRef} className="relative w-full lg:w-44">
            <button
              type="button"
              onClick={() => {
                setIsStatusOpen(!isStatusOpen);
                setIsSortOpen(false);
              }}
              className="flex h-12 w-full items-center justify-between gap-2 rounded-2xl border border-yellow-normal/70 bg-white px-3 text-left text-xs font-bold text-brown-normal shadow-lg shadow-brown-dark/10 md:h-14 md:px-4 transition-colors hover:bg-yellow-light/20"
            >
              <div className="flex items-center gap-1.5 truncate">
                <FiFilter size={16} className="shrink-0 text-brown-normal/80" />
                <span className="truncate">{statusLabels[statusFilter]}</span>
              </div>
              <FiChevronDown
                size={16}
                className={`shrink-0 text-brown-normal/60 transition-transform duration-200 ${isStatusOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isStatusOpen && (
              <div className="absolute left-0 mt-2 z-600 w-full rounded-xl border border-yellow-normal/60 bg-white p-1.5 shadow-xl shadow-brown-dark/15">
                {Object.keys(statusLabels).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      onStatusFilterChange(key);
                      setIsStatusOpen(false);
                    }}
                    className={`w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition-colors ${
                      statusFilter === key
                        ? 'bg-brown-normal text-white'
                        : 'text-brown-dark hover:bg-yellow-light/40 hover:text-brown-normal'
                    }`}
                  >
                    {statusLabels[key]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div ref={sortRef} className="relative w-full lg:w-44">
            <button
              type="button"
              onClick={() => {
                setIsSortOpen(!isSortOpen);
                setIsStatusOpen(false);
              }}
              className="flex h-12 w-full items-center justify-between gap-2 rounded-2xl border border-yellow-normal/70 bg-white px-4 text-left text-xs font-bold text-brown-normal shadow-lg shadow-brown-dark/10 md:h-14 transition-colors hover:bg-yellow-light/20"
            >
              <span className="truncate">{sortLabels[sortBy]}</span>
              <FiChevronDown
                size={16}
                className={`shrink-0 text-brown-normal/60 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isSortOpen && (
              <div className="absolute left-0 mt-2 z-600 w-full rounded-xl border border-yellow-normal/60 bg-white p-1.5 shadow-xl shadow-brown-dark/15">
                {Object.keys(sortLabels).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      onSortChange(key);
                      setIsSortOpen(false);
                    }}
                    className={`w-full rounded-lg px-3 py-2 text-left text-xs font-semibold transition-colors ${
                      sortBy === key
                        ? 'bg-brown-normal text-white'
                        : 'text-brown-dark hover:bg-yellow-light/40 hover:text-brown-normal'
                    }`}
                  >
                    {sortLabels[key]}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      <div className="inline-flex w-max items-center gap-2 rounded-full border border-yellow-normal/70 bg-white px-3 py-1.5 text-[11px] font-semibold text-brown-dark shadow-md shadow-brown-dark/10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Live · Diperbarui 2 menit lalu
      </div>
    </div>
  );
};

export default MapSearchBar;