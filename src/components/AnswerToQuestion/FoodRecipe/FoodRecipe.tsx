import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const FoodRecipe = () => {
  const recipe = useSelector((state: RootState) => state.recommendList.foodRecipe);

  return (
    <>
      {recipe.length > 0 && (
        <div className="grid grid-cols-2 mx-10 md:mx-48">
          <div className="justify-self-center">
            <p className="font-extrabold text-center">재료</p>
            {recipe.map((el) =>
              el.includes('-') ? (
                <div key={el}>
                  <br />
                  <p>{el.replace('-', '☑︎') + '\n'}</p>
                </div>
              ) : null
            )}
          </div>
          <div className="justify-self-center">
            <p className="font-extrabold text-center">레시피</p>
            {recipe.map((el) =>
              el.includes('.') ? (
                <div key={el}>
                  <br />
                  <p>{el + '\n'}</p>
                </div>
              ) : null
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FoodRecipe;
