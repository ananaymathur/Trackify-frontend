
import axios from 'axios';


const API_ENDPOINT = process.env.REACT_APP_API_URL

// Create an Axios instance
const API = axios.create({
  baseURL: API_ENDPOINT, // Replace with your actual API URL
});

// Request interceptor to add the JWT token to the headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401 errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle 401 errors (unauthorized) by logging out the user
      localStorage.removeItem('token'); // Clear the token
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default API;
