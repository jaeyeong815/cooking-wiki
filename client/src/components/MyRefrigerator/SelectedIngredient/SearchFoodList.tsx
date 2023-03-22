import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchButton from '@/components/UI/SearchButton';
import type { RootState } from '@/store';
import { addRecommendedFoodToList, saveRecipe } from '@/store/slice/recommendSlice';
import { hasValue } from '@/utils/hasValue';

const SearchFoodList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();
  const router = useRouter();

  const hasSelectList = hasValue(selectList);

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let foodList: string[] = [];
      setTimeout(() => {
        foodList = ['돼지고기 김치찌개', '김치계란말이', '김치전', '김치볶음밥', '참치김치주먹밥'];
        dispatch(addRecommendedFoodToList(foodList));
        setIsLoading(false);
        dispatch(saveRecipe([]));
        router.push('/answer');
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  };

  return <>{hasSelectList && <SearchButton loading={isLoading} onClick={handleSearch} text="요리 검색하기" />}</>;
};

export default SearchFoodList;
