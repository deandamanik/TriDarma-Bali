import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiDownload, FiEye } from 'react-icons/fi';
import { exportToCsv } from '../../utils/exportCsv';

const severityDot = {
  critical: 'bg-rose-500',
  high: 'bg-orange-normal',
  medium: 'bg-yellow-normal',
  low: 'bg-sky-400',
};

const statusBadge = {
  pending: 'bg-rose-50 text-rose-700',
  investigating: 'bg-sky-50 text-sky-700',
  resolved: 'bg-emerald-50 text-emerald-700',
};

const statusLabel = {
  pending: 'Menunggu',
  investigating: 'Diproses',
  resolved: 'Selesai',
};

const ReportsTable = ({ reports }) => {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return reports.filter((r) => {
      const matchStatus = filter === 'all' || r.status === filter;
      const q = query.toLowerCase().trim();
      const matchQuery =
        !q ||
        r.temple.toLowerCase().includes(q) ||
        r.region.toLowerCase().includes(q) ||
        r.title.toLowerCase().includes(q) ||
        r.id.toLowerCase().includes(q);
      return matchStatus && matchQuery;
    });
  }, [reports, filter, query]);

  const chips = [
    { id: 'all', label: 'Semua', count: reports.length },
    {
      id: 'pending',
      label: 'Menunggu',
      count: reports.filter((r) => r.status === 'pending').length,
    },
    {
      id: 'investigating',
      label: 'Diproses',
      count: reports.filter((r) => r.status === 'investigating').length,
    },
    {
      id: 'resolved',
      label: 'Selesai',
      count: reports.filter((r) => r.status === 'resolved').length,
    },
  ];

  const handleExport = () => {
    exportToCsv(
      filtered,
      [
        { key: 'id', label: 'ID Laporan' },
        { key: 'date', label: 'Tanggal' },
        { key: 'time', label: 'Waktu' },
        { key: 'title', label: 'Jenis Pelanggaran' },
        { key: 'temple', label: 'Pura' },
        { key: 'region', label: 'Wilayah' },
        { key: 'status', label: 'Status' },
        { key: 'severity', label: 'Tingkat' },
      ],
      'laporan-pelanggaran'
    );
  };

  return (
    <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
      {/* Header */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-1.5">
          {chips.map((chip) => {
            const isActive = filter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                onClick={() => setFilter(chip.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-brown-normal text-orange-light'
                    : 'bg-orange-light text-brown-dark/65 hover:bg-orange-light-hover'
                }`}
              >
                <span>{chip.label}</span>
                <span
                  className={`rounded-full px-1.5 text-[10px] font-bold ${
                    isActive
                      ? 'bg-white/20 text-orange-light'
                      : 'bg-white text-brown-dark/55'
                  }`}
                >
                  {chip.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <FiSearch
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-brown-dark/40"
            />
            <input
              type="search"
              placeholder="Cari laporan..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-10 w-full rounded-xl border border-brown-dark/10 bg-orange-light/30 pl-8 pr-3 text-[12.5px] font-medium text-brown-normal placeholder:text-brown-dark/35 focus:border-brown-normal/30 focus:bg-white focus:outline-none sm:w-56"
            />
          </div>

          <button
            type="button"
            onClick={handleExport}
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-brown-normal px-3.5 text-[12.5px] font-bold text-orange-light transition hover:bg-brown-dark cursor-pointer"
          >
            <FiDownload size={13} />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-brown-dark/5 md:block">
        <table className="w-full text-left text-[13px]">
          <thead className="bg-orange-light/60 text-[11px] font-semibold text-brown-dark/55">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Tanggal</th>
              <th className="px-4 py-3">Pelanggaran</th>
              <th className="px-4 py-3">Pura · Wilayah</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brown-dark/5">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-12 text-center text-[12.5px] font-medium text-brown-dark/45"
                >
                  Belum ada laporan yang cocok.
                </td>
              </tr>
            ) : (
              filtered.map((report, idx) => (
                <motion.tr
                  key={report.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.025 }}
                  className="bg-white transition hover:bg-orange-light/30"
                >
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${severityDot[report.severity]}`} />
                      <code className="text-[11.5px] font-semibold text-brown-normal">
                        {report.id}
                      </code>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-[12.5px] font-semibold text-brown-normal">
                      {report.date}
                    </p>
                    <p className="text-[10.5px] font-medium text-brown-dark/45">
                      {report.time}
                    </p>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-[12.5px] font-bold text-brown-normal">
                      {report.title}
                    </p>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="text-[12.5px] font-semibold text-brown-normal">
                      {report.temple}
                    </p>
                    <p className="text-[10.5px] font-medium text-brown-dark/55">
                      {report.region}
                    </p>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-[10.5px] font-bold ${statusBadge[report.status]}`}>
                      {statusLabel[report.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <button
                      type="button"
                      className="inline-flex h-8 items-center gap-1 rounded-lg bg-orange-light px-2.5 text-[11px] font-bold text-brown-normal transition hover:bg-orange-normal hover:text-white cursor-pointer"
                    >
                      <FiEye size={12} />
                      Detail
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-2.5 md:hidden">
        {filtered.length === 0 ? (
          <p className="rounded-xl border border-dashed border-brown-dark/10 bg-orange-light/30 py-8 text-center text-[12.5px] font-medium text-brown-dark/45">
            Belum ada laporan yang cocok.
          </p>
        ) : (
          filtered.map((report, idx) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.025 }}
              className="rounded-xl border border-brown-dark/5 bg-yellow-light/40 p-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${severityDot[report.severity]}`} />
                    <code className="text-[10.5px] font-semibold text-brown-dark/55">
                      {report.id}
                    </code>
                  </div>
                  <p className="mt-1 text-[13px] font-bold text-brown-normal">
                    {report.title}
                  </p>
                  <p className="text-[11.5px] font-medium text-brown-dark/65">
                    {report.temple} · {report.region}
                  </p>
                  <p className="mt-0.5 text-[10.5px] font-medium text-brown-dark/45">
                    {report.date} · {report.time}
                  </p>
                </div>

                <span className={`shrink-0 rounded-full px-2 py-0.5 text-[9.5px] font-bold ${statusBadge[report.status]}`}>
                  {statusLabel[report.status]}
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-[11px] font-medium text-brown-dark/55">
        <p>
          Menampilkan {filtered.length} dari {reports.length} laporan
        </p>
        <p className="text-brown-dark/40">Data diperbarui otomatis</p>
      </div>
    </div>
  );
};

export default ReportsTable;