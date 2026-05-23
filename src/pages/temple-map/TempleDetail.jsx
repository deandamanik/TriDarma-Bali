import { Link, useNavigate, useParams } from 'react-router-dom';
import {
    FiAlertCircle,
    FiArrowLeft,
    FiCalendar,
    FiClock,
    FiMapPin,
    FiNavigation,
    FiStar,
    FiUsers,
} from 'react-icons/fi';
import { MdTempleHindu } from 'react-icons/md';
import { temples, msmes } from '../../data/templeMapData';
import MsmeCard from '../../components/temple-map/MsmeCard';

const TempleDetail = () => {
    const { templeId } = useParams();
    const navigate = useNavigate();

    const temple = temples.find((item) => Number(item.id) === Number(templeId));

    if (!temple) {
        return (
            <main className="min-h-screen bg-orange-light px-5 py-20 font-poppins">
                <div className="mx-auto max-w-3xl rounded-[28px] bg-white p-8 text-center shadow-lg">
                    <h1 className="text-2xl font-extrabold text-brown-normal">
                        Temple not found
                    </h1>

                    <p className="mt-3 text-sm font-medium text-brown-dark/60">
                        The temple you are looking for does not exist or has been removed.
                    </p>

                    <Link
                        to="/temple-map"
                        className="mt-6 inline-flex rounded-xl bg-brown-normal px-5 py-3 text-sm font-bold text-white transition hover:bg-brown-dark"
                    >
                        Back to Temple Map
                    </Link>
                </div>
            </main>
        );
    }

    const nearbyMsmes = msmes
        .filter((item) => Number(item.templeId) === Number(temple.id))
        .sort((a, b) => Number(a.distanceInMeter) - Number(b.distanceInMeter));

    const statusStyle = {
        ceremony: 'bg-orange-100 text-orange-700 border-orange-300',
        crowded: 'bg-red-100 text-red-700 border-red-300',
        normal: 'bg-green-100 text-green-700 border-green-300',
    };

    return (
        <main className="min-h-screen bg-orange-light font-poppins">
            <section className="bg-brown-normal px-5 pb-16 pt-10 text-orange-light sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-light/30 px-4 py-2 text-sm font-bold text-orange-light transition hover:bg-orange-light hover:text-brown-normal"
                    >
                        <FiArrowLeft />
                        Back
                    </button>

                    <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
                        <div>
                            <span
                                className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-extrabold ${statusStyle[temple.status] || statusStyle.normal
                                    }`}
                            >
                                {temple.statusLabel}
                            </span>

                            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
                                {temple.name}
                            </h1>

                            <div className="mt-3 flex items-start gap-2 text-sm font-semibold text-orange-light/75">
                                <FiMapPin className="mt-0.5 shrink-0" />
                                <div>
                                    <p>{temple.area}</p>
                                    <p className="mt-1 max-w-2xl text-sm font-medium leading-relaxed text-orange-light/65">
                                        {temple.address}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-orange-light/80">
                                Discover essential visiting information, cultural etiquette,
                                ceremony status, ticket details, and nearby local MSMEs before
                                visiting this sacred temple.
                            </p>
                        </div>

                        <div className="rounded-[28px] border border-orange-light/20 bg-white/10 p-5 backdrop-blur">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-white p-4 text-brown-normal">
                                    <FiClock className="mb-3 text-orange-normal" size={22} />
                                    <p className="text-[11px] font-bold uppercase text-brown-dark/45">
                                        Opening Hours
                                    </p>
                                    <p className="mt-1 text-sm font-extrabold">{temple.time}</p>
                                </div>

                                <div className="rounded-2xl bg-white p-4 text-brown-normal">
                                    <FiUsers className="mb-3 text-orange-normal" size={22} />
                                    <p className="text-[11px] font-bold uppercase text-brown-dark/45">
                                        Visitors
                                    </p>
                                    <p className="mt-1 text-sm font-extrabold">
                                        {temple.visitors}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-4 text-brown-normal">
                                    <FiStar className="mb-3 text-orange-normal" size={22} />
                                    <p className="text-[11px] font-bold uppercase text-brown-dark/45">
                                        Rating
                                    </p>
                                    <p className="mt-1 text-sm font-extrabold">
                                        {temple.rating}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-4 text-brown-normal">
                                    <FiCalendar className="mb-3 text-orange-normal" size={22} />
                                    <p className="text-[11px] font-bold uppercase text-brown-dark/45">
                                        Ticket
                                    </p>
                                    <p className="mt-1 text-sm font-extrabold">
                                        {temple.ticket}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="-mt-10 px-5 pb-16 sm:px-8 lg:px-12">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]">
                    <div className="space-y-8">
                        <article className="rounded-[30px] bg-white p-6 shadow-xl shadow-brown-dark/10 md:p-8">
                            <div className="flex items-start gap-4">
                                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-orange-light text-brown-normal">
                                    <MdTempleHindu size={28} />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-extrabold text-brown-normal">
                                        Visit Overview
                                    </h2>

                                    <p className="mt-3 text-sm font-medium leading-relaxed text-brown-dark/65">
                                        This page helps visitors understand the current temple
                                        condition before arrival. The information includes ceremony
                                        alerts, opening hours, estimated visitor density, and local
                                        services available around the temple area.
                                    </p>
                                </div>
                            </div>
                        </article>

                        <article className="rounded-[30px] bg-white p-6 shadow-xl shadow-brown-dark/10 md:p-8">
                            <div className="mb-5 flex items-center gap-3">
                                <FiAlertCircle className="text-orange-normal" size={24} />

                                <h2 className="text-2xl font-extrabold text-brown-normal">
                                    Current Temple Notice
                                </h2>
                            </div>

                            <div className="rounded-2xl border border-yellow-normal bg-yellow-light p-5">
                                <p className="text-sm font-semibold leading-relaxed text-orange-dark">
                                    {temple.warning}
                                </p>
                            </div>
                        </article>

                        <article className="rounded-[30px] bg-white p-6 shadow-xl shadow-brown-dark/10 md:p-8">
                            <h2 className="text-2xl font-extrabold text-brown-normal">
                                Dress Code & Rules
                            </h2>

                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {[
                                    'Wear a kamen or sarong before entering the temple area.',
                                    'Use a shawl or sash around the waist as a sign of respect.',
                                    'Keep noise low around prayer and ceremony areas.',
                                    'Do not enter restricted sacred spaces without permission.',
                                ].map((rule) => (
                                    <div
                                        key={rule}
                                        className="rounded-2xl border border-yellow-normal bg-yellow-light p-4 text-sm font-semibold leading-relaxed text-brown-normal"
                                    >
                                        {rule}
                                    </div>
                                ))}
                            </div>
                        </article>

                        <article className="rounded-[30px] bg-white p-6 shadow-xl shadow-brown-dark/10 md:p-8">
                            <div className="mb-5 flex items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-extrabold text-brown-normal">
                                        Nearby Local MSMEs
                                    </h2>

                                    <p className="mt-1 text-sm font-medium text-brown-dark/55">
                                        Local businesses available around this temple.
                                    </p>
                                </div>

                                <span className="rounded-full bg-orange-light px-4 py-1.5 text-xs font-extrabold text-orange-dark">
                                    {nearbyMsmes.length} businesses
                                </span>
                            </div>

                            {nearbyMsmes.length > 0 ? (
                                <div className="grid gap-4 xl:grid-cols-2">
                                    {nearbyMsmes.map((msme) => (
                                        <MsmeCard key={msme.id} msme={msme} />
                                    ))}
                                </div>
                            ) : (
                                <div className="rounded-2xl border border-yellow-normal bg-yellow-light p-6 text-center">
                                    <h3 className="text-base font-extrabold text-brown-normal">
                                        No MSMEs available
                                    </h3>

                                    <p className="mt-2 text-sm font-medium text-brown-dark/60">
                                        There are no registered local MSMEs around this temple yet.
                                    </p>
                                </div>
                            )}
                        </article>
                    </div>

                    <aside className="space-y-6">
                        <div className="rounded-[30px] bg-white p-6 shadow-xl shadow-brown-dark/10">
                            <h2 className="text-xl font-extrabold text-brown-normal">
                                Location
                            </h2>

                            <div className="mt-4 rounded-2xl border border-yellow-normal bg-yellow-light p-4">
                                <p className="text-xs font-bold uppercase text-brown-dark/45">
                                    Coordinates
                                </p>

                                <p className="mt-1 text-sm font-extrabold text-brown-normal">
                                    {temple.coordinates[0]}, {temple.coordinates[1]}
                                </p>
                            </div>

                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                    temple.address
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brown-normal px-5 py-3 text-sm font-bold !text-white !no-underline transition hover:bg-brown-dark hover:!text-white"
                            >
                                <FiNavigation />
                                Open in Google Maps
                            </a>
                        </div>

                        <div className="rounded-[30px] bg-white p-6 shadow-xl shadow-brown-dark/10">
                            <h2 className="text-xl font-extrabold text-brown-normal">
                                Visitor Tips
                            </h2>

                            <ul className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-brown-dark/65">
                                <li>• Visit earlier to avoid peak visitor density.</li>
                                <li>• Prepare proper temple clothing before arrival.</li>
                                <li>• Follow instructions from temple officers.</li>
                                <li>• Support verified local MSMEs around the temple.</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
};

export default TempleDetail;