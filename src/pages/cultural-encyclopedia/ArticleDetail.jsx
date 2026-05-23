import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiClock, FiArrowLeft, FiMessageCircle } from 'react-icons/fi';
import ArticleBody from '../../components/cultural-encyclopedia/ArticleBody';
import RelatedArticles from '../../components/cultural-encyclopedia/RelatedArticles';
import BliDarmaChat from '../../components/cultural-encyclopedia/BliDarmaChat';
import { ARTICLES } from '../../data/articles';
import { slugify } from '../../utils/slugify';

const ArticleDetail = () => {
  const { articleId } = useParams();
  const article = ARTICLES.find((a) => String(a.id) === String(articleId));

  // Selalu mulai dari atas saat berpindah artikel
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  // Artikel tidak ditemukan
  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 font-poppins gap-4 bg-white">
        <h1 className="text-2xl md:text-3xl font-bold text-brown-normal">Article not found</h1>
        <p className="text-brown-normal/60 max-w-sm">
          The article you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/cultural-encyclopedia"
          className="mt-2 h-11 px-5 bg-brown-normal text-orange-light font-bold text-sm rounded-full inline-flex items-center gap-2 hover:bg-brown-normal-hover transition"
        >
          <FiArrowLeft size={16} />
          Back to Encyclopedia
        </Link>
      </div>
    );
  }

  // Daftar isi dari heading
  const headings = article.content
    .filter((b) => b.type === 'heading')
    .map((b) => ({ text: b.text, id: slugify(b.text) }));

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Artikel terkait: prioritaskan kategori sama, lalu lengkapi dengan lainnya
  const sameCategory = ARTICLES.filter(
    (a) => a.id !== article.id && a.category === article.category
  );
  const others = ARTICLES.filter(
    (a) => a.id !== article.id && a.category !== article.category
  );
  const related = [...sameCategory, ...others].slice(0, 3);

  return (
    <div className="w-full bg-white font-poppins">
      <div className="max-w-360 mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="pt-8 md:pt-12 pb-6 md:pb-8">
          <Link
            to="/cultural-encyclopedia"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brown-normal/70 hover:text-brown-normal transition mb-6 md:mb-8"
          >
            <FiArrowLeft size={16} />
            Back to Encyclopedia
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl"
          >
            <span className="inline-block bg-orange-light text-orange-dark text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[56px] lg:leading-[1.08] font-bold text-brown-normal tracking-tight">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center gap-2 text-sm text-brown-normal/50 font-medium">
              <FiClock size={15} />
              {article.readTime} minute read
            </div>
          </motion.div>
        </div>

        {/* Gambar utama - lebar penuh container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full h-64 sm:h-80 md:h-[440px] lg:h-[500px] rounded-3xl overflow-hidden shadow-sm border border-brown-normal/10"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Isi + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 py-10 md:py-14">
          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <ArticleBody content={article.content} />
          </motion.div>

          {/* Sidebar (sticky) - tampil di layar besar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              {headings.length > 0 && (
                <nav className="bg-orange-light rounded-3xl p-6 border border-brown-normal/10">
                  <h3 className="text-xs font-bold text-brown-normal/60 uppercase tracking-wider mb-4">
                    In This Article
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          onClick={(e) => handleTocClick(e, h.id)}
                          className="text-sm text-brown-normal/70 hover:text-brown-normal font-medium leading-snug transition block"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* CTA Bli Darma */}
              <div className="bg-brown-normal rounded-3xl p-6 text-orange-light">
                <p className="text-base font-bold leading-snug">
                  Have a question about Balinese customs?
                </p>
                <p className="text-sm text-orange-light/70 mt-1.5 leading-relaxed">
                  Ask Bli Darma, your AI cultural assistant, anytime.
                </p>
                <button
                  onClick={() => window.dispatchEvent(new Event('open-bli-darma'))}
                  className="mt-4 h-10 px-4 bg-orange-normal text-brown-dark font-bold text-sm rounded-full inline-flex items-center gap-2 hover:bg-orange-normal-hover transition cursor-pointer"
                >
                  <FiMessageCircle size={16} />
                  Ask Bli Darma
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related */}
        <div className="pb-16 md:pb-24">
          <RelatedArticles articles={related} />
        </div>
      </div>

      {/* Floating AI chat widget */}
      <BliDarmaChat />
    </div>
  );
};

export default ArticleDetail;