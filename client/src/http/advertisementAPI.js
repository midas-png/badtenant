import { $host } from './index';

export const getAdvertisements = async (page) => {
  const { data } = await $host.get(`api/user/users?page=${page}`);
  return data;
};

export const getAdvertisement = async (id) => {
  const { data } = await $host.get(`api/user/user/${id}`);
  return data;
};
