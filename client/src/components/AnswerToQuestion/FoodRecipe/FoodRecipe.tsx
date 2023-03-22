import Link from 'next/link';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { hasValue } from '@/utils/hasValue';

const FoodRecipe = () => {
  const recipe = useSelector((state: RootState) => state.recommendList.foodRecipe);
  const hasRecipe = hasValue(recipe);

  return (
    <>
      {hasRecipe && (
        <>
          <div className="grid grid-cols-2 mx-10 md:mx-48 my-6">
            <div className="justify-self-center">
              <p className="font-extrabold text-center">재료</p>
              {recipe.map((el) => {
                if (el === '양념재료') {
                  return (
                    <div key={el}>
                      <br />
                      <p style={{ textAlign: 'center' }}>
                        <strong>양념재료</strong>
                      </p>
                    </div>
                  );
                }
                if (el.includes('-')) {
                  return (
                    <div key={el}>
                      <br />
                      <p>{el.replace('-', '☑︎') + '\n'}</p>
                    </div>
                  );
                }
              })}
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
