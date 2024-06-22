import axios from 'axios';

const API_KEY = '1f54b92347bf4df882255f1800c5d2e9';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category, page) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      category,
      page,
      apiKey: API_KEY
    }
  });
  return response.data.articles;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/sources`, {
    params: {
      apiKey: API_KEY
    }
  });
  const categories = [...new Set(response.data.sources.map(source => source.category))];
  return categories;
};
