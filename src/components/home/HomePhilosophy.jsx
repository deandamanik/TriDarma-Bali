import { motion } from 'framer-motion';
import parahyanganImg from '../../assets/home/parahyangan.png';
import pawonganImg from '../../assets/home/pawongan.png';
import palemahanImg from '../../assets/home/palemahan.png';

const HomePhilosophy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 20 },
    },
  };

  const philosophies = [
    {
      id: 1,
      title: 'Parahyangan',
      subtitle: 'Harmony with God',
      desc: 'Respect sacred rituals, procedures for entering temples, and taboos that apply in Bali\'s sacred areas.',
      img: parahyanganImg,
    },
    {
      id: 2,
      title: 'Pawongan',
      subtitle: 'Harmony with Humans',
      desc: 'Maintain harmony with local communities through understanding customs, manners, and respect for traditions.',
      img: pawonganImg,
    },
    {
      id: 3,
      title: 'Palemahan',
      subtitle: 'Harmony with Nature',
      desc: 'Preserve Bali\'s environment and ecosystem by not damaging, littering, or exploiting natural resources.',
      img: palemahanImg,
    },
  ];

  return (
    <section className="w-full bg-white font-poppins py-12 md:py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-400 mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-300 mb-10 md:mb-16" 
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-bold text-brown-normal tracking-tight mb-4 lg:whitespace-nowrap">
            Tri Hita Karana: Three Sources of Happiness
          </h2>
          <p className="text-sm md:text-base text-orange-normal font-normal px-4">
            The philosophy of Balinese local wisdom is the foundation of harmonious 
            community life and a guide for every tourist who visits.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap items-center justify-center gap-6 lg:gap-8 w-full"
        >
          {philosophies.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className={`relative w-full max-w-md h-60 rounded-3xl overflow-hidden shadow-sm border-2 border-orange-normal/40 ${
                item.id === 3 ? 'md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0' : ''
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />

              <span className="absolute top-4 right-6 text-[44px] font-black text-brown-normal select-none font-poppins">
                {item.id}
              </span>

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
                <h3 className="text-xl font-bold text-brown-normal mb-0.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-brown-normal mb-3 tracking-wide">
                  {item.subtitle}
                </p>
                <p className="text-[12.5px] font-medium text-brown-normal/85 leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HomePhilosophy;