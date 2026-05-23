import { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { CATEGORIES, SORT_OPTIONS } from '../../data/articles';

const CategoryFilter = ({
    activeCategory,
    onCategoryChange,
    sortBy,
    onSortChange,
    articleCount,
}) => {
    const [sortOpen, setSortOpen] = useState(false);
    const sortRef = useRef(null);

    // Tutup dropdown ketika klik di luar
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sortRef.current && !sortRef.current.contains(e.target)) {
                setSortOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Pills kategori (scroll horizontal di mobile) */}
            <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap pb-1">
                {CATEGORIES.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`h-9 px-4 rounded-full text-sm font-semibold whitespace-nowrap border transition-all duration-200 cursor-pointer ${isActive
                                ? 'bg-brown-normal text-orange-light border-brown-normal'
                                : 'bg-transparent text-brown-normal border-brown-normal/30 hover:border-brown-normal hover:bg-orange-light-active/60'
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

            {/* Counter + Sort */}
            <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0">
                <span className="text-sm text-brown-normal/60 font-medium whitespace-nowrap">
                    {articleCount} article{articleCount !== 1 ? 's' : ''}
                </span>

                <div className="relative" ref={sortRef}>
                    <button
                        onClick={() => setSortOpen((v) => !v)}
                        className="h-10 pl-4 pr-3 rounded-full bg-white border border-brown-normal/20 text-sm font-semibold text-brown-normal flex items-center gap-2 hover:border-brown-normal/40 transition cursor-pointer shadow-xs"
                    >
                        <span>Sort</span>
                        <FiChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {sortOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-brown-normal/15 shadow-lg p-1.5 z-30">
                            {SORT_OPTIONS.map((opt) => (
                                <button
                                    key={opt.value}
                                    onClick={() => {
                                        onSortChange(opt.value);
                                        setSortOpen(false);
                                    }}
                                    className={`w-full text-left px-3.5 py-2 rounded-xl text-sm font-medium transition cursor-pointer ${sortBy === opt.value
                                        ? 'bg-orange-normal/20 text-brown-normal'
                                        : 'text-brown-normal/80 hover:bg-orange-light-active/60'
                                        }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;