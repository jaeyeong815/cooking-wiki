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
    <>
      {recommandedFoodList.map((food) => (
        <div key={food}>
          <button id={food} onClick={handleSelectFood}>
            {food}
          </button>
        </div>
      ))}
      {recipe?.map((el) => el + '\n')}
      <button onClick={handleSearchRecipe}>검색</button>
    </>
  );
};

export default AnswerToQuestion;
