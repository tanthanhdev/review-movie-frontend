import axios, {  } from 'axios';
// AxiosRequestConfig, AxiosResponse
const configuration = {
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

const instance = axios.create(configuration);

instance.interceptors.request.use((config) => {
  config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
  return config;
});

// instance.interceptors.response.use(
//   (config) => config,
//   async error => {
//     if (error.response.status === 401 && error.config && !error.config.isRetry) {
//       error.config.isRetry = true;
//       try {
//         const response = await axios.post<AxiosResponse>(
//           `${process.env.REACT_APP_API_DOMAIN}/api/auth/refresh/`,
//           {
//             refresh: localStorage.getItem('refreshToken'),
//           },
//         );
//         localStorage.setItem('access_token', response?.data?.access);
//         return instance.request(error.config);
//       } catch (e) {
//         console.log('error', error?.request?.response?.message);
//       }
//     }
//     throw error;
//   },
// );

export default instance;
