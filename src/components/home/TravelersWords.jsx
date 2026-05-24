import { useEffect, useRef, useState } from 'react';

const TravelersWords = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      stars: 5,
      text: `"TriDarma Bali membantu saya memahami aturan pura sebelum berkunjung. Pengalaman yang jauh lebih bermakna!"`,
      name: "Sarah M.",
      origin: "dari Australia",
      initials: "SM",
      flag: "🇦🇺"
    },
    {
      id: 2,
      stars: 5,
      text: `"Finally, a platform that explains Balinese culture respectfully and completely. Danke!"`,
      name: "Maria L.",
      origin: "dari Germany",
      initials: "ML",
      flag: "🇩🇪"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white font-poppins pt-18 pb-28 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#e19e59]/5 rounded-full blur-3xl -translate-x-12 -translate-y-12 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3d200a]/5 rounded-full blur-3xl translate-x-20 translate-y-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">

        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brown-normal mb-4 tracking-tight">
            Traveler's Words
          </h2>
          <div className="w-16 h-1 bg-[#e19e59] mx-auto mb-4 rounded-full opacity-80" />
          <p className="text-sm sm:text-base text-[#e19e59] font-medium tracking-wide">
            Real experiences from TriDarma Bali users
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border border-orange-normal/20 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full transition-all duration-500 ease-out hover:shadow-xl hover:border-[#e19e59]/60 hover:-translate-y-2 relative overflow-hidden group"
              style={{
                transitionDelay: isVisible ? `${idx * 200}ms` : '0ms',
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="absolute -top-4 -right-2 text-gray-100/70 text-8xl font-serif select-none pointer-events-none group-hover:text-[#e19e59]/10 transition-colors duration-500">
                ”
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.stars)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 sm:w-5 text-amber-500 transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed italic mb-8 relative">
                  {item.text}
                </p>
              </div>

              <div className="relative z-10">
                <div className="w-full h-px bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 mb-5" />
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#e19e59]/20 to-[#3d200a]/10 flex items-center justify-center text-sm font-bold text-brown-normal shadow-inner border border-[#e19e59]/30">
                      {item.initials}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md border border-gray-50">
                      {item.flag}
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-brown-normal leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">
                      {item.origin}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TravelersWords;