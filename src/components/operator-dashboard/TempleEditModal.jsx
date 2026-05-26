import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheck, FiClock, FiAlertCircle } from 'react-icons/fi';

const statusOptions = [
    { id: 'open', label: 'Open to Public', desc: 'Visitors can enter as usual', accent: 'border-emerald-300 bg-emerald-50' },
    { id: 'ceremony', label: 'Ceremony in Progress', desc: 'Visitors restricted to certain areas', accent: 'border-orange-normal bg-orange-light' },
    { id: 'closed', label: 'Temporarily Closed', desc: 'Temple is not accepting visitors', accent: 'border-rose-300 bg-rose-50' },
];

const TempleEditModal = ({ temple, isOpen, onClose, onSave }) => {
    const [form, setForm] = useState({
        status: 'open',
        openingTime: '06:00',
        closingTime: '18:00',
        ceremonyActive: false,
        ceremonyEndDate: '',
        notes: '',
    });

    // Reset form ketika temple berubah
    useEffect(() => {
        if (temple) {
            const newForm = {
                status: temple.status,
                openingTime: temple.openingHours.open,
                closingTime: temple.openingHours.close,
                ceremonyActive: temple.ceremonyActive,
                ceremonyEndDate: temple.ceremonyEndDate || '',
                notes: temple.notes,
            };
            setForm(newForm);
        }
    }, [temple]);

    // Sync: kalau toggle upacara on, auto set status ke ceremony
    const handleCeremonyToggle = (checked) => {
        setForm((prev) => ({
            ...prev,
            ceremonyActive: checked,
            status: checked ? 'ceremony' : prev.status === 'ceremony' ? 'open' : prev.status,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...temple,
            status: form.status,
            openingHours: { open: form.openingTime, close: form.closingTime },
            ceremonyActive: form.ceremonyActive,
            ceremonyEndDate: form.ceremonyActive ? form.ceremonyEndDate : null,
            notes: form.notes,
        });
        onClose();
    };

    if (!temple) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brown-dark/50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3 border-b border-brown-dark/5 px-5 py-4 sm:px-6">
                            <div className="min-w-0">
                                <p className="text-[11px] font-semibold text-brown-dark/55">
                                    Update status
                                </p>
                                <h2 className="mt-0.5 truncate text-lg font-bold text-brown-normal">
                                    {temple.name}
                                </h2>
                                <p className="text-[12px] font-medium text-brown-dark/55">
                                    {temple.location}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-brown-dark/65 hover:bg-orange-light cursor-pointer"
                                aria-label="Close"
                            >
                                <FiX size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <form
                            onSubmit={handleSubmit}
                            className="max-h-[calc(90vh-140px)] overflow-y-auto"
                        >
                            <div className="space-y-5 px-5 py-5 sm:px-6">
                                {/* Operating Hours */}
                                <div>
                                    <label className="mb-2 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-brown-normal">
                                        <FiClock size={13} />
                                        Operating Hours
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="text-[10.5px] font-semibold text-brown-dark/55">
                                                Open
                                            </label>
                                            <input
                                                type="time"
                                                value={form.openingTime}
                                                onChange={(e) =>
                                                    setForm({ ...form, openingTime: e.target.value })
                                                }
                                                className="mt-1 h-11 w-full rounded-xl border border-brown-dark/10 bg-orange-light/30 px-3 text-[13px] font-semibold text-brown-normal focus:border-brown-normal/30 focus:bg-white focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10.5px] font-semibold text-brown-dark/55">
                                                Close
                                            </label>
                                            <input
                                                type="time"
                                                value={form.closingTime}
                                                onChange={(e) =>
                                                    setForm({ ...form, closingTime: e.target.value })
                                                }
                                                className="mt-1 h-11 w-full rounded-xl border border-brown-dark/10 bg-orange-light/30 px-3 text-[13px] font-semibold text-brown-normal focus:border-brown-normal/30 focus:bg-white focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Temple Status */}
                                <div>
                                    <label className="mb-2 block text-[12.5px] font-bold text-brown-normal">
                                        Temple Status
                                    </label>
                                    <div className="space-y-2">
                                        {statusOptions.map((opt) => {
                                            const isActive = form.status === opt.id;
                                            return (
                                                <button
                                                    type="button"
                                                    key={opt.id}
                                                    onClick={() => setForm({ ...form, status: opt.id })}
                                                    className={`flex w-full items-start gap-3 rounded-xl border-2 p-3 text-left transition cursor-pointer ${isActive
                                                        ? opt.accent
                                                        : 'border-brown-dark/5 bg-white hover:border-brown-dark/15'
                                                        }`}
                                                >
                                                    <div
                                                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition ${isActive
                                                            ? 'border-brown-normal bg-brown-normal'
                                                            : 'border-brown-dark/20 bg-white'
                                                            }`}
                                                    >
                                                        {isActive && (
                                                            <FiCheck size={12} className="text-orange-light" />
                                                        )}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-[13px] font-bold text-brown-normal">
                                                            {opt.label}
                                                        </p>
                                                        <p className="mt-0.5 text-[11.5px] font-medium text-brown-dark/55">
                                                            {opt.desc}
                                                        </p>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Ceremony toggle */}
                                <div className="rounded-xl border border-brown-dark/5 bg-yellow-light/40 p-4">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-start gap-2.5">
                                            <FiAlertCircle
                                                size={16}
                                                className="mt-0.5 shrink-0 text-orange-normal-active"
                                            />
                                            <div>
                                                <p className="text-[13px] font-bold text-brown-normal">
                                                    There is a ceremony
                                                </p>
                                                <p className="mt-0.5 text-[11.5px] font-medium text-brown-dark/55">
                                                    Enable to notify visitors
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => handleCeremonyToggle(!form.ceremonyActive)}
                                            className={`relative h-6 w-11 shrink-0 rounded-full transition cursor-pointer ${form.ceremonyActive ? 'bg-brown-normal' : 'bg-brown-dark/15'
                                                }`}
                                            aria-pressed={form.ceremonyActive}
                                        >
                                            <span
                                                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${form.ceremonyActive ? 'left-[22px]' : 'left-0.5'
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {form.ceremonyActive && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            transition={{ duration: 0.2 }}
                                            className="mt-3 overflow-hidden"
                                        >
                                            <label className="text-[10.5px] font-semibold text-brown-dark/55">
                                                Lasting until
                                            </label>
                                            <input
                                                type="text"
                                                value={form.ceremonyEndDate}
                                                onChange={(e) =>
                                                    setForm({ ...form, ceremonyEndDate: e.target.value })
                                                }
                                                placeholder="Example: May 28 2026"
                                                className="mt-1 h-10 w-full rounded-xl border border-brown-dark/10 bg-white px-3 text-[12.5px] font-medium text-brown-normal placeholder:text-brown-dark/35 focus:border-brown-normal/30 focus:outline-none"
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                {/* Notes */}
                                <div>
                                    <label className="mb-1.5 block text-[12.5px] font-bold text-brown-normal">
                                        Notes for Visitors
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={form.notes}
                                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                                        placeholder="Write important information for visitors..."
                                        className="w-full resize-none rounded-xl border border-brown-dark/10 bg-orange-light/30 px-3 py-2.5 text-[12.5px] font-medium leading-relaxed text-brown-normal placeholder:text-brown-dark/35 focus:border-brown-normal/30 focus:bg-white focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="sticky bottom-0 flex items-center justify-end gap-2 border-t border-brown-dark/5 bg-white px-5 py-3 sm:px-6">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="h-10 rounded-xl border border-brown-dark/10 bg-white px-4 text-[13px] font-semibold text-brown-dark/65 transition hover:bg-orange-light hover:text-brown-normal cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="h-10 rounded-xl bg-brown-normal px-5 text-[13px] font-bold text-orange-light transition hover:bg-brown-dark cursor-pointer"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default TempleEditModal;