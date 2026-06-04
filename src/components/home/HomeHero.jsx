import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { FiCheckCircle, FiArrowRight, FiMapPin } from 'react-icons/fi';
import heroBg from '../../assets/home/home-hero-bg.png';

const HomeHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const features = [
    'AI Triage',
    'Officially Verified',
    '4 Languages',
    'Free & No Installation',
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden font-poppins px-6 md:px-12">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/50 z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-245auto w-full mx-auto text-center flex flex-col items-center gap-5 -mt-4 md:-mt-16"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-[72px] lg:leading-22 font-bold tracking-tight drop-shadow-lg text-center"
        >
          <span className="text-brown-light">Explore Bali With</span> <br />
          <span className="text-yellow-normal">
            Harmony <span className="text-brown-light"> & </span> Respect
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-lg text-white font-medium max-w-195 relaxed px-2 md:px-0 mt-2"
        >
          TriDarma Bali is an interactive digital guide to help tourists understand customs,
          respect traditions, and contribute to the preservation of Bali's invaluable culture.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-8 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link 
            to="/cultural-encyclopedia" 
            className="h-12 w-full sm:w-auto px-6 bg-orange-normal text-brown-dark font-bold text-[15px] rounded-full flex items-center justify-center gap-2.5 hover:bg-orange-normal-hover transition-all duration-200 cursor-pointer shadow-md decoration-none"
          >
            <span>Start Exploration</span>
            <FiArrowRight size={19} className="shrink-0" />
          </Link>

          <Link 
            to="/temple-map" 
            className="group h-12 w-full sm:w-auto px-6 border-2 border-orange-normal bg-black/20 text-orange-normal font-semibold text-[15px] rounded-full flex items-center justify-center gap-2.5 hover:bg-black/40 hover:border-orange-normal-active transition-all duration-200 cursor-pointer shadow-md backdrop-blur-xs decoration-none"
          >
            <FiMapPin
              size={19}
              className="text-orange-normal group-hover:scale-110 transition-transform duration-200"
            />
            <span>View Temple Map</span>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 md:mt-20 border-t border-orange-normal/15 pt-6 w-full max-w-200 px-6 sm:px-2"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center justify-start gap-2.5 text-white font-medium text-xs sm:text-sm md:text-[15px]"
            >
              <FiCheckCircle size={18} className="text-orange-normal shrink-0" />
              <span className="text-left">{feature}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeHero;