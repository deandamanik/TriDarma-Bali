const config = {
  // Pura status
  open: {
    label: 'Buka untuk Umum',
    classes: 'bg-emerald-50 text-emerald-700',
    dot: 'bg-emerald-500',
  },
  ceremony: {
    label: 'Sedang Upacara',
    classes: 'bg-orange-light text-orange-dark-active',
    dot: 'bg-orange-normal',
  },
  closed: {
    label: 'Tutup Sementara',
    classes: 'bg-rose-50 text-rose-700',
    dot: 'bg-rose-500',
  },
  // UMKM status
  active: {
    label: 'Aktif',
    classes: 'bg-emerald-50 text-emerald-700',
    dot: 'bg-emerald-500',
  },
  pending: {
    label: 'Menunggu Verifikasi',
    classes: 'bg-yellow-light-active text-yellow-darker',
    dot: 'bg-yellow-dark',
  },
  inactive: {
    label: 'Tidak Aktif',
    classes: 'bg-brown-light text-brown-dark/60',
    dot: 'bg-brown-dark/40',
  },
};

const StatusBadge = ({ status, size = 'md' }) => {
  const c = config[status];
  if (!c) return null;

  const sizeClass =
    size === 'sm'
      ? 'px-2 py-0.5 text-[10.5px] gap-1'
      : 'px-2.5 py-1 text-[11.5px] gap-1.5';

  const dotSize = size === 'sm' ? 'h-1.5 w-1.5' : 'h-1.5 w-1.5';

  return (
    <span
      className={`inline-flex items-center rounded-full font-bold ${sizeClass} ${c.classes}`}
    >
      <span className={`${dotSize} rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
};

export default StatusBadge;