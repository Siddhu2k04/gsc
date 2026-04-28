import axios from 'axios';

const api = axios.create({
  baseURL: 'https://supplychain-xkjw.vercel.app/api/',
});

export default api;
