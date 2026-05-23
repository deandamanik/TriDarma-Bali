import { FiFilter, FiSearch } from 'react-icons/fi';

const MapSearchBar = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="absolute left-4 right-4 top-5 z-[500] flex flex-col gap-3 sm:left-6 sm:right-6">
      <div className="flex flex-col gap-3 xl:flex-row">
        <div className="flex h-12 flex-1 items-center gap-3 rounded-2xl border border-yellow-normal/70 bg-white px-4 text-brown-dark shadow-lg shadow-brown-dark/10 md:h-14 md:px-5">
          <FiSearch className="shrink-0 text-brown-dark/40" size={18} />

          <input
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Cari pura di Bali..."
            className="h-full w-full bg-transparent text-sm font-medium text-brown-dark outline-none placeholder:text-brown-dark/35"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:flex">
          <label className="flex h-12 items-center gap-2 rounded-2xl border border-yellow-normal/70 bg-white px-4 text-sm font-bold text-brown-normal shadow-lg shadow-brown-dark/10 md:h-14">
            <FiFilter size={17} />

            <select
              value={statusFilter}
              onChange={(event) => onStatusFilterChange(event.target.value)}
              className="bg-transparent text-xs font-bold outline-none sm:text-sm"
            >
              <option value="all">All Status</option>
              <option value="ceremony">Ceremony</option>
              <option value="crowded">Very Crowded</option>
              <option value="normal">Normal / Open</option>
            </select>
          </label>

          <label className="flex h-12 items-center rounded-2xl border border-yellow-normal/70 bg-white px-4 text-sm font-bold text-brown-normal shadow-lg shadow-brown-dark/10 md:h-14">
            <select
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              className="bg-transparent text-xs font-bold outline-none sm:text-sm"
            >
              <option value="recommended">Recommended</option>
              <option value="rating">Highest Rating</option>
              <option value="visitors">Most Visitors</option>
              <option value="name">Name A-Z</option>
            </select>
          </label>
        </div>
      </div>

      <div className="inline-flex w-max items-center gap-2 rounded-full border border-yellow-normal/70 bg-white px-3 py-1.5 text-[11px] font-semibold text-brown-dark shadow-md shadow-brown-dark/10">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Live · Diperbarui 2 menit lalu
      </div>
    </div>
  );
};

export default MapSearchBar;