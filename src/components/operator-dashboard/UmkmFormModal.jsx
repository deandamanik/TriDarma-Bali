import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShoppingBag } from 'react-icons/fi';
import { umkmTypes } from '../../data/operatorDashboardData';

const emptyForm = {
    name: '',
    type: 'warung',
    owner: '',
    phone: '',
    address: '',
    description: '',
};

const UmkmFormModal = ({ isOpen, onClose, onSave, initialUmkm = null }) => {
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState({});

    const isEditing = !!initialUmkm;

    useEffect(() => {
        setErrors({});
    }, [isOpen]);

    useEffect(() => {
        if (initialUmkm) {
            setForm({
                name: initialUmkm.name,
                type: initialUmkm.type,
                owner: initialUmkm.owner,
                phone: initialUmkm.phone,
                address: initialUmkm.address,
                description: initialUmkm.description,
            });
        } else {
            setForm(emptyForm);
        }
    }, [initialUmkm]);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'UMKM name is required';
        if (!form.owner.trim()) e.owner = 'Owner name is required';
        if (!form.phone.trim()) e.phone = 'Phone number is required';
        if (!form.address.trim()) e.address = 'Address is required';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        onSave({
            ...(initialUmkm || {}),
            ...form,
            id: initialUmkm?.id || Date.now(),
            status: initialUmkm?.status || 'pending',
            registeredDate: initialUmkm?.registeredDate || new Date().toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
        });
        onClose();
    };

    const inputClass = (fieldErr) =>
        `h-11 w-full rounded-xl border bg-orange-light/30 px-3.5 text-[13px] font-medium text-brown-normal placeholder:text-brown-dark/35 focus:bg-white focus:outline-none transition ${fieldErr
            ? 'border-rose-300 focus:border-rose-400'
            : 'border-brown-dark/10 focus:border-brown-normal/30'
        }`;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brown-dark/50 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3 border-b border-brown-dark/5 px-5 py-4 sm:px-6">
                            <div className="flex items-center gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-xl bg-orange-light text-brown-normal">
                                    <FiShoppingBag size={17} />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-brown-normal">
                                        {isEditing ? 'Update UMKM' : 'Register New UMKM'}
                                    </h2>
                                    <p className="mt-0.5 text-[11.5px] font-medium text-brown-dark/55">
                                        {isEditing
                                            ? 'Edit UMKM information that has been registered'
                                            : 'Complete data for verification by super admin'}
                                    </p>
                                </div>
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
                        <form onSubmit={handleSubmit} className="max-h-[calc(90vh-140px)] overflow-y-auto">
                            <div className="space-y-4 px-5 py-5 sm:px-6">
                                {/* UMKM Name */}
                                <div>
                                    <label className="mb-1.5 block text-[12.5px] font-bold text-brown-normal">
                                        UMKM Name <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        placeholder="Example: Ibu Made's Warung"
                                        className={inputClass(errors.name)}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-[11px] font-medium text-rose-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Business Type */}
                                <div>
                                    <label className="mb-1.5 block text-[12.5px] font-bold text-brown-normal">
                                        Business Type
                                    </label>
                                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                        {umkmTypes.map((t) => {
                                            const isActive = form.type === t.id;
                                            return (
                                                <button
                                                    type="button"
                                                    key={t.id}
                                                    onClick={() => setForm({ ...form, type: t.id })}
                                                    className={`rounded-xl border-2 px-3 py-2.5 text-[12px] font-semibold transition cursor-pointer ${isActive
                                                        ? 'border-brown-normal bg-orange-light text-brown-normal'
                                                        : 'border-brown-dark/5 bg-white text-brown-dark/65 hover:border-brown-dark/15'
                                                        }`}
                                                >
                                                    {t.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Owner + Phone */}
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-1.5 block text-[12.5px] font-bold text-brown-normal">
                                            Owner Name <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={form.owner}
                                            onChange={(e) => setForm({ ...form, owner: e.target.value })}
                                            placeholder="Example: I Ketut Adi"
                                            className={inputClass(errors.owner)}
                                        />
                                        {errors.owner && (
                                            <p className="mt-1 text-[11px] font-medium text-rose-600">
                                                {errors.owner}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="mb-1.5 block text-[12.5px] font-bold text-brown-normal">
                                            Phone Number <span className="text-rose-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            placeholder="+62 812-xxxx-xxxx"
                                            className={inputClass(errors.phone)}
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-[11px] font-medium text-rose-600">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="mb-1.5 block text-[12.5px] font-bold text-brown-normal">
                                        Full Address <span className="text-rose-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={form.address}
                                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                                        placeholder="Street, area, or nearest landmark"
                                        className={inputClass(errors.address)}
                                    />
                                    {errors.address && (
                                        <p className="mt-1 text-[11px] font-medium text-rose-600">
                                            {errors.address}
                                        </p>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="mb-1.5 block text-[12.5px] font-bold text-brown-normal">
                                        Brief Description
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={form.description}
                                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                                        placeholder="Tell us about the products or services you offer..."
                                        className="w-full resize-none rounded-xl border border-brown-dark/10 bg-orange-light/30 px-3.5 py-2.5 text-[13px] font-medium leading-relaxed text-brown-normal placeholder:text-brown-dark/35 focus:border-brown-normal/30 focus:bg-white focus:outline-none transition"
                                    />
                                </div>

                                {/* Info note */}
                                {!isEditing && (
                                    <div className="rounded-xl border border-yellow-normal/40 bg-yellow-light/60 p-3">
                                        <p className="text-[11.5px] font-medium leading-relaxed text-brown-dark/70">
                                            Newly registered UMKMs will be marked as{' '}
                                            <span className="font-bold">Pending Verification</span> and
                                            will be activated after approval by the super admin.
                                        </p>
                                    </div>
                                )}
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
                                    {isEditing ? 'Save Changes' : 'Register UMKM'}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default UmkmFormModal;