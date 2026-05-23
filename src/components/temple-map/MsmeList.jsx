import {useMemo, useState } from 'react';
import MsmeCard from './MsmeCard';
import { msmes } from '../../data/templeMapData';

const MsmeList = ({ selectedTempleId }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('nearest');

  const templeMsmes = useMemo(() => {
    const currentTempleId = Number(selectedTempleId);

    return msmes.filter((item) => Number(item.templeId) === currentTempleId);
  }, [selectedTempleId]);

  const availableCategories = useMemo(() => {
    const categories = templeMsmes.map((item) => item.category);
    const uniqueCategories = [...new Set(categories)];

    return ['All', ...uniqueCategories];
  }, [templeMsmes]);

  const activeCategoryName = availableCategories.includes(activeCategory)
    ? activeCategory
    : 'All';

  const filteredMsmes = useMemo(() => {
    let result = [...templeMsmes];

    if (activeCategoryName !== 'All') {
      result = result.filter((item) => item.category === activeCategoryName);
    }

    if (sortBy === 'nearest') {
      result.sort(
        (a, b) => Number(a.distanceInMeter) - Number(b.distanceInMeter)
      );
    }

    if (sortBy === 'rating') {
      result.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    if (sortBy === 'price') {
      result.sort((a, b) => Number(a.priceValue) - Number(b.priceValue));
    }

    return result;
  }, [templeMsmes, activeCategory, sortBy]);

  return (
    <section className="bg-brown-normal px-5 py-6 text-orange-light sm:px-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold leading-tight">
            Nearest Local MSMEs
          </h2>

          <p className="mt-1 text-xs font-medium text-orange-light/70">
            Around selected temple
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-orange-light px-3 py-1 text-[11px] font-extrabold text-orange-dark">
          {filteredMsmes.length} businesses
        </span>
      </div>

      <div className="-mx-1 mb-4 overflow-x-auto px-1 pb-2">
        <div className="flex w-max min-w-full gap-2">
          {availableCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`h-8 shrink-0 rounded-full px-4 text-[11px] font-extrabold transition ${activeCategory === category
                  ? 'bg-orange-normal text-white'
                  : 'bg-white text-orange-dark hover:bg-orange-light-active'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="h-9 w-full rounded-xl border border-yellow-normal bg-white px-3 text-xs font-bold text-brown-normal outline-none"
        >
          <option value="nearest">Nearest Distance</option>
          <option value="rating">Highest Rating</option>
          <option value="price">Lowest Price</option>
        </select>
      </div>

      {filteredMsmes.length > 0 ? (
        <div className="space-y-4">
          {filteredMsmes.map((msme) => (
            <MsmeCard key={msme.id} msme={msme} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-yellow-normal bg-yellow-light p-5 text-center">
          <h3 className="text-sm font-extrabold text-brown-normal">
            No MSMEs available
          </h3>

          <p className="mt-2 text-xs font-medium text-brown-dark/60">
            Try another category or select a different temple.
          </p>
        </div>
      )}

      <p className="mt-6 text-center text-[10px] font-medium text-orange-light/45">
        All MSMEs are registered and verified by Badung Tourism Office
      </p>
    </section>
  );
};

export default MsmeList;