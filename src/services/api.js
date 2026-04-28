import axios from 'axios';

const api = axios.create({
  baseURL: 'https://supplychain-p614.onrender.com/api/',
});

export default api;