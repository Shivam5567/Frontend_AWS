import axios from 'axios';

// Use environment variable for backend URL
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
});

// Add a new user
export const addUser = (userData) => API.post('/add', userData);

// List all users
export const listUsers = () => API.get('/list');
