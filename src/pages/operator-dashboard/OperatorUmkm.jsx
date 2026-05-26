import { useState, useMemo } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import UmkmCard from '../../components/operator-dashboard/UmkmCard';
import UmkmFormModal from '../../components/operator-dashboard/UmkmFormModal';
import { operatorUmkm } from '../../data/operatorDashboardData';

const filterChips = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'pending', label: 'Pending' },
    { id: 'inactive', label: 'Inactive' },
];

const OperatorUmkm = () => {
    const [umkmList, setUmkmList] = useState(operatorUmkm);
    const [filter, setFilter] = useState('all');
    const [query, setQuery] = useState('');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingUmkm, setEditingUmkm] = useState(null);
    const [toast, setToast] = useState(null);

    const filtered = useMemo(() => {
        return umkmList.filter((u) => {
            const matchStatus = filter === 'all' || u.status === filter;
            const q = query.toLowerCase().trim();
            const matchQuery =
                !q ||
                u.name.toLowerCase().includes(q) ||
                u.owner.toLowerCase().includes(q) ||
                u.address.toLowerCase().includes(q);
            return matchStatus && matchQuery;
        });
    }, [umkmList, filter, query]);

    const handleSave = (umkm) => {
        const exists = umkmList.find((u) => u.id === umkm.id);
        if (exists) {
            setUmkmList((prev) => prev.map((u) => (u.id === umkm.id ? umkm : u)));
            setToast({ message: `${umkm.name} updated successfully` });
        } else {
            setUmkmList((prev) => [umkm, ...prev]);
            setToast({ message: `${umkm.name} registered successfully` });
        }
        setTimeout(() => setToast(null), 3000);
        setEditingUmkm(null);
    };

    const handleEdit = (umkm) => {
        setEditingUmkm(umkm);
        setIsFormOpen(true);
    };

    const handleDelete = (umkm) => {
        if (window.confirm(`Delete ${umkm.name} from UMKM list?`)) {
            setUmkmList((prev) => prev.filter((u) => u.id !== umkm.id));
            setToast({ message: `${umkm.name} deleted successfully` });
            setTimeout(() => setToast(null), 3000);
        }
    };

    const handleOpenAdd = () => {
        setEditingUmkm(null);
        setIsFormOpen(true);
    };

    return (
        <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
            {/* Action bar */}
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-1.5">
                    {filterChips.map((chip) => {
                        const count =
                            chip.id === 'all'
                                ? umkmList.length
                                : umkmList.filter((u) => u.status === chip.id).length;
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

                <div className="flex items-center gap-2">
                    <div className="relative flex-1 sm:flex-none">
                        <FiSearch
                            size={14}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-dark/40"
                        />
                        <input
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search UMKM..."
                            className="h-10 w-full rounded-xl border border-brown-dark/10 bg-white pl-8 pr-3 text-[12.5px] font-medium text-brown-normal placeholder:text-brown-dark/35 focus:border-brown-normal/30 focus:outline-none sm:w-56"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleOpenAdd}
                        className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-brown-normal px-4 text-[12.5px] font-bold text-orange-light transition hover:bg-brown-dark cursor-pointer"
                    >
                        <FiPlus size={14} />
                        <span className="hidden sm:inline">Register UMKM</span>
                        <span className="sm:hidden">Add</span>
                    </button>
                </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-brown-dark/10 bg-white py-16 text-center">
                    <p className="text-[13px] font-semibold text-brown-dark/55">
                        No UMKM matching the filter.
                    </p>
                    <button
                        type="button"
                        onClick={handleOpenAdd}
                        className="mt-3 inline-flex h-9 items-center gap-1.5 rounded-xl bg-orange-light px-3.5 text-[12px] font-bold text-brown-normal transition hover:bg-orange-normal hover:text-white cursor-pointer"
                    >
                        <FiPlus size={13} />
                        Register new UMKM
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((umkm, idx) => (
                        <UmkmCard
                            key={umkm.id}
                            umkm={umkm}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            index={idx}
                        />
                    ))}
                </div>
            )}

            {/* Form modal */}
            <UmkmFormModal
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false);
                    setEditingUmkm(null);
                }}
                onSave={handleSave}
                initialUmkm={editingUmkm}
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

export default OperatorUmkm;