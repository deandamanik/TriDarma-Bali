import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/home/Home';
import CulturalEncyclopedia from '../pages/cultural-encyclopedia/CulturalEncyclopedia';
import ArticleDetail from '../pages/cultural-encyclopedia/ArticleDetail';
import TempleMap from '../pages/temple-map/TempleMap';
import ReportViolations from '../pages/report-violations/ReportViolations';
import Calendar from '../pages/calendar/Calendar';
import TempleDetail from '../pages/temple-map/TempleDetail';
import Profile from '../pages/profile/Profile';

// Gov Dashboard
import GovDashboardLayout from '../pages/gov-dashboard/GovDashboardLayout';
import GovDashboardSummary from '../pages/gov-dashboard/GovDashboardSummary';
import GovDashboardReports from '../pages/gov-dashboard/GovDashboardReports';
import GovDashboardMap from '../pages/gov-dashboard/GovDashboardMap';
import GovDashboardCalendar from '../pages/gov-dashboard/GovDashboardCalendar';
import GovDashboardNotifications from '../pages/gov-dashboard/GovDashboardNotifications';
import GovDashboardSettings from '../pages/gov-dashboard/GovDashboardSettings';

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cultural-encyclopedia" element={<CulturalEncyclopedia />} />
        <Route path="/cultural-encyclopedia/:articleId" element={<ArticleDetail />} />
        <Route path="/temple-map" element={<TempleMap />} />
        <Route path="/temple-map/:templeId" element={<TempleDetail />} />
        <Route path="/report-violations" element={<ReportViolations />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/gov-dashboard" element={<GovDashboardLayout />}>
        <Route index element={<GovDashboardSummary />} />
        <Route path="laporan" element={<GovDashboardReports />} />
        <Route path="peta" element={<GovDashboardMap />} />
        <Route path="kalender" element={<GovDashboardCalendar />} />
        <Route path="notifikasi" element={<GovDashboardNotifications />} />
        <Route path="pengaturan" element={<GovDashboardSettings />} />
      </Route>

      <Route
        path="*"
        element={
          <div className="flex h-screen items-center justify-center">
            404 - Halaman Tidak Ditemukan
          </div>
        }
      />
    </Routes>
  );
};

export default AppRouter;