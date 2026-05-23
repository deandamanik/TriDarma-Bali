import ArticleCard from './ArticleCard';

const RelatedArticles = ({ articles = [] }) => {
  if (articles.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-brown-normal tracking-tight mb-8">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;