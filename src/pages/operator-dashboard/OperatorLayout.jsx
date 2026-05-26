import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import OperatorSidebar from '../../components/operator-dashboard/OperatorSidebar';
import OperatorTopbar from '../../components/operator-dashboard/OperatorTopbar';

const pageMeta = {
    '/operator-dashboard': {
        title: 'Region Overview',
    },
    '/operator-dashboard/pura': {
        title: 'Manage Temples',
        subtitle: 'Set visiting hours and ceremony status for temples in your region',
    },
    '/operator-dashboard/umkm': {
        title: 'Local UMKM',
        subtitle: 'Register and manage UMKMs around temples',
    },
    '/operator-dashboard/pengaturan': {
        title: 'Settings',
        subtitle: 'Adjust your operator account preferences',
    },
};

const OperatorLayout = () => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const location = useLocation();
    const meta = pageMeta[location.pathname] || pageMeta['/operator-dashboard'];

    return (
        <div className="min-h-screen bg-orange-light/40 font-poppins">
            <OperatorSidebar
                isMobileOpen={isMobileSidebarOpen}
                onCloseMobile={() => setIsMobileSidebarOpen(false)}
            />

            <div className="flex min-h-screen flex-col lg:pl-60 xl:pl-64">
                <OperatorTopbar
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

export default OperatorLayout;