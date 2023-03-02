import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.response.use(
  (res) => res.data.result,
  (err) => {
    throw err.response.data.error.message || new Error(`Request failed with status ${err.response.status}`);
  }
);

export default instance;
