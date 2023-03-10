import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = 'http://217.151.229.239/';

const $host = axios.create({
  baseURL,
});

const $authHost = axios.create({
  baseURL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${Cookies.get('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
