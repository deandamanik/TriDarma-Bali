import ReportsTable from '../../components/gov-dashboard/ReportsTable';
import { recentReports } from '../../data/govDashboardData';

const GovDashboardReports = () => {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <ReportsTable reports={recentReports} />
    </div>
  );
};

export default GovDashboardReports;