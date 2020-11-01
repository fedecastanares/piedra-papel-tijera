import axios from 'axios';
import {getToken, deauthenticateUser} from './auth';

// `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BASE_URL}`

export const axiosApiInstance = axios.create({baseURL: `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}`});

axiosApiInstance.interceptors.request.use(
  async config => {
    const token = getToken();
    config.headers = { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
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

