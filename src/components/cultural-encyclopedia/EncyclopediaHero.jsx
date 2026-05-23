import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

// Background hero. Design memakai foto Barong/penari gelap.
// Untuk sementara pakai asset yang sudah ada agar build jalan —
// ganti dengan foto Barong kamu (mis. import dari assets/encyclopedia/...).
import heroBg from '../../assets/cultural-encyclopedia/encyclopedia-hero.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const EncyclopediaHero = ({ searchQuery, onSearchChange }) => {
  return (
    <section className="relative w-full overflow-hidden font-poppins">
      {/* Background image + dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-360 mx-auto px-6 md:px-12 py-16 sm:py-20 md:py-24 flex flex-col items-center text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.05] font-bold tracking-tight drop-shadow-lg"
        >
          <span className="text-white">Culture </span>
          <span className="text-yellow-normal">&amp;</span>
          <br className="hidden sm:block" />
          <span className="text-white"> Customs Guide</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-5 text-sm sm:text-base md:text-lg text-yellow-normal/90 font-medium max-w-2xl"
        >
          Learn about Balinese traditions, rules and local wisdom before visiting.
        </motion.p>

        {/* Search bar */}
        <motion.div
          variants={itemVariants}
          className="mt-8 w-full max-w-2xl"
        >
          <div className="relative">
            <FiSearch
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-brown-normal/50"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search for cultural articles, temple rules, traditional ceremonies..."
              className="w-full h-13 md:h-14 pl-13 pr-5 rounded-full bg-white text-sm md:text-base text-brown-dark placeholder:text-brown-normal/40 shadow-lg outline-none focus:ring-2 focus:ring-orange-normal/60 transition"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EncyclopediaHero;