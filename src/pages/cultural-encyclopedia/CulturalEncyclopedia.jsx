import { useState, useMemo } from "react";
import EncyclopediaHero from "../../components/cultural-encyclopedia/EncyclopediaHero";
import CategoryFilter from "../../components/cultural-encyclopedia/CategoryFilter";
import ArticleGrid from "../../components/cultural-encyclopedia/ArticleGrid";
import BliDarmaChat from "../../components/cultural-encyclopedia/BliDarmaChat";
import { ARTICLES } from "../../data/articles";

const CulturalEncyclopedia = () => {
  const [activeCategory, setActiveCategory] = useState('Show All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Filter (kategori + pencarian) lalu sorting
  const visibleArticles = useMemo(() => {
    let list = ARTICLES;

    if (activeCategory !== 'Show All') {
      list = list.filter((a) => a.category === activeCategory);
    }

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }

    const sorted = [...list];
    if (sortBy === 'az') sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy === 'shortest') sorted.sort((a, b) => a.readTime - b.readTime);
    else if (sortBy === 'longest') sorted.sort((a, b) => b.readTime - a.readTime);

    return sorted;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <EncyclopediaHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <section className="max-w-360 mx-auto px-6 md:px-12 py-12 md:py-16">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          articleCount={visibleArticles.length}
        />

        <div className="mt-8 md:mt-10">
          <ArticleGrid articles={visibleArticles} />
        </div>
      </section>

      {/* Floating AI chat widget */}
      <BliDarmaChat />
    </div>
  );
};

export default CulturalEncyclopedia;