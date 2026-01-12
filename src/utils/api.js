import axios from 'axios';
import { store } from '../redux/store.js';
import { fetchSiteSettings } from '../redux/slices/siteSettingsSlice.js';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (Optional: add token)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // JWT token
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor: refresh site settings on 200 success from site-settings API
api.interceptors.response.use(
  (response) => {
    if (response.config.url.includes('site-settings')) {
      store.dispatch(fetchSiteSettings()); // update redux store automatically
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export default api;
