import { useState } from 'react';
import { FiUser, FiPhone, FiMail } from 'react-icons/fi';
import AuthInput from '../auth/AuthInput';

const ProfileSettings = ({ user }) => {
  const [savedMsg, setSavedMsg] = useState('');

  const handleProfileSave = (e) => {
    e.preventDefault();
    // TODO: sambungkan ke API update profil.
    setSavedMsg('Profile updated successfully.');
    setTimeout(() => setSavedMsg(''), 2500);
  };

  const handlePasswordSave = (e) => {
    e.preventDefault();
    // TODO: sambungkan ke API ganti password.
    setSavedMsg('Password changed successfully.');
    setTimeout(() => setSavedMsg(''), 2500);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Edit Profile */}
      <section className="bg-white rounded-3xl border border-brown-normal/15 shadow-sm p-6 md:p-8">
        <h2 className="text-lg font-bold text-brown-normal">Edit Profile</h2>
        <p className="text-sm text-brown-normal/60 mt-1">
          Update your personal information.
        </p>

        <form onSubmit={handleProfileSave} className="mt-6 flex flex-col gap-5">
          <AuthInput label="Full Name" icon={FiUser} defaultValue={user.name} />
          <AuthInput label="WhatsApp Number" icon={FiPhone} type="tel" defaultValue={user.phone} />
          <AuthInput label="Email Address" icon={FiMail} type="email" defaultValue={user.email} />
          <button
            type="submit"
            className="self-start h-11 px-6 bg-brown-normal text-orange-light font-bold text-sm rounded-full hover:bg-brown-normal-hover active:scale-[0.99] transition cursor-pointer"
          >
            Save Changes
          </button>
        </form>
      </section>

      {/* Change Password */}
      <section className="bg-white rounded-3xl border border-brown-normal/15 shadow-sm p-6 md:p-8">
        <h2 className="text-lg font-bold text-brown-normal">Change Password</h2>
        <p className="text-sm text-brown-normal/60 mt-1">
          Use at least 6 characters for a secure password.
        </p>

        <form onSubmit={handlePasswordSave} className="mt-6 flex flex-col gap-5">
          <AuthInput label="Current Password" isPassword placeholder="Enter current password" />
          <AuthInput label="New Password" isPassword placeholder="Min. 6 characters" minLength={6} />
          <AuthInput label="Confirm New Password" isPassword placeholder="Re-type new password" minLength={6} />
          <button
            type="submit"
            className="self-start h-11 px-6 bg-brown-normal text-orange-light font-bold text-sm rounded-full hover:bg-brown-normal-hover active:scale-[0.99] transition cursor-pointer"
          >
            Update Password
          </button>
        </form>
      </section>

      {savedMsg && (
        <p className="text-sm font-semibold text-green-600 text-center">{savedMsg}</p>
      )}
    </div>
  );
};

export default ProfileSettings;