import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { foodRecommend } from '@/pages/api';
import type { RootState } from '@/store';
import { addRecommendedFoodToList } from '@/store/slice/recommendSlice';
import SearchButton from '@/components/UI/SearchButton';

const SearchRecipe = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      const foodList = await foodRecommend(selectList.join(',')).then((res) => res.toString().trim());
      dispatch(addRecommendedFoodToList(foodList.split('\n').map((food) => food.slice(3))));
      router.push('/answer');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>{selectList.length > 0 && <SearchButton onClick={handleSearch} text="위 재료로 만들 수 있는 요리 검색하기" />}</>
  );
};

export default SearchRecipe;
