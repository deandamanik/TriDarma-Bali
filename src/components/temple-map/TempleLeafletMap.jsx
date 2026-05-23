import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    ZoomControl,
    useMap,
} from 'react-leaflet';
import L from 'leaflet';
import { FiClock, FiStar, FiUsers } from 'react-icons/fi';
import MapSearchBar from './MapSearchBar';
import iconPura from '../../assets/temple-map/icon-pura.png';

const createTempleIcon = (status, isActive) => {
  const statusColor = {
    ceremony: '#f59e0b',
    crowded: '#ef4444',
    normal: '#22c55e',
  };

  const markerSize = isActive ? 56 : 48;
  const imageSize = isActive ? 30 : 26;

  return L.divIcon({
    className: '',
    html: `
      <div style="
        position: relative;
        width: ${markerSize}px;
        height: ${markerSize}px;
        border-radius: 9999px;
        background: #7a351f;
        border: 3px solid white;
        box-shadow: 0 12px 25px rgba(82, 37, 24, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <img
          src="${iconPura}"
          alt="Temple icon"
          style="
            width: ${imageSize}px;
            height: ${imageSize}px;
            object-fit: contain;
            display: block;
          "
        />

        <span style="
          position: absolute;
          right: -2px;
          top: -2px;
          width: 13px;
          height: 13px;
          border-radius: 9999px;
          background: ${statusColor[status] || '#22c55e'};
          border: 2px solid white;
        "></span>
      </div>
    `,
    iconSize: [markerSize, markerSize],
    iconAnchor: [markerSize / 2, markerSize],
    popupAnchor: [0, -markerSize],
  });
};

const MapFlyTo = ({ temple }) => {
    const map = useMap();

    useEffect(() => {
        if (!temple) return;

        map.flyTo(temple.coordinates, 11, {
            duration: 0.8,
        });
    }, [map, temple]);

    return null;
};

const legendItems = [
    { label: 'The Ceremony Takes Place', className: 'bg-orange-500' },
    { label: 'Very crowded', className: 'bg-red-500' },
    { label: 'Normal / Open', className: 'bg-green-500' },
];

const TempleLeafletMap = ({
    temples,
    selectedTemple,
    onSelectTemple,
    searchQuery,
    onSearchChange,
    statusFilter,
    onStatusFilterChange,
    sortBy,
    onSortChange,
}) => {
    return (
        <section className="relative min-h-[680px] overflow-hidden bg-white lg:min-h-[calc(100vh-80px)]">
            <MapSearchBar
                searchQuery={searchQuery}
                onSearchChange={onSearchChange}
                statusFilter={statusFilter}
                onStatusFilterChange={onStatusFilterChange}
                sortBy={sortBy}
                onSortChange={onSortChange}
            />

            <MapContainer
                center={[-8.4095, 115.1889]}
                zoom={10}
                minZoom={9}
                maxZoom={18}
                zoomControl={false}
                scrollWheelZoom
                className="h-[680px] w-full lg:h-[calc(100vh-80px)]"
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ZoomControl position="bottomright" />

                <MapFlyTo temple={selectedTemple} />

                {temples.map((temple) => (
                    <Marker
                        key={temple.id}
                        position={temple.coordinates}
                        icon={createTempleIcon(
                            temple.status,
                            selectedTemple?.id === temple.id
                        )}
                        eventHandlers={{
                            click: () => onSelectTemple(temple),
                        }}
                    >
                        <Popup>
                            <div className="w-[220px] font-poppins">
                                <p className="mb-1 text-sm font-extrabold text-brown-normal">
                                    {temple.name}
                                </p>

                                <p className="mb-1 text-xs font-semibold text-brown-dark/60">
                                    {temple.area}
                                </p>

                                <p className="mb-3 text-[11px] font-medium leading-relaxed text-brown-dark/50">
                                    {temple.address}
                                </p>

                                <div className="mb-3 rounded-lg border border-yellow-normal bg-yellow-light p-2 text-[11px] font-semibold text-orange-dark">
                                    {temple.warning}
                                </div>

                                <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-brown-dark/60">
                                    <span className="inline-flex items-center gap-1">
                                        <FiClock />
                                        {temple.time}
                                    </span>

                                    <span className="inline-flex items-center gap-1">
                                        <FiUsers />
                                        {temple.visitors}
                                    </span>

                                    <span className="inline-flex items-center gap-1">
                                        <FiStar />
                                        {temple.rating}
                                    </span>
                                </div>

                                <Link
                                    to={`/temple-map/${temple.id}`}
                                    className="mt-3 block w-full rounded-lg bg-brown-normal px-3 py-2 text-center text-[11px] font-bold !text-white !no-underline transition hover:bg-brown-dark hover:!text-white"
                                >
                                    View Detail
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            {temples.length === 0 && (
                <div className="absolute left-1/2 top-1/2 z-[500] w-[min(90%,360px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-yellow-normal bg-white p-5 text-center shadow-xl">
                    <h3 className="text-base font-extrabold text-brown-normal">
                        Pura tidak ditemukan
                    </h3>

                    <p className="mt-2 text-sm font-medium text-brown-dark/60">
                        Coba gunakan kata kunci lain atau ubah filter status.
                    </p>
                </div>
            )}

            <div className="absolute bottom-7 left-5 z-[500] rounded-2xl border border-yellow-normal/70 bg-white p-4 shadow-xl shadow-brown-dark/15 sm:left-6 md:p-5">
                <h3 className="mb-3 text-xs font-bold text-brown-dark">
                    Temple Status
                </h3>

                <div className="space-y-2">
                    {legendItems.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center gap-2 text-[11px] font-medium text-brown-dark/70"
                        >
                            <span className={`h-2.5 w-2.5 rounded-full ${item.className}`} />
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TempleLeafletMap;