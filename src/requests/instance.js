import axios from 'axios';
import {getToken, deauthenticateUser} from './auth';

export const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async config => {
    const token = getToken();
    config.headers = { 
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    deauthenticateUser();
    return;
  }
  return Promise.reject(error);
});

