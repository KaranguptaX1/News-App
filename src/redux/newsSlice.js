import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '1f54b92347bf4df882255f1800c5d2e9';

export const fetchArticles = createAsyncThunk('news/fetchArticles', async ({ category, page }) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
    params: {
      category,
      page,
      apiKey: API_KEY
    }
  });
  return response.data.articles;
});

export const fetchCategories = createAsyncThunk('news/fetchCategories', async () => {
  const response = await axios.get(`https://newsapi.org/v2/sources`, {
    params: {
      apiKey: API_KEY
    }
  });
  const categories = [...new Set(response.data.sources.map(source => source.category))];
  return categories;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    categories: [],
    selectedCategory: '',
    loading: false,
    error: null,
    page: 1
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  }
});

export const { setSelectedCategory, setPage } = newsSlice.actions;
export default newsSlice.reducer;
