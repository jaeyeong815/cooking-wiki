import { useDispatch, useSelector } from 'react-redux';
import { searchRequest } from '@/pages/api';
import type { RootState } from '@/store';
import { addRecommendedFoodToList } from '@/store/slice/recommendSlice';

const SearchRecipe = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (selectList.length === 0) alert('재료를 선택해주세요!');

    try {
      const foodList = await searchRequest(selectList.join(',')).then((res) => res.toString().trim());
      dispatch(addRecommendedFoodToList(foodList.split('\n').map((food) => food.slice(3))));
    } catch (err) {
      console.log(err);
    }
  };

  return <button onClick={handleSearch}>검색하기</button>;
};

export default SearchRecipe;
