import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { selectedFood } from '@/store/slice/recommendSlice';

const RecommendFoodList = () => {
  const recommandedFoodList = useSelector((state: RootState) => state.recommendList.recommendedFoodList);
  const dispatch = useDispatch();

  const handleSelectFood = (e: React.MouseEvent<HTMLElement>) => dispatch(selectedFood(e.currentTarget.id));

  return (
    <>
      {recommandedFoodList.map((food) => (
        <div key={food}>
          <button className="item-ingredient-btn mb-4" id={food} onClick={handleSelectFood}>
            {food}
          </button>
        </div>
      ))}
    </>
  );
};

export default RecommendFoodList;
