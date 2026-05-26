import { FiMapPin, FiSun, FiShoppingBag, FiUsers } from 'react-icons/fi';
import KpiCard from '../../components/gov-dashboard/KpiCard';
import TodayCeremoniesCard from '../../components/operator-dashboard/TodayCeremoniesCard';
import RecentActivityCard from '../../components/operator-dashboard/RecentActivityCard';
import StatusBadge from '../../components/operator-dashboard/StatusBadge';
import { Link } from 'react-router-dom';
import {
    operatorKpis,
    operatorTemples,
    todayCeremonies,
    operatorActivities,
} from '../../data/operatorDashboardData';
import { FiArrowRight } from 'react-icons/fi';

const formatNumber = (n) => {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
    return n.toLocaleString('id-ID');
};

const OperatorOverview = () => {
    return (
        <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
            {/* KPI cards */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <KpiCard
                    icon={FiMapPin}
                    label="Active Temples"
                    value={`${operatorKpis.activeTemples}/${operatorKpis.totalTemples}`}
                    variant="brown"
                    trendText={`${operatorKpis.totalTemples - operatorKpis.activeTemples} inactive`}
                    trendType="neutral"
                    index={0}
                />
                <KpiCard
                    icon={FiSun}
                    label="Today's Ceremonies"
                    value={operatorKpis.todayCeremonies}
                    variant="orange"
                    trendText="active now"
                    trendType="neutral"
                    index={1}
                />
                <KpiCard
                    icon={FiShoppingBag}
                    label="Registered UMKM"
                    value={operatorKpis.registeredUmkm}
                    variant="green"
                    trend={operatorKpis.umkmTrend}
                    trendType="positive"
                    index={2}
                />
                <KpiCard
                    icon={FiUsers}
                    label="Today's Visitors"
                    value={formatNumber(operatorKpis.todayVisitors)}
                    variant="blue"
                    trend={operatorKpis.visitorsTrend}
                    trendType="positive"
                    index={3}
                />
            </section>

            {/* Status pura ringkas */}
            <section className="mt-5 rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:mt-6 sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-base font-bold text-brown-normal sm:text-[17px]">
                            Temple Status in Your Region
                        </h3>
                        <p className="mt-0.5 text-[12.5px] font-medium text-brown-dark/55">
                            Summary of condition for each temple you manage
                        </p>
                    </div>

                    <Link
                        to="/operator-dashboard/pura"
                        className="inline-flex items-center gap-1 text-[12px] font-semibold text-brown-dark/65 transition hover:text-brown-normal"
                    >
                        <span>Manage all</span>
                        <FiArrowRight size={12} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {operatorTemples.map((temple) => {
                        const utilization = Math.round(
                            (temple.todayVisitors / temple.capacity) * 100
                        );
                        return (
                            <div
                                key={temple.id}
                                className="rounded-xl border border-brown-dark/5 bg-yellow-light/40 p-3 transition hover:bg-yellow-light"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-[13px] font-bold text-brown-normal">
                                            {temple.name}
                                        </p>
                                        <p className="mt-0.5 truncate text-[11px] font-medium text-brown-dark/55">
                                            {temple.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-2.5">
                                    <StatusBadge status={temple.status} size="sm" />
                                </div>

                                <div className="mt-2.5 flex items-center justify-between border-t border-brown-dark/5 pt-2.5">
                                    <span className="text-[11px] font-medium text-brown-dark/55">
                                        {temple.openingHours.open} – {temple.openingHours.close}
                                    </span>
                                    <span className="text-[11px] font-bold text-brown-normal">
                                        {utilization}% used
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Today ceremonies + Activity log */}
            <section className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_1fr] sm:mt-6">
                <TodayCeremoniesCard ceremonies={todayCeremonies} />
                <RecentActivityCard activities={operatorActivities} />
            </section>
        </div>
    );
};

export default OperatorOverview;