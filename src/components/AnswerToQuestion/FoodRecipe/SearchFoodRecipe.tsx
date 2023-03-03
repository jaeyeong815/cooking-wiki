import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchButton from '@/components/UI/SearchButton';
import { searchRecipe } from '@/pages/api';
import type { RootState } from '@/store';
import { saveRecipe } from '@/store/slice/recommendSlice';

const SearchFoodRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const selectedFood = useSelector((state: RootState) => state.recommendList.selectedFood);
  const dispatch = useDispatch();

  const handleSearchRecipe = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const recipe = await searchRecipe(selectedFood).then((res) => res.toString());
      dispatch(saveRecipe(recipe.split('\n').filter((el) => el.length)));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {selectedFood && (
        <SearchButton loading={isLoading} onClick={handleSearchRecipe} text="선택한 요리 레시피 검색하기" />
      )}
      {isLoading && <p className="text-gray text-sm">조금만 기다려주세요...</p>}
    </>
  );
};

export default SearchFoodRecipe;
