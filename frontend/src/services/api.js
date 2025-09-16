import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('aurolanka-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const productAPI = {
  getAllProducts: () => api.get('/products'),
  getProductById: (id) => api.get(`/products/${id}`),
};

export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  signup: (userData) => api.post('/auth/signup', userData),
};

export const adminAPI = {
  // Get all products with admin privileges
  getProducts: () => api.get('/admin/products'),
  
  // Create new product
  createProduct: (productData) => api.post('/admin/products', productData),
  
  // Update product
  updateProduct: (id, productData) => api.put(`/admin/products/${id}`, productData),
  
  // Delete product
  deleteProduct: (id) => api.delete(`/admin/products/${id}`)
};

export default api;
