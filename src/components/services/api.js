import axios from 'axios';

// Clé API TMDb
const API_KEY = '4d573f050fa0fd762b5ce8c196f2ca9e'; // Remplace par ta clé API
const BASE_URL = 'https://api.themoviedb.org/3';

// Instance Axios
const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;

