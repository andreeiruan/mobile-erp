import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.210.135.168:3333/api',
  validateStatus: (status) => status < 500,
});

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('@erpamb:token');

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

export default api;
