import { useState } from 'react';
import { FiUser, FiBell, FiShield, FiDownload } from 'react-icons/fi';
import { govUser } from '../../data/govDashboardData';

const Toggle = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className={`relative h-6 w-11 cursor-pointer rounded-full transition ${
      checked ? 'bg-brown-normal' : 'bg-brown-dark/15'
    }`}
    aria-pressed={checked}
  >
    <span
      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${
        checked ? 'left-[22px]' : 'left-0.5'
      }`}
    />
  </button>
);

const SettingRow = ({ icon: Icon, title, desc, action }) => (
  <div className="flex items-center justify-between gap-4 py-4">
    <div className="flex items-start gap-3">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-orange-light text-brown-normal">
        <Icon size={15} />
      </div>

      <div>
        <p className="text-[13.5px] font-bold text-brown-normal">{title}</p>

        <p className="mt-0.5 text-[12px] font-medium text-brown-dark/55">
          {desc}
        </p>
      </div>
    </div>

    <div className="shrink-0">{action}</div>
  </div>
);

const GovDashboardSettings = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
      <div className="space-y-5">
        <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
          <h3 className="text-base font-bold text-brown-normal">
            Account Profile
          </h3>

          <div className="mt-4 flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brown-normal text-base font-bold text-orange-light">
              {govUser.initials}
            </div>

            <div>
              <p className="text-[15px] font-bold text-brown-normal">
                {govUser.name}
              </p>

              <p className="text-[12.5px] font-medium text-brown-dark/55">
                {govUser.role}
              </p>
            </div>

            <button
              type="button"
              className="ml-auto inline-flex h-10 cursor-pointer items-center rounded-xl border border-brown-dark/10 bg-white px-4 text-[12.5px] font-semibold text-brown-normal transition hover:bg-orange-light"
            >
              Edit profile
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
          <h3 className="text-base font-bold text-brown-normal">
            Notifications
          </h3>

          <div className="mt-2 divide-y divide-brown-dark/5">
            <SettingRow
              icon={FiBell}
              title="Email notifications"
              desc="Send new reports to my email"
              action={<Toggle checked={emailNotif} onChange={setEmailNotif} />}
            />

            <SettingRow
              icon={FiBell}
              title="Push notifications"
              desc="Show instant notifications in the browser"
              action={<Toggle checked={pushNotif} onChange={setPushNotif} />}
            />

            <SettingRow
              icon={FiBell}
              title="Weekly summary"
              desc="Send a digest every Monday morning"
              action={
                <Toggle checked={weeklyDigest} onChange={setWeeklyDigest} />
              }
            />
          </div>
        </div>

        <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
          <h3 className="text-base font-bold text-brown-normal">
            Data &amp; Security
          </h3>

          <div className="mt-2 divide-y divide-brown-dark/5">
            <SettingRow
              icon={FiDownload}
              title="Export all data"
              desc="Download all reports in CSV format"
              action={
                <button
                  type="button"
                  className="inline-flex h-9 cursor-pointer items-center rounded-xl bg-orange-light px-3.5 text-[12px] font-semibold text-brown-normal transition hover:bg-orange-normal hover:text-white"
                >
                  Download
                </button>
              }
            />

            <SettingRow
              icon={FiShield}
              title="Change password"
              desc="Keep your account secure regularly"
              action={
                <button
                  type="button"
                  className="inline-flex h-9 cursor-pointer items-center rounded-xl bg-orange-light px-3.5 text-[12px] font-semibold text-brown-normal transition hover:bg-orange-normal hover:text-white"
                >
                  Change
                </button>
              }
            />

            <SettingRow
              icon={FiUser}
              title="Active sessions"
              desc="Log out from all other devices"
              action={
                <button
                  type="button"
                  className="inline-flex h-9 cursor-pointer items-center rounded-xl bg-rose-50 px-3.5 text-[12px] font-semibold text-rose-700 transition hover:bg-rose-100"
                >
                  Log out all
                </button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovDashboardSettings;