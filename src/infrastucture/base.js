import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_API_URL;

const API = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    Authorization: `${localStorage.getItem('token') || ''}`
  }
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status !== 401) {
      throw err;
    }

    if (typeof err.response.data.error.name !== 'undefined') {
      if (err.response.data.error.name === 'TokenExpiredError') {
        localStorage.clear();
        throw err;
      }
    }
  }
);

export default API;
