import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  transformResponse: [
    data => {
      return JSON.parse(data);
    },
  ],
};

const instance = axios.create(config);

export default instance;
