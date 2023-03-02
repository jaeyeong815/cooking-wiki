import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchButton from '@/components/UI/SearchButton';
import { foodRecommend } from '@/pages/api';
import type { RootState } from '@/store';
import { addRecommendedFoodToList } from '@/store/slice/recommendSlice';

const SearchFoodList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const foodList = await foodRecommend(selectList.join(',')).then((res) => res.toString().trim());
      dispatch(addRecommendedFoodToList(foodList.split('\n').map((food) => food.slice(3))));
      setIsLoading(false);
      router.push('/answer');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>{selectList.length > 0 && <SearchButton loading={isLoading} onClick={handleSearch} text="요리 검색하기" />}</>
  );
};

export default SearchFoodList;
