import { FiFileText, FiCheckCircle, FiClock, FiUsers } from 'react-icons/fi';
import KpiCard from '../../components/gov-dashboard/KpiCard';
import TrendLineChart from '../../components/gov-dashboard/TrendLineChart';
import ViolationDonut from '../../components/gov-dashboard/ViolationDonut';
import TempleReportsBar from '../../components/gov-dashboard/TempleReportsBar';
import RecentReportsFeed from '../../components/gov-dashboard/RecentReportsFeed';
import {
  dashboardKpis,
  visitorTrend,
  violationCategories,
  templeReports,
  recentReports,
} from '../../data/govDashboardData';

const formatNumber = (n) => {
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return n.toLocaleString('en-US');
};

const GovDashboardSummary = () => {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          icon={FiFileText}
          label="Total Reports This Month"
          value={dashboardKpis.totalReports}
          variant="brown"
          trendType="positive"
          trend={dashboardKpis.totalReportsTrend}
          index={0}
        />

        <KpiCard
          icon={FiCheckCircle}
          label="Resolved Reports"
          value={dashboardKpis.resolvedReports}
          variant="green"
          trendType="positive"
          trendText={`${dashboardKpis.resolvedRate}%`}
          index={1}
        />

        <KpiCard
          icon={FiClock}
          label="Pending Follow-Up"
          value={dashboardKpis.pendingReports}
          variant="orange"
          trendType="negative"
          trendText={`${dashboardKpis.pendingDelta} from yesterday`}
          index={2}
        />

        <KpiCard
          icon={FiUsers}
          label="Visitors This Month"
          value={formatNumber(dashboardKpis.totalVisitors)}
          variant="blue"
          trendType="positive"
          trend={dashboardKpis.visitorsTrend}
          index={3}
        />
      </section>

      <section className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 lg:grid-cols-[1.7fr_1fr]">
        <TrendLineChart data={visitorTrend} />
        <ViolationDonut categories={violationCategories} />
      </section>

      <section className="mt-5 grid grid-cols-1 gap-4 sm:mt-6 lg:grid-cols-[1.7fr_1fr]">
        <TempleReportsBar data={templeReports} />
        <RecentReportsFeed reports={recentReports} limit={5} />
      </section>
    </div>
  );
};

export default GovDashboardSummary; 