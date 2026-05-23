import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSettings, FiFlag, FiBookmark, FiArrowLeft } from 'react-icons/fi';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileSettings from '../../components/profile/ProfileSettings';
import MyReports from '../../components/profile/MyReports';
import SavedArticles from '../../components/profile/SavedArticles';
import { CURRENT_USER, MY_REPORTS, MY_BOOKMARKS } from '../../data/profile';
import logo from '../../assets/tridarma-logo.svg';

const TABS = [
  { key: 'settings', label: 'Account Settings', icon: FiSettings },
  { key: 'reports', label: 'My Reports', icon: FiFlag, count: MY_REPORTS.length },
  { key: 'saved', label: 'Saved Articles', icon: FiBookmark, count: MY_BOOKMARKS.length },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('settings');

  return (
    <div className="w-full min-h-screen bg-orange-light/40 font-poppins">
      {/* Top bar (pengganti navbar) */}
      <div className="max-w-360 mx-auto px-6 md:px-12 pt-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="TriDarma Bali" className="h-10 w-auto object-contain" />
          <span className="text-lg font-bold text-brown-dark tracking-tight hidden sm:block">
            TriDarma<span className="text-orange-normal">Bali</span>
          </span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white border border-brown-normal/15 text-sm font-semibold text-brown-normal hover:bg-white/80 transition"
        >
          <FiArrowLeft size={16} />
          Back to Home
        </Link>
      </div>

      <div className="max-w-360 mx-auto px-6 md:px-12 py-8 md:py-10">
        <ProfileHeader user={CURRENT_USER} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar tabs */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
              {TABS.map(({ key, label, icon: Icon, count }) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-3 h-12 px-4 rounded-2xl text-sm font-semibold whitespace-nowrap transition cursor-pointer shrink-0 lg:w-full ${
                      isActive
                        ? 'bg-brown-normal text-orange-light'
                        : 'bg-white text-brown-normal/70 hover:text-brown-normal hover:bg-white/80 border border-brown-normal/10'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="grow text-left">{label}</span>
                    {typeof count === 'number' && (
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-orange-light/20 text-orange-light' : 'bg-orange-light text-orange-dark'
                        }`}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'settings' && <ProfileSettings user={CURRENT_USER} />}
              {activeTab === 'reports' && <MyReports />}
              {activeTab === 'saved' && <SavedArticles />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;