import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://business-tecsoftware.azurewebsites.net/api',
});
