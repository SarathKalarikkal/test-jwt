// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1/users',
  withCredentials: true, 
});

// Add access token to all requests
API.interceptors.request.use((config) => {
debugger
  const token = localStorage.getItem('accessToken');

  if (token) config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});

export default API;
