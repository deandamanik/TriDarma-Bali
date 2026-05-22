import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const AnimatedNumber = ({ value, isFloat = false }) => {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (isFloat) {
      return latest.toFixed(1);
    }
    return Math.floor(latest).toLocaleString('id-ID');
  });

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5, 
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
};

const HomeStats = () => {
  const statsData = [
    {
      id: 1,
      number: 1717,
      suffix: '+',
      label: 'Registered Temple',
    },
    {
      id: 2,
      number: 210,
      suffix: '',
      label: 'Pawukon Cycle Day',
    },
    {
      id: 3,
      number: 4.2,
      suffix: ' Juta',
      label: 'Tourists/Year',
      isFloat: true,
    },
    {
      id: 4,
      number: 98.6,
      suffix: '%',
      label: 'Report Completed',
      isFloat: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full bg-light font-poppins pt-14 pb-24 md:pt-20 md:pb-36 px-6 md:px-12 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-360 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 text-center"
      >
        {statsData.map((stat) => (
          <div 
            key={stat.id} 
            className="flex flex-col items-center justify-center px-2"
          >
            <h3 className="text-3xl sm:text-4xl md:text-[54px] font-bold text-brown-normal leading-none tracking-tight mb-3">
              <AnimatedNumber value={stat.number} isFloat={stat.isFloat} />
              {stat.suffix}
            </h3>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium text-brown-normal/70 tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-10 md:h-20"
          style={{ transform: 'rotate(180deg)' }} 
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomeStats;