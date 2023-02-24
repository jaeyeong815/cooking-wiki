import instance from '@/pages/api/instance/axiosInstance';

export const foodRecommend = (selectList: string) => instance.post('/food', { ingredient: selectList });
export const searchRecipe = (food: string) => instance.post('/recipe', { food });
