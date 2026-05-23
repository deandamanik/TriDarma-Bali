import { Link } from 'react-router-dom';
import { FiClock, FiExternalLink } from 'react-icons/fi';

const ArticleCard = ({ article }) => {
  const { id, category, title, excerpt, readTime, image } = article;
  const to = `/cultural-encyclopedia/${id}`;

  return (
    <article className="group bg-white rounded-3xl border border-brown-normal/15 overflow-hidden shadow-sm flex flex-col h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-brown-normal/30">
      {/* Thumbnail + badge kategori (klik untuk baca) */}
      <Link to={to} className="relative block w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 bg-orange-light text-orange-dark text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {category}
        </span>
      </Link>

      {/* Konten */}
      <div className="flex flex-col grow p-5 md:p-6">
        <Link to={to}>
          <h3 className="text-md md:text-lg font-bold text-brown-normal leading-snug tracking-tight hover:text-orange-dark transition-colors">
            {title}
          </h3>
        </Link>
        <p className="mt-2.5 text-sm text-brown-normal/70 font-medium leading-relaxed line-clamp-4">
          {excerpt}
        </p>

        {/* Footer kartu */}
        <div className="mt-auto pt-4">
          <div className="border-t border-brown-normal/10 pt-3.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs text-brown-normal/50 font-medium">
              <FiClock size={14} />
              {readTime} minute read
            </span>
            <Link
              to={to}
              className="flex items-center gap-1.5 text-sm font-bold text-brown-normal hover:text-orange-dark transition cursor-pointer"
            >
              Read
              <FiExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;