import { useState, useEffect } from 'react';
import heroBg from '../../assets/report-violations/report-page.png';
import { FiCheckCircle } from 'react-icons/fi';

const ReportHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className="w-full h-[60vh] relative flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${heroBg})` }}
    >
      <div className={`max-w-4xl mx-auto z-10 transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Cultural Violation Report
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-orange-normal font-semibold tracking-wide mb-8 max-w-2xl mx-auto">
          Report violations of customs and culture directly to the Bali Province Tourism Office.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-white text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-orange-normal text-md" /> Identity protected
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-orange-normal text-md" /> Response Within 24 Hours
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-orange-normal text-md" /> Documented Reports
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportHero;