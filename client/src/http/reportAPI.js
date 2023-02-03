import { $authHost } from './index';

export const sendReport = async (report_reason, from_id, to_id, text) => {
  const { data } = await $authHost.post('api/report/report', {
    report_reason,
    from_id,
    to_id,
    text,
  });
  return data;
};
