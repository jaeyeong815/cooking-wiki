import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.response.use(
  (res) => res.data.result,
  (err) => {
    if (err.response.status !== 200) {
      throw err.message || new Error(`Request failed with status ${err.response.status}`);
    }
  }
);

export default instance;
