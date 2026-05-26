import { useState } from 'react';
import { FiUser, FiBell, FiShield, FiInfo } from 'react-icons/fi';
import { operatorUser } from '../../data/operatorDashboardData';

const Toggle = ({ checked, onChange }) => (
    <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition cursor-pointer ${checked ? 'bg-brown-normal' : 'bg-brown-dark/15'
            }`}
        aria-pressed={checked}
    >
        <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${checked ? 'left-[22px]' : 'left-0.5'
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
                <p className="mt-0.5 text-[12px] font-medium text-brown-dark/55">{desc}</p>
            </div>
        </div>
        <div className="shrink-0">{action}</div>
    </div>
);

const OperatorSettings = () => {
    const [emailNotif, setEmailNotif] = useState(true);
    const [ceremonyAlert, setCeremonyAlert] = useState(true);
    const [umkmAlert, setUmkmAlert] = useState(false);

    return (
        <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
            <div className="space-y-5">
                {/* Akses operator info */}
                <div className="rounded-2xl border border-yellow-normal/40 bg-yellow-light/60 p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-yellow-normal text-brown-normal">
                            <FiInfo size={17} />
                        </div>
                        <div>
                            <h3 className="text-[14px] font-bold text-brown-normal">
                                About Operator Access
                            </h3>
                            <p className="mt-1 text-[12.5px] font-medium leading-relaxed text-brown-dark/70">
                                Your account was registered by{' '}
                                <span className="font-bold">{operatorUser.registeredBy}</span> and has limited access to manage temples, visiting hours, ceremony status, and UMKMs in{' '}
                                <span className="font-bold">{operatorUser.region}</span>. For access region changes, please contact the super admin.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Profile */}
                <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
                    <h3 className="text-base font-bold text-brown-normal">Account Profile</h3>

                    <div className="mt-4 flex items-center gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brown-normal text-base font-bold text-orange-light">
                            {operatorUser.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[15px] font-bold text-brown-normal">
                                {operatorUser.name}
                            </p>
                            <p className="text-[12.5px] font-medium text-brown-dark/55">
                                {operatorUser.role} · {operatorUser.region}
                            </p>
                        </div>
                        <button
                            type="button"
                            className="inline-flex h-10 items-center rounded-xl border border-brown-dark/10 bg-white px-4 text-[12.5px] font-semibold text-brown-normal transition hover:bg-orange-light cursor-pointer"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Notifications */}
                <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
                    <h3 className="text-base font-bold text-brown-normal">Notifications</h3>
                    <div className="mt-2 divide-y divide-brown-dark/5">
                        <SettingRow
                            icon={FiBell}
                            title="Email Notifications"
                            desc="Send updates to my email"
                            action={<Toggle checked={emailNotif} onChange={setEmailNotif} />}
                        />
                        <SettingRow
                            icon={FiBell}
                            title="Ceremony Reminders"
                            desc="Notification 1 hour before ceremony starts"
                            action={<Toggle checked={ceremonyAlert} onChange={setCeremonyAlert} />}
                        />
                        <SettingRow
                            icon={FiBell}
                            title="UMKM Verification"
                            desc="Notify when UMKM is approved by super admin"
                            action={<Toggle checked={umkmAlert} onChange={setUmkmAlert} />}
                        />
                    </div>
                </div>

                {/* Keamanan */}
                <div className="rounded-2xl border border-brown-dark/5 bg-white p-5 shadow-[0_1px_2px_rgba(98,43,20,0.04)] sm:p-6">
                    <h3 className="text-base font-bold text-brown-normal">Security</h3>
                    <div className="mt-2 divide-y divide-brown-dark/5">
                        <SettingRow
                            icon={FiShield}
                            title="Change Password"
                            desc="Change periodically for account security"
                            action={
                                <button
                                    type="button"
                                    className="inline-flex h-9 items-center rounded-xl bg-orange-light px-3.5 text-[12px] font-semibold text-brown-normal transition hover:bg-orange-normal hover:text-white cursor-pointer"
                                >
                                    Change
                                </button>
                            }
                        />
                        <SettingRow
                            icon={FiUser}
                            title="Active Sessions"
                            desc="Logout from all other devices"
                            action={
                                <button
                                    type="button"
                                    className="inline-flex h-9 items-center rounded-xl bg-rose-50 px-3.5 text-[12px] font-semibold text-rose-700 transition hover:bg-rose-100 cursor-pointer"
                                >
                                    Logout All
                                </button>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OperatorSettings;