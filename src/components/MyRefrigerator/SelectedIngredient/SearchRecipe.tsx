import { useDispatch, useSelector } from 'react-redux';
import { foodRecommend } from '@/pages/api';
import type { RootState } from '@/store';
import { addRecommendedFoodToList } from '@/store/slice/recommendSlice';
import { useRouter } from 'next/router';

const SearchRecipe = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (selectList.length === 0) alert('재료를 선택해주세요!');

    try {
      const foodList = await foodRecommend(selectList.join(',')).then((res) => res.toString().trim());
      dispatch(addRecommendedFoodToList(foodList.split('\n').map((food) => food.slice(3))));
      router.push('/answer');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className="mt-14 btn-primary" onClick={handleSearch}>
      위 재료로 만들 수 있는 요리 검색하기
    </button>
  );
};

export default SearchRecipe;
