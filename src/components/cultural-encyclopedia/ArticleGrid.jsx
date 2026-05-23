import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import ArticleCard from './ArticleCard';

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 18 },
  },
};

const ArticleGrid = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 gap-3">
        <div className="w-14 h-14 rounded-full bg-orange-light-active flex items-center justify-center text-brown-normal/60">
          <FiSearch size={24} />
        </div>
        <p className="text-md font-semibold text-brown-normal">No articles found</p>
        <p className="text-sm text-brown-normal/60 max-w-sm">
          Coba ubah kata kunci pencarian atau pilih kategori lain.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {articles.map((article) => (
        <motion.div key={article.id} variants={cardVariants}>
          <ArticleCard article={article} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ArticleGrid;