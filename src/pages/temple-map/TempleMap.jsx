import { useMemo, useState } from 'react';
import TempleLeafletMap from '../../components/temple-map/TempleLeafletMap';
import TempleSidePanel from '../../components/temple-map/TempleSidePanel';
import { temples } from '../../data/templeMapData';

const TempleMap = () => {
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');

  const filteredTemples = useMemo(() => {
    let result = [...temples];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      result = result.filter((temple) => {
        return (
          temple.name.toLowerCase().includes(query) ||
          temple.area.toLowerCase().includes(query)
        );
      });
    }

    if (statusFilter !== 'all') {
      result = result.filter((temple) => temple.status === statusFilter);
    }

    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === 'visitors') {
      result.sort((a, b) => b.visitors - a.visitors);
    }

    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, statusFilter, sortBy]);

  return (
    <div className="min-h-screen bg-white font-poppins">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] xl:grid-cols-[minmax(0,1fr)_520px]">
        <TempleLeafletMap
          temples={filteredTemples}
          selectedTemple={selectedTemple}
          onSelectTemple={setSelectedTemple}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <TempleSidePanel selectedTemple={selectedTemple} />
      </div>
    </div>
  );
};

export default TempleMap;