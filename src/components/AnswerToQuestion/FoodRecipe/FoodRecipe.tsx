import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const FoodRecipe = () => {
  const recipe = useSelector((state: RootState) => state.recommendList.foodRecipe);

  return (
    <>
      {recipe?.map((el, idx) => (
        <p key={idx}>{el + '\n'}</p>
      ))}
    </>
  );
};

export default FoodRecipe;
