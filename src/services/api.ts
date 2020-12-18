import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.201.36.52:3333/api',
  validateStatus: (status) => status < 500,
});

export default api;
