import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShield, FiUsers, FiAward, FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/tridarma-logo.svg';
import heroBg from '../../assets/home/home-hero-bg.png';

const HIGHLIGHTS = [
  { icon: FiShield, text: 'Verified by local customary villages (desa adat)' },
  { icon: FiUsers, text: 'Connect directly with certified local guides' },
  { icon: FiAward, text: 'Travel responsibly and help preserve Bali' },
];

// Panel branding kiri (dipakai bersama oleh Login & Register)
const BrandingPanel = () => (
  <div className="relative hidden lg:flex flex-col items-center justify-center w-full min-h-screen overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-brown-darker/90" />

    <div className="relative z-10 w-full max-w-md px-10">
      <div className="flex items-center gap-3 mb-12">
        <img src={logo} alt="TriDarma Bali" className="h-12 w-auto object-contain" />
        <div className="leading-tight">
          <p className="text-orange-light font-bold text-lg tracking-tight">
            TriDarma<span className="text-orange-normal">Bali</span>
          </p>
          <p className="text-orange-light/50 text-[11px] font-semibold tracking-widest uppercase">
            Cultural Travel Guide
          </p>
        </div>
      </div>

      <h1 className="text-4xl xl:text-5xl xl:leading-[1.1] font-bold text-orange-light tracking-tight">
        Explore Bali with Respect &amp; Wisdom
      </h1>
      <p className="mt-5 text-orange-light/70 text-base leading-relaxed max-w-md">
        Access real-time cultural guidance, temple etiquette, and ceremony
        schedules before and during your visit.
      </p>

      <ul className="mt-10 flex flex-col gap-5">
        {HIGHLIGHTS.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-xl bg-orange-normal/15 flex items-center justify-center text-orange-normal shrink-0">
              <Icon size={18} />
            </span>
            <span className="text-orange-light/90 font-semibold text-sm">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Layout pembungkus: kiri branding, kanan form
const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2 bg-white font-poppins">
      <BrandingPanel />

      <div className="flex flex-col items-center justify-center px-6 sm:px-10 py-12 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {children}

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brown-normal/50 hover:text-brown-normal transition"
          >
            <FiArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;