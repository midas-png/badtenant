import { $authHost, $host } from './index';

export const createOffer = async (fromId, toId, dateFrom, dateTo, text) => {
  const { data } = await $authHost.post('api/offer/offer', {
    fromId,
    toId,
    dateFrom,
    dateTo,
    text,
  });
  return data;
};

export const fetchAllOffers = async () => {
  const { data } = await $host.get('api/offer/offers');
  return data;
};

export const fetchUserOffers = async (id) => {
  const { data } = await $host.get(`api/offer/offers/${id}`);
  return data;
};

export const deleteOneOffers = async (id) => {
  const { data } = await $host.get(`api/offer/deleteOffer/${id}`);
  return data;
};

export const updateStatus = async (id, newStatus) => {
  const { data } = await $authHost.patch(`api/offer/updateStatus/${id}`, {
    newStatus,
  });
  return data;
};
