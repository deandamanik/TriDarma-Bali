import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa6';
import logo from '../../assets/tridarma-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-orange-light font-poppins pt-12 md:pt-16 pb-8 border-t border-orange-light-active">
      <div className="max-w-360 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 pb-12">

          <div className="col-span-1 md:col-span-4 flex flex-col gap-4 md:gap-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="TriDarmaBali Logo" className="h-10 w-auto object-contain" />
              <span className="text-xl font-bold text-brown-dark tracking-tight">
                TriDarma<span className="text-orange-normal">Bali</span>
              </span>
            </div>
            <p className="text-[15px] text-brown-dark/80 leading-relaxed max-w-[320px]">
              Learn about the culture before visiting, respect the rituals taking place, and help preserve Bali.
            </p>
            <div className="flex items-center gap-3 mt-1 md:mt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-orange-light-active text-brown-dark rounded-xl flex items-center justify-center hover:bg-orange-normal hover:text-orange-light transition-all duration-200"
              >
                <FiInstagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-orange-light-active text-brown-dark rounded-xl flex items-center justify-center hover:bg-orange-normal hover:text-orange-light transition-all duration-200"
              >
                <FiTwitter size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-orange-light-active text-brown-dark rounded-xl flex items-center justify-center hover:bg-orange-normal hover:text-orange-light transition-all duration-200"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          <div className="hidden md:block md:col-span-1"></div>

          <div className="col-span-1 md:col-span-2 flex flex-col gap-3 md:gap-4 mt-2 md:mt-0">
            <h4 className="text-lg font-bold text-brown-dark">Services</h4>
            <ul className="flex flex-col gap-2.5 text-[15px] font-medium text-brown-dark/70">
              <li><Link to="/" className="hover:text-brown-dark transition-colors">Home</Link></li>
              <li><Link to="/temple-map" className="hover:text-brown-dark transition-colors">Temple Map</Link></li>
              <li><Link to="/calendar" className="hover:text-brown-dark transition-colors">Calendar</Link></li>
              <li><Link to="/cultural-encyclopedia" className="hover:text-brown-dark transition-colors">Cultural Encyclopedia</Link></li>
              <li><Link to="/report-violations" className="hover:text-brown-dark transition-colors">Report Violations</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col gap-3 md:gap-4">
            <h4 className="text-lg font-bold text-brown-dark">About Us</h4>
            <ul className="flex flex-col gap-2.5 text-[15px] font-medium text-brown-dark/70">
              <li><Link to="/faq" className="hover:text-brown-dark transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-brown-dark transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 flex flex-col gap-3 md:gap-4">
            <h4 className="text-lg font-bold text-brown-dark">Contact</h4>
            <ul className="flex flex-col gap-3.5 text-[14px] font-medium text-brown-dark/70">
              <li className="flex items-start gap-3">
                <FiMapPin size={18} className="text-brown-dark mt-0.5 shrink-0" />
                <span className="leading-tight">Jl. Kampus Bukit Jimbaran Computer Science Building, Bali</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={17} className="text-brown-dark shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail size={17} className="text-brown-dark shrink-0" />
                <span>tridarmabali@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-dark/10 pt-6 text-center">
          <p className="text-xs font-medium text-brown-dark/60 tracking-wide">
            &copy; 2026 TriDarma Bali. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;