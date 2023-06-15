import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import axios from 'axios';

export const signup = async (
  first_name,
  last_name,
  email,
  password,
  location,
  description,
  img,
  role,
) => {
  const { data } = await $host.post('api/user/signup', {
    first_name,
    last_name,
    email,
    password,
    location,
    description,
    img,
    role,
  });
  return data;
};

export const signin = async (email, password) => {
  const { data } = await $host.post('api/user/signin', { email, password });
  Cookies.set('token', data.token, { expires: 2 });
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('api/user/auth');
  Cookies.set('token', data.token, { expires: 2 });
  return jwt_decode(data.token);
};

export const update = async (
  id,
  first_name,
  last_name,
  location,
  description,
) => {
  const { data } = await $authHost.patch(`api/user/update/${id}`, {
    first_name,
    last_name,
    location,
    description,
  });
  return data;
};

export const updatePassword = async (
  id,
  oldPassword,
  newPassword,
  confirmPassword,
) => {
  const { data } = await $authHost.patch(`api/user/update_password/${id}`, {
    oldPassword,
    newPassword,
    confirmPassword,
  });
  return data;
};

export const getImage = async (id) => {
  const { data } = await $authHost.get(`api/user/user_image/${id}`);
  return data;
};

export const getTotalNumberOfUsers = async () => {
  const { data } = await $authHost.get('api/user/users_number');
  return data;
};

export const updateUserRating = async (to_id, rate) => {
  const { data } = await $authHost.patch('api/user/update_rating', {
    to_id,
    rate,
  });
  return data;
};

export const fetchFiltered = async (
  nameLike,
  limit,
  page,
  searchableRole,
  ratingRange,
  sortType,
) => {
  const { data } = await $host.get(
    `api/user/filter?nameLike=${nameLike}&limit=${limit}&page=${page}&searchableRole=${searchableRole}&ratingRange=${ratingRange}&sortType=${sortType}`,
  );
  return data;
};

export const fetchSearched = async (name, limit, page) => {
  const { data } = await $host.get(
    `api/user/search?name=${name}&limit=${limit}&page=${page}`,
  );
  return data;
};

export const sendResetLink = async (email) => {
  const { data } = await $host.post('api/user/reset_password', { email });
  return data;
};

export const resetTokenVerify = async (userId, token, disableRedirect) => {
  const { data } = await $host.get(
    `api/user/reset_password/${userId}/${token}?disableRedirect=${disableRedirect}`,
  );
  return data;
};

export const resetUserPassword = async (userId, password) => {
  const { data } = await $host.post('api/user/reset_user_password', {
    userId,
    password,
  });
  return data;
};

export const getUserImage = async (userId) => {
  const { data } = await axios.get(
    `http://217.151.229.239:5000/api/user/user_image/${userId}`,
  );
  return data;
};
