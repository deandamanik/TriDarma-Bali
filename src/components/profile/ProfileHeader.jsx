import { FiMail, FiPhone, FiCalendar } from 'react-icons/fi';

// Ambil inisial dari nama untuk avatar fallback
const getInitials = (name = '') =>
  name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

const ProfileHeader = ({ user }) => {
  return (
    <div className="bg-white rounded-3xl border border-brown-normal/15 shadow-sm p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-brown-normal text-orange-light flex items-center justify-center text-3xl font-bold shrink-0 overflow-hidden shadow-sm">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
        ) : (
          getInitials(user.name)
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-brown-normal tracking-tight">
          {user.name}
        </h1>
        <span className="mt-1.5 inline-block bg-orange-light text-orange-dark text-xs font-semibold px-3 py-1 rounded-full">
          {user.status}
        </span>

        <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-6 sm:gap-y-2 text-sm text-brown-normal/60 font-medium">
          <span className="flex items-center gap-2">
            <FiMail size={15} /> {user.email}
          </span>
          <span className="flex items-center gap-2">
            <FiPhone size={15} /> {user.phone}
          </span>
          <span className="flex items-center gap-2">
            <FiCalendar size={15} /> Joined {user.joinedAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;