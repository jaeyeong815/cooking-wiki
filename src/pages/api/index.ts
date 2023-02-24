import instance from '@/pages/api/instance/axiosInstance';

export const searchRequest = (selectList: string) => instance.post('/food', { ingredient: selectList });
