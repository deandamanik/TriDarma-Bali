import { useState, useMemo } from 'react';
import { FiSearch } from 'react-icons/fi';
import TempleCard from '../../components/operator-dashboard/TempleCard';
import TempleEditModal from '../../components/operator-dashboard/TempleEditModal';
import { operatorTemples } from '../../data/operatorDashboardData';

const filterChips = [
    { id: 'all', label: 'All' },
    { id: 'open', label: 'Open' },
    { id: 'ceremony', label: 'Ceremony' },
    { id: 'closed', label: 'Closed' },
];

const OperatorTemples = () => {
    const [temples, setTemples] = useState(operatorTemples);
    const [filter, setFilter] = useState('all');
    const [query, setQuery] = useState('');
    const [editingTemple, setEditingTemple] = useState(null);
    const [toast, setToast] = useState(null);

    const filtered = useMemo(() => {
        return temples.filter((t) => {
            const matchStatus = filter === 'all' || t.status === filter;
            const q = query.toLowerCase().trim();
            const matchQuery =
                !q ||
                t.name.toLowerCase().includes(q) ||
                t.location.toLowerCase().includes(q);
            return matchStatus && matchQuery;
        });
    }, [temples, filter, query]);

    const handleSave = (updated) => {
        setTemples((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
        setToast({ message: `Status ${updated.name} berhasil diperbarui`, type: 'success' });
        setTimeout(() => setToast(null), 3000);
    };

    return (
        <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
            {/* Filter + search bar */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-1.5">
                    {filterChips.map((chip) => {
                        const count =
                            chip.id === 'all'
                                ? temples.length
                                : temples.filter((t) => t.status === chip.id).length;
                        const isActive = filter === chip.id;

                        return (
                            <button
                                key={chip.id}
                                type="button"
                                onClick={() => setFilter(chip.id)}
                                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition cursor-pointer ${isActive
                                        ? 'bg-brown-normal text-orange-light'
                                        : 'bg-white text-brown-dark/65 hover:bg-orange-light'
                                    }`}
                            >
                                <span>{chip.label}</span>
                                <span
                                    className={`rounded-full px-1.5 text-[10px] font-bold ${isActive
                                            ? 'bg-white/20 text-orange-light'
                                            : 'bg-orange-light text-brown-dark/55'
                                        }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div className="relative">
                    <FiSearch
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-dark/40"
                    />
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search temple or location..."
                        className="h-10 w-full rounded-xl border border-brown-dark/10 bg-white pl-8 pr-3 text-[12.5px] font-medium text-brown-normal placeholder:text-brown-dark/35 focus:border-brown-normal/30 focus:outline-none sm:w-64"
                    />
                </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-brown-dark/10 bg-white py-16 text-center">
                    <p className="text-[13px] font-semibold text-brown-dark/55">
                        No temples match the filter.
                    </p>
                    <button
                        type="button"
                        onClick={() => {
                            setFilter('all');
                            setQuery('');
                        }}
                        className="mt-2 text-[12px] font-bold text-brown-normal hover:underline cursor-pointer"
                    >
                        Reset filter
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((temple, idx) => (
                        <TempleCard
                            key={temple.id}
                            temple={temple}
                            onEdit={setEditingTemple}
                            index={idx}
                        />
                    ))}
                </div>
            )}

            {/* Edit modal */}
            <TempleEditModal
                temple={editingTemple}
                isOpen={!!editingTemple}
                onClose={() => setEditingTemple(null)}
                onSave={handleSave}
            />

            {/* Toast */}
            {toast && (
                <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-brown-normal px-4 py-3 shadow-xl">
                    <p className="text-[12.5px] font-semibold text-orange-light">
                        ✓ {toast.message}
                    </p>
                </div>
            )}
        </div>
    );
};

export default OperatorTemples;