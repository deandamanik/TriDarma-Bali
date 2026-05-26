import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import GovSidebar from '../../components/gov-dashboard/GovSidebar';
import GovTopbar from '../../components/gov-dashboard/GovTopbar';

const pageMeta = {
  '/gov-dashboard': {
    title: 'Analytics Dashboard',
  },
  '/gov-dashboard/laporan': {
    title: 'Incoming Reports',
    subtitle: 'Reports that need follow-up',
  },
  '/gov-dashboard/peta': {
    title: 'Violation Map',
    subtitle: 'Report distribution across 9 regencies/cities in Bali Province',
  },
  '/gov-dashboard/kalender': {
    title: 'Ceremony Calendar',
    subtitle: 'Traditional ceremony schedules that need monitoring',
  },
  '/gov-dashboard/notifikasi': {
    title: 'Notifications',
    subtitle: 'Latest notifications and escalations',
  },
  '/gov-dashboard/pengaturan': {
    title: 'Settings',
    subtitle: 'Manage account and dashboard preferences',
  },
};

const GovDashboardLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const meta = pageMeta[location.pathname] || pageMeta['/gov-dashboard'];

  return (
    <div className="min-h-screen bg-orange-light/40 font-poppins">
      <GovSidebar
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      <div className="flex min-h-screen flex-col lg:pl-60 xl:pl-64">
        <GovTopbar
          title={meta.title}
          subtitle={meta.subtitle}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
        />

        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default GovDashboardLayout;