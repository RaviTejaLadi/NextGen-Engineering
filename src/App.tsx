import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { SearchResults } from './components/SearchResults';
import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryPage } from './pages/CategoryPage';
import { ArticlePage } from './pages/ArticlePage';
import { categories } from './data/categories';
import DynamicBlogRenderer from './features/DynamicBlogRenderer/components/DynamicBlogRenderer';
// import { icEngineSchema } from "./data/mech/icEngineSchema";
import { test } from './data/mech/test';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const searchResults = searchQuery.trim()
    ? categories
        .flatMap((cat) => cat.topics)
        .filter(
          (topic) =>
            topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            topic.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
            topic.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : [];

  return (
    <ThemeProvider defaultTheme="system" storageKey="me-theme">
      <Header onSearchChange={handleSearchChange} searchQuery={searchQuery} />
      <DynamicBlogRenderer schema={test} />

      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8 md:px-6">
          {searchQuery.trim() ? (
            <SearchResults results={searchResults} query={searchQuery} />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/article/:articleId" element={<ArticlePage />} />
            </Routes>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
