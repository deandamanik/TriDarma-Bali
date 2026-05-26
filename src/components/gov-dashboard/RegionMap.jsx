import { useState, useMemo } from 'react';
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
  Popup,
  ZoomControl,
} from 'react-leaflet';
import { motion } from 'framer-motion';
import { FiDownload, FiSearch } from 'react-icons/fi';
import { exportToCsv } from '../../utils/exportCsv';

const getHeatColor = (intensity) => {
  if (intensity < 0.2) return '#fefbf6';
  if (intensity < 0.4) return '#f0d8a1';
  if (intensity < 0.6) return '#dd9e59';
  if (intensity < 0.8) return '#a67743';
  return '#622b14';
};

const getRadius = (intensity) => 16 + intensity * 30;

const BALI_CENTER = [-8.4095, 115.1889];

const RegionMap = ({ regions }) => {
  const [hoverId, setHoverId] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const maxReports = useMemo(
    () => Math.max(...regions.map((r) => r.reports)),
    [regions]
  );

  const filteredRegions = useMemo(() => {
    if (!searchQuery.trim()) return regions;
    const q = searchQuery.toLowerCase();
    return regions.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.capital.toLowerCase().includes(q)
    );
  }, [regions, searchQuery]);

  const sortedRegions = useMemo(
    () => [...filteredRegions].sort((a, b) => b.reports - a.reports),
    [filteredRegions]
  );

  const handleExport = () => {
    exportToCsv(
      regions,
      [
        { key: 'name', label: 'Kabupaten/Kota' },
        { key: 'capital', label: 'Ibu Kota' },
        { key: 'reports', label: 'Total Laporan' },
        { key: 'resolved', label: 'Terselesaikan' },
        { key: 'pending', label: 'Menunggu' },
        { key: 'trend', label: 'Tren (%)' },
      ],
      'pelanggaran-per-wilayah'
    );
  };

  return (
    <div className="grid h-[calc(100vh-4rem)] grid-cols-1 overflow-hidden lg:h-[calc(100vh-5rem)] lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
      {/* Map area */}
      <div className="relative h-[60vh] lg:h-full">
        <MapContainer
          center={BALI_CENTER}
          zoom={10}
          minZoom={9}
          maxZoom={13}
          scrollWheelZoom
          zoomControl={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ZoomControl position="bottomright" />

          {regions.map((region) => {
            const intensity = region.reports / maxReports;
            const color = getHeatColor(intensity);
            const radius = getRadius(intensity);
            const isHover = hoverId === region.id;
            const isSelected = selectedId === region.id;

            return (
              <CircleMarker
                key={region.id}
                center={region.coords}
                radius={isHover || isSelected ? radius + 4 : radius}
                pathOptions={{
                  fillColor: color,
                  fillOpacity: 0.82,
                  color: '#622b14',
                  weight: isHover || isSelected ? 3 : 1.5,
                }}
                eventHandlers={{
                  mouseover: () => setHoverId(region.id),
                  mouseout: () => setHoverId(null),
                  click: () => setSelectedId(region.id),
                }}
              >
                <Tooltip
                  direction="top"
                  offset={[0, -radius]}
                  opacity={1}
                  className="!rounded-lg !border-0 !bg-brown-normal !px-2.5 !py-1.5 !text-orange-light !shadow-xl"
                >
                  <div className="font-poppins">
                    <p className="text-[11px] font-bold text-yellow-normal">
                      {region.name}
                    </p>
                    <p className="text-xs font-semibold text-white">
                      {region.reports} laporan
                    </p>
                  </div>
                </Tooltip>

                <Popup>
                  <div className="w-[220px] font-poppins">
                    <p className="text-[10px] font-semibold text-brown-dark/50">
                      Kabupaten / Kota
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-brown-normal">
                      {region.name}
                    </p>
                    <p className="text-[11px] font-medium text-brown-dark/55">
                      Ibu kota: {region.capital}
                    </p>

                    <div className="mt-3 grid grid-cols-3 gap-1.5">
                      <div className="rounded-lg bg-orange-light p-2 text-center">
                        <p className="text-[9px] font-semibold text-brown-dark/55">Total</p>
                        <p className="text-sm font-bold text-brown-normal">{region.reports}</p>
                      </div>
                      <div className="rounded-lg bg-emerald-50 p-2 text-center">
                        <p className="text-[9px] font-semibold text-emerald-700/65">Selesai</p>
                        <p className="text-sm font-bold text-emerald-700">{region.resolved}</p>
                      </div>
                      <div className="rounded-lg bg-rose-50 p-2 text-center">
                        <p className="text-[9px] font-semibold text-rose-700/65">Menunggu</p>
                        <p className="text-sm font-bold text-rose-700">{region.pending}</p>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between rounded-lg bg-orange-light/60 px-2.5 py-1.5">
                      <span className="text-[11px] font-medium text-brown-dark/60">Tren</span>
                      <span
                        className={`text-[12px] font-bold ${
                          region.trend > 0 ? 'text-rose-600' : 'text-emerald-600'
                        }`}
                      >
                        {region.trend > 0 ? '+' : ''}{region.trend}%
                      </span>
                    </div>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>

        {/* Floating legend */}
        <div className="pointer-events-none absolute left-4 top-4 z-[500] rounded-2xl border border-brown-dark/10 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur">
          <p className="mb-1.5 text-[11px] font-semibold text-brown-dark/65">
            Intensitas laporan
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium text-brown-dark/55">Rendah</span>
            <div className="flex h-2 w-24 overflow-hidden rounded-full">
              <div className="flex-1" style={{ backgroundColor: '#fefbf6' }} />
              <div className="flex-1" style={{ backgroundColor: '#f0d8a1' }} />
              <div className="flex-1" style={{ backgroundColor: '#dd9e59' }} />
              <div className="flex-1" style={{ backgroundColor: '#a67743' }} />
              <div className="flex-1" style={{ backgroundColor: '#622b14' }} />
            </div>
            <span className="text-[10px] font-medium text-brown-dark/55">Tinggi</span>
          </div>
        </div>
      </div>

      {/* Side panel */}
      <aside className="flex h-full flex-col overflow-hidden border-t border-brown-dark/10 bg-white lg:border-l lg:border-t-0">
        <div className="border-b border-brown-dark/5 px-5 py-4">
          <h3 className="text-[15px] font-bold text-brown-normal">
            Daftar Kabupaten / Kota
          </h3>
          <p className="mt-0.5 text-[12px] font-medium text-brown-dark/55">
            Urut berdasarkan jumlah laporan
          </p>

          {/* Search */}
          <div className="relative mt-3">
            <FiSearch
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brown-dark/40"
            />
            <input
              type="search"
              placeholder="Cari kabupaten..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-xl border border-brown-dark/10 bg-orange-light/30 pl-9 pr-3 text-[13px] font-medium text-brown-normal placeholder:text-brown-dark/35 focus:border-brown-normal/30 focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={handleExport}
            className="mt-3 inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-brown-normal text-[13px] font-bold text-orange-light transition hover:bg-brown-dark cursor-pointer"
          >
            <FiDownload size={14} />
            <span>Export data CSV</span>
          </button>
        </div>

        {/* Region list */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {sortedRegions.length === 0 ? (
            <p className="py-8 text-center text-[12px] font-medium text-brown-dark/45">
              Tidak ada wilayah yang cocok dengan pencarian.
            </p>
          ) : (
            <div className="space-y-2">
              {sortedRegions.map((region, idx) => {
                const intensity = region.reports / maxReports;
                const color = getHeatColor(intensity);
                const isActive = selectedId === region.id || hoverId === region.id;

                return (
                  <motion.button
                    key={region.id}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.03 }}
                    onClick={() => setSelectedId(region.id)}
                    onMouseEnter={() => setHoverId(region.id)}
                    onMouseLeave={() => setHoverId(null)}
                    className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition cursor-pointer ${
                      isActive
                        ? 'border-brown-normal/25 bg-orange-light'
                        : 'border-brown-dark/5 bg-white hover:bg-orange-light/40'
                    }`}
                  >
                    <span
                      className="h-9 w-9 shrink-0 rounded-lg border border-brown-dark/10"
                      style={{ backgroundColor: color }}
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-bold text-brown-normal">
                        {region.name}
                      </p>
                      <p className="text-[11px] font-medium text-brown-dark/55">
                        {region.capital}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[15px] font-bold text-brown-normal">
                        {region.reports}
                      </p>
                      <p
                        className={`text-[10px] font-bold ${
                          region.trend > 0 ? 'text-rose-600' : 'text-emerald-600'
                        }`}
                      >
                        {region.trend > 0 ? '+' : ''}{region.trend}%
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default RegionMap;