import { Link } from 'react-router-dom';
import ArticleCard from '../cultural-encyclopedia/ArticleCard';
import { ARTICLES } from '../../data/articles';
import { MY_BOOKMARKS } from '../../data/profile';

const SavedArticles = () => {
  const saved = ARTICLES.filter((a) => MY_BOOKMARKS.includes(a.id));

  if (saved.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-brown-normal/15 shadow-sm p-10 text-center">
        <p className="text-brown-normal/60 text-sm">
          You haven&apos;t saved any articles yet.
        </p>
        <Link
          to="/cultural-encyclopedia"
          className="mt-4 inline-block h-10 px-5 leading-10 bg-brown-normal text-orange-light font-bold text-sm rounded-full hover:bg-brown-normal-hover transition"
        >
          Browse Encyclopedia
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {saved.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default SavedArticles;