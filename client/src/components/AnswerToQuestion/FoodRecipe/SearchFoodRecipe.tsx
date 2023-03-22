import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchButton from '@/components/UI/SearchButton';
import type { RootState } from '@/store';
import { saveRecipe } from '@/store/slice/recommendSlice';

const recipe = [
  '- 계란 3개',
  '- 김치 1/2컵',
  '- 물 1/4컵',
  '- 밀가루 2큰술',
  '- 식용유 약간',

  '양념재료',

  '- 간장 1큰술',
  '- 설탕 1/2큰술',
  '- 식초 1/2큰술',
  '- 다진 마늘 1작은술',
  '- 참기름 1작은술',
  '- 깨소금 약간',

  '1. 계란 3개를 그릇에 넣고 풀어서 볼에 담습니다.',
  '2. 김치를 적당한 크기로 다져서 볼에 넣고 밀가루와 물을 넣고 잘 섞어줍니다.',
  '3. 볼에 있는 김치반죽을 계란풀에 넣고 잘 섞어줍니다.',
  '4. 팬에 식용유를 두르고 중약불에서 노릇하게 구워줍니다.',
  '5. 양념재료를 모두 섞어서 소스를 만들어냅니다.',
  '6. 말이를 자르고 소스와 함께 곁들여 맛있게 즐겨보세요.',
];

const SearchFoodRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const selectedFood = useSelector((state: RootState) => state.recommendList.selectedFood);
  const dispatch = useDispatch();

  const handleSearchRecipe = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      setTimeout(() => {
        dispatch(saveRecipe(recipe));
        setIsLoading(false);
      }, 2500);
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
