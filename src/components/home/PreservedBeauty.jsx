import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import image1 from '../../assets/home/image-1.png';
import image2 from '../../assets/home/image-2.png';
import image3 from '../../assets/home/image-3.png';
import image4 from '../../assets/home/image-1.png'; 
import image5 from '../../assets/home/image-2.png'; 

const PreservedBeauty = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const galleryItems = [
    { id: 1, img: image1 },
    { id: 2, img: image2 },
    { id: 3, img: image3 },
    { id: 4, img: image4 },
    { id: 5, img: image5 },
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
      className="w-full bg-white font-poppins pt-24 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        
        <div className={`text-center mb-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-brown-normal mb-2.5 tracking-tight">
            The Beauty of Bali That Needs to be Preserved
          </h2>
          <p className="text-xs sm:text-sm text-[#e19e59] font-medium tracking-wide">
            Priceless cultural heritage that is our shared responsibility
          </p>
        </div>

        <div className={`w-full wrapper-preserved-swiper transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-16 scale-95'
        }`}>
          <Swiper
            modules={[EffectCoverflow, Pagination, Autoplay]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={2}
            slidesPerView={'auto'}
            loop={true}
            speed={900}
            touchRatio={1.2}
            autoplay={{
              delay: 3500, 
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -40,   
              depth: 200,   
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination',
            }}
            className="pt-6 pb-12"
          >
            {galleryItems.map((item) => (
              <SwiperSlide 
                key={item.id} 
                className="w-[65vw] sm:w-75 md:w-100"
              >
                <div className="w-full h-72 sm:h-85 md:h-112.5 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white transition-transform duration-500">
                  <img
                    src={item.img}
                    alt={`Bali Beauty ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={`custom-swiper-pagination flex justify-center items-center gap-2 mt-2 transition-opacity duration-1000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} />

      </div>
    </section>
  );
};

export default PreservedBeauty;