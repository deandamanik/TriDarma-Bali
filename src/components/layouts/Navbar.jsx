import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import { PiSignInBold, PiSignOutBold } from 'react-icons/pi';
import { FiUser, FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/tridarma-logo.svg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Temple Map', path: '/temple-map' },
  { name: 'Calendar', path: '/calendar' },
  { name: 'Cultural Encyclopedia', path: '/cultural-encyclopedia' },
  { name: 'Report Violations', path: '/report-violations' },
];

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const location = useLocation(); 

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const inactiveLinkClass = `
    relative h-10 px-4 text-[15px] font-semibold flex items-center justify-center leading-none rounded-xl 
    text-brown-dark/70 hover:text-brown-dark transition-all duration-200 z-10
    after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 
    after:w-0 after:h-[2px] after:bg-brown-dark after:transition-all after:duration-300 after:ease-out
    hover:after:w-[60%]
  `.replace(/\s+/g, ' ').trim();

  const activeLinkClass = `
    relative h-10 px-4 text-[15px] font-semibold text-brown-dark flex items-center justify-center 
    leading-none rounded-xl transition-all duration-200 z-10
  `.replace(/\s+/g, ' ').trim();

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.4 }
  };

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0, 
      transition: { type: 'spring', stiffness: 260, damping: 28 } 
    },
    exit: { 
      x: '100%', 
      transition: { type: 'spring', stiffness: 300, damping: 32 } 
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-orange-light border-b border-orange-light font-poppins shadow-xs">
      <div className="max-w-360 mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        
        <div className="flex items-center lg:w-1/4 justify-start h-full">
          <Link to="/" className="flex items-center justify-center h-full">
            <img src={logo} alt="Tridarma Bali Logo" className="h-12 md:h-14 w-auto object-contain" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1 h-full">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path} className="relative flex items-center justify-center">
                  <NavLink to={link.path} className={isActive ? activeLinkClass : inactiveLinkClass}>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeMenuBackground"
                        className="absolute inset-0 bg-orange-normal/50 rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden lg:flex items-center lg:w-1/4 justify-end h-full">
          {!isLoggedIn ? (
            <Link 
              to="/login" 
              className="h-11 px-5 border-2 border-brown-dark bg-orange-light-active text-brown-normal font-bold text-[15px] rounded-full flex items-center justify-center gap-2 hover:bg-orange-normal transition-all duration-200 leading-none whitespace-nowrap"
            >
              <PiSignInBold size={18} />
              <span>Sign In / Sign Up</span>
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <Link 
                to="/profile" 
                className="w-11 h-11 border-2 border-brown-normal rounded-full flex items-center justify-center text-brown-normal hover:bg-orange-light-active transition-all duration-200"
              >
                <FiUser size={22} />
              </Link>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="h-11 px-5 bg-brown-dark text-orange-light font-bold text-[15px] rounded-full flex items-center justify-center gap-2 hover:bg-brown-dark-hover transition-all duration-200 leading-none whitespace-nowrap cursor-pointer"
              >
                <PiSignOutBold size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>

        <div className="flex lg:hidden items-center">
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 text-brown-dark hover:bg-orange-light-active rounded-xl transition-colors cursor-pointer"
          >
            <FiMenu size={28} />
          </button>
        </div>

      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div 
              key="mobile-menu-backdrop"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden will-change-opacity"
            />

            <motion.div 
              key="mobile-menu-drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-orange-light border-l border-orange-light-active z-50 p-6 flex flex-col justify-between lg:hidden shadow-xl will-change-transform"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-orange-light-active mb-6">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="TriDarmaBali Logo" className="h-10 w-auto object-contain" />
                    <span className="text-xl font-bold text-brown-dark tracking-tight">
                      TriDarma<span className="text-orange-normal">Bali</span>
                    </span>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-brown-dark hover:bg-orange-light-active rounded-xl transition-colors cursor-pointer"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                <ul className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <li key={link.path}>
                        <NavLink
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`h-12 px-4 rounded-xl flex items-center text-md font-semibold ${
                            isActive 
                              ? "bg-orange-normal text-orange-light font-bold" 
                              : "text-brown-dark/80 hover:bg-orange-light-active/50 hover:text-brown-dark"
                          }`}
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="pt-6 border-t border-orange-light-active">
                {!isLoggedIn ? (
                  <Link 
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="h-12 w-full border-2 border-brown-dark bg-orange-light-active text-brown-normal font-bold text-[15px] rounded-full flex items-center justify-center gap-2 hover:bg-orange-normal hover:text-orange-light transition-colors duration-200"
                  >
                    <PiSignInBold size={18} />
                    <span>Sign In / Sign Up</span>
                  </Link>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                      className="h-12 w-full border-2 border-brown-normal bg-orange-light-active text-brown-dark font-semibold text-[15px] rounded-xl flex items-center gap-3 px-4 hover:bg-orange-light-active transition-colors duration-200"
                    >
                      <div className="w-8 h-8 border border-brown-dark rounded-full flex items-center justify-center">
                        <FiUser size={16} />
                      </div>
                      <span>My Profile</span>
                    </Link>
                    <button 
                      onClick={() => {
                        setIsLoggedIn(false);
                        setIsOpen(false);
                      }}
                      className="h-12 w-full bg-brown-dark text-orange-light font-bold text-[15px] rounded-full flex items-center justify-center gap-2 hover:bg-brown-dark-hover transition-colors duration-200 cursor-pointer"
                    >
                      <PiSignOutBold size={18} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;