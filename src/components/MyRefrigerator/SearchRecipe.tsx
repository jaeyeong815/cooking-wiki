import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { searchRequest } from '@/pages/api';
import { addRecommendedFoodToList } from '@/store/slice/recommendSlice';

const SearchRecipe = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const recommandedFoodList = useSelector((state: RootState) => state.recommendList.recommendedFoodList);
  const dispatch = useDispatch();

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (selectList.length === 0) alert('재료를 선택해주세요!');

    const response = await searchRequest(selectList.join(',')).then((res) => res.toString().trim());
    dispatch(addRecommendedFoodToList(response.split('\n')));
  };

  return (
    <>
      <button onClick={handleSearch}>검색하기</button>
      <p>결과</p>
      {recommandedFoodList.map((food) => (
        <p key={food}>{food}</p>
      ))}
    </>
  );
};

export default SearchRecipe;
