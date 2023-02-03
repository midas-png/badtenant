import { $authHost } from './index';

export const rateUser = async (from_id, to_id, text, rate) => {
  const { data } = await $authHost.post('api/comments/', {
    from_id,
    to_id,
    text,
    rate,
  });
  return data;
};
