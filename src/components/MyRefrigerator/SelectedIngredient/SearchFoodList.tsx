import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchButton from '@/components/UI/SearchButton';
import { questionGPT } from '@/pages/api';
import type { RootState } from '@/store';
import { addRecommendedFoodToList, saveRecipe } from '@/store/slice/recommendSlice';
import { hasValue } from '@/utils/hasValue';

const SearchFoodList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();
  const router = useRouter();

  const hasSelectList = hasValue(selectList);
  const question = `${selectList.join(',')}가 모두 사용되는 요리 레시피 5개 이름 알려줘`;

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const foodList = await questionGPT(question).then((res) => res.toString().trim());
      dispatch(addRecommendedFoodToList(foodList.split('\n').map((food: string | unknown[]) => food.slice(3))));
      setIsLoading(false);
      dispatch(saveRecipe([]));
      router.push('/answer');
    } catch (err) {
      console.log(err);
    }
  };

  return <>{hasSelectList && <SearchButton loading={isLoading} onClick={handleSearch} text="요리 검색하기" />}</>;
};

export default SearchFoodList;
