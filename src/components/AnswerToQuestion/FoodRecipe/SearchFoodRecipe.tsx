import { useDispatch, useSelector } from 'react-redux';
import { searchRecipe } from '@/pages/api';
import type { RootState } from '@/store';
import { saveRecipe } from '@/store/slice/recommendSlice';
import SearchButton from '@/components/UI/SearchButton';

const SearchFoodRecipe = () => {
  const selectedFood = useSelector((state: RootState) => state.recommendList.selectedFood);
  const dispatch = useDispatch();

  const handleSearchRecipe = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (selectedFood.length === 0) alert('재료를 선택해주세요!');

    try {
      const recipe = await searchRecipe(selectedFood).then((res) => res.toString());
      dispatch(saveRecipe(recipe.split('\n').filter((el) => el.length)));
    } catch (err) {
      console.log(err);
    }
  };

  return <>{selectedFood && <SearchButton onClick={handleSearchRecipe} text="선택한 요리 레시피 검색하기" />}</>;
};

export default SearchFoodRecipe;
