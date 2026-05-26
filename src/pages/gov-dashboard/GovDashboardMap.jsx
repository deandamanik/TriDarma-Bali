import RegionMap from '../../components/gov-dashboard/RegionMap';
import { regionData } from '../../data/govDashboardData';

const GovDashboardMap = () => {
  return <RegionMap regions={regionData} />;
};

export default GovDashboardMap;