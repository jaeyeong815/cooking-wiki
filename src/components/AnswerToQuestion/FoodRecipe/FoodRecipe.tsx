import { useSelector } from 'react-redux';
import Link from 'next/link';
import { RootState } from '@/store';

const FoodRecipe = () => {
  const recipe = useSelector((state: RootState) => state.recommendList.foodRecipe);

  return (
    <>
      {recipe.length > 0 && (
        <>
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
                el[1] === '.' ? (
                  <div key={el}>
                    <br />
                    <p>{el + '\n'}</p>
                  </div>
                ) : null
              )}
            </div>
          </div>
          <p className="mt-10 text-gray">다른 요리가 궁금하다면 재선택 후 검색해보세요</p>
          <Link href="/">
            <span className="text-lightOrange italic">OR 다시 재료 고르러 가기 →</span>
          </Link>
        </>
      )}
    </>
  );
};

export default FoodRecipe;
