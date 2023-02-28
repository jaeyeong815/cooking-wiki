import { useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { searchRecipe } from '@/pages/api';
import { useState } from 'react';

const AnswerToQuestion = () => {
  const recommandedFoodList = useSelector((state: RootState) => state.recommendList.recommendedFoodList);
  const [selectFood, setSelectFood] = useState('');
  const [recipe, setRecipe] = useState<string[]>();

  const handleSelectFood = (e: React.MouseEvent<HTMLElement>) => setSelectFood(e.currentTarget.id);
  const handleSearchRecipe = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (selectFood.length === 0) alert('재료를 선택해주세요!');

    try {
      const recipe = await searchRecipe(selectFood).then((res) => res.toString());
      setRecipe(recipe.split('\n').filter((el) => el.length));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="py-4 text-2xl font-bold text-gray">마이 냉장고</h1>
      {recommandedFoodList.map((food) => (
        <div key={food}>
          <button className="item-ingredient-btn mb-4" id={food} onClick={handleSelectFood}>
            {food}
          </button>
        </div>
      ))}
      <button onClick={handleSearchRecipe}>선택한 요리 레시피 검색하기</button>
      {recipe?.map((el, idx) => (
        <p key={idx}>{el + '\n'}</p>
      ))}
    </div>
  );
};

export default AnswerToQuestion;
