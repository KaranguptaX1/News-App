import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, fetchCategories, setSelectedCategory, setPage } from '../redux/newsSlice';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { articles, categories, selectedCategory, loading, error, page } = useSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchArticles({ category: selectedCategory, page }));
  }, [dispatch, selectedCategory, page]);

  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">News Application</h1>
      </header>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onChange={category => dispatch(setSelectedCategory(category))} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ArticleList articles={articles} />
      )}
      <Pagination page={page} onPageChange={newPage => dispatch(setPage(newPage))} />
    </div>
  );
};

export default HomePage;
