import { useState } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import templeMapImg from '../../assets/home/feature-temple-map.png';
import calendarImg from '../../assets/home/feature-calendar.png';
import encyclopediaImg from '../../assets/home/feature-encyclopedia.png';
import reportImg from '../../assets/home/feature-report.png';

const HomeFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      id: 1,
      title: 'Interactive Temple Map',
      desc: 'Find real-time information on visitor status, active ceremonies, and local MSMEs around more than 1,700 temples in Bali.',
      linkText: 'Open Features',
      img: templeMapImg,
    },
    {
      id: 2,
      title: 'Traditional Ceremony Calendar',
      desc: 'Plan your visit with an integrated calendar that combines the Gregorian, Saka, and Pawukon Balinese systems.',
      linkText: 'Open Features',
      img: calendarImg,
    },
    {
      id: 3,
      title: 'Cultural Encyclopedia',
      desc: 'Learn about Balinese dress codes, etiquette, the meaning of ceremonies, and local wisdom before visiting sacred areas.',
      linkText: 'Open Features',
      img: encyclopediaImg,
    },
    {
      id: 4,
      title: 'Report Violations',
      desc: 'Report cultural violations directly to the Badung Tourism Office. Your identity is fully protected.',
      linkText: 'Open Features',
      img: reportImg,
    },
  ];

  const handleNext = () => {
    if (currentIndex < features.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full bg-white font-poppins overflow-hidden">
      <div className="w-full bg-orange-normal text-white pt-16 pb-16 px-6 sm:px-12 md:px-20 lg:px-24 rounded-t-[100px] sm:rounded-t-[140px] md:rounded-t-[200px]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-2.5">
                Platform Exploration
              </h2>
              <p className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
                The four pillars of TriDarma Bali services for a meaningful journey
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-white text-[#e19e59] shadow-sm transition ${
                  currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/90 active:scale-95'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                disabled={currentIndex >= features.length - 3}
                className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-white text-[#e19e59] shadow-sm transition ${
                  currentIndex >= features.length - 3 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/90 active:scale-95'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full overflow-x-auto md:overflow-hidden no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 mb-12">
            <motion.div 
              className="flex flex-row gap-6 w-max md:w-full"
              animate={{ 
                x: typeof window !== 'undefined' && window.innerWidth >= 768 
                  ? `calc(-${currentIndex * 33.333}% - ${currentIndex * 16}px)` 
                  : '0px'
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            >
              {features.map((item) => (
                <div 
                  key={item.id} 
                  className="w-70 sm:w-77.5 md:w-[calc(33.333%-16px)] shrink-0"
                >
                  <FeatureCard
                    title={item.title}
                    desc={item.desc}
                    linkText={item.linkText}
                    img={item.img}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-start">
            <button className="border-2 border-white/90 text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-full hover:bg-white hover:text-[#e19e59] active:scale-95 transition duration-200 flex items-center gap-2">
              <span>See all features</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;