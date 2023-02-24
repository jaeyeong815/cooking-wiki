import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

const AnswerToQuestion = () => {
  const recommandedFoodList = useSelector((state: RootState) => state.recommendList.recommendedFoodList);

  const handleSelectFood = (e: React.MouseEvent<HTMLElement>) => console.log(e.currentTarget.id);

  return (
    <>
      {recommandedFoodList.map((food) => (
        <div key={food}>
          <button id={food} onClick={handleSelectFood}>
            {food}
          </button>
        </div>
      ))}
    </>
  );
};

export default AnswerToQuestion;
