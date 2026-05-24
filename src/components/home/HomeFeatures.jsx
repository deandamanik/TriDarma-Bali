import { useState, useRef } from 'react';
import FeatureCard from './FeatureCard';
import templeMapImg from '../../assets/home/feature-temple-map.png';
import calendarImg from '../../assets/home/feature-calendar.png';
import encyclopediaImg from '../../assets/home/feature-encyclopedia.png';
import reportImg from '../../assets/home/feature-report.png';

const HomeFeatures = () => {
  const containerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const features = [
    { id: 1, title: 'Interactive Temple Map', desc: 'Find real-time information on visitor status, active ceremonies, and local MSMEs around more than 1,700 temples in Bali.', linkText: 'Open Features', img: templeMapImg },
    { id: 2, title: 'Traditional Ceremony Calendar', desc: 'Plan your visit with an integrated calendar that combines the Gregorian, Saka, and Pawukon Balinese systems.', linkText: 'Open Features', img: calendarImg },
    { id: 3, title: 'Cultural Encyclopedia', desc: 'Learn about Balinese dress codes, etiquette, the meaning of ceremonies, and local wisdom before visiting sacred areas.', linkText: 'Open Features', img: encyclopediaImg },
    { id: 4, title: 'Report Violations', desc: 'Report cultural violations directly to the Badung Tourism Office. Your identity is fully protected.', linkText: 'Open Features', img: reportImg },
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      if (clientWidth > 0) {
        const index = Math.round(scrollLeft / (clientWidth * 0.75)); 
        setActiveDot(Math.min(index, features.length - 1));
      }
    }
  };

  const scrollDesktop = (direction) => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = clientWidth / 3;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full bg-white font-poppins overflow-hidden">
      <div className="w-full bg-orange-normal text-white pt-10 pb-12 md:pt-16 md:pb-16 px-5 sm:px-12 md:px-20 lg:px-24 rounded-t-[40px] md:rounded-t-[160px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 md:mb-12 gap-6 text-center md:text-left">
            <div className="max-w-2xl w-full">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-1.5 md:mb-2.5">
                Platform Exploration
              </h2>
              <p className="text-[11px] sm:text-sm text-white/80 font-medium tracking-wide max-w-md md:max-w-none mx-auto md:mx-0">
                The four pillars of TriDarma Bali services for a meaningful journey
              </p>
            </div>
            
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button 
                onClick={() => scrollDesktop('left')} 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#e19e59] shadow-sm hover:bg-white/90 active:scale-95 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={() => scrollDesktop('right')} 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#e19e59] shadow-sm hover:bg-white/90 active:scale-95 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-6"
          >
            {features.map((item) => (
              <div 
                key={item.id} 
                className="snap-center md:snap-start w-[75vw] sm:w-75 md:w-[calc(33.333%-16px)] shrink-0"
              >
                <FeatureCard {...item} />
              </div>
            ))}
          </div>

          <div className="flex md:hidden justify-center items-center gap-2 mt-2">
            {features.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeDot === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;