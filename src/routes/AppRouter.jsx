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

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cultural-encyclopedia" element={<CulturalEncyclopedia />} />
        <Route path="/cultural-encyclopedia/:articleId" element={<ArticleDetail />} />
        <Route path="/temple-map" element={<TempleMap />} />
        <Route path="/temple-map" element={<TempleMap />} />
        <Route path="/temple-map/:templeId" element={<TempleDetail />} />
        <Route path="/report-violations" element={<ReportViolations />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Halaman 404 / Not Found */}
      <Route path="*" element={<div className="flex items-center justify-center h-screen">404 - Halaman Tidak Ditemukan</div>} />
    </Routes>
  );
};

export default AppRouter;