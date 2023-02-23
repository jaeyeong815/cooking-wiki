import instance from '@/pages/api/instance/instance';

export const searchRequest = (selectList: string) => instance.post('/generate', { ingredient: selectList });
