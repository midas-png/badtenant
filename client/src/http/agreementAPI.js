import { $authHost, $host } from './index';

export const createDeal = async (
  id_tenant,
  id_landlord,
  date_from,
  date_to,
) => {
  const { data } = await $authHost.post('api/agreement', {
    id_tenant,
    id_landlord,
    date_from,
    date_to,
  });
  return data;
};

export const fetchDeals = async () => {
  const { data } = await $host.get('api/agreement');
  return data;
};

export const getDealRelevance = async (id_tenant, id_landlord) => {
  const { data } = await $host.get(
    `api/agreement/id_ten/${id_tenant}/id_land/${id_landlord}`,
  );
  return data;
};

export const updateStatus = async (id, newStatus) => {
  const { data } = await $authHost.patch(`api/agreement/updateStatus/${id}`, {
    newStatus,
  });
  return data;
};

export const getTenantDeals = async (id_tenant) => {
  const { data } = await $host.get(
    `api/agreement/get_tenant_deals/${id_tenant}`,
  );
  return data;
};

export const getLandlordDeals = async (id_landlord) => {
  const { data } = await $host.get(
    `api/agreement/get_landlord_deals/${id_landlord}`,
  );
  return data;
};
