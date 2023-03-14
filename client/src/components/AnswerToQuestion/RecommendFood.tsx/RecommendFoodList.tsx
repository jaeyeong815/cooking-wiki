import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/store';
import { selectedFood } from '@/store/slice/recommendSlice';

const RecommendFoodList = () => {
  const [select, setSelect] = useState('');
  const recommandedFoodList = useSelector((state: RootState) => state.recommendList.recommendedFoodList);
  const dispatch = useDispatch();

  const handleSelectFood = (e: React.MouseEvent<HTMLElement>) => {
    setSelect(e.currentTarget.id);
    dispatch(selectedFood(e.currentTarget.id));
  };

  return (
    <>
      {!select && recommandedFoodList.length > 0 && (
        <p className="mb-10 text-gray">요리를 선택하시면 레시피를 알려드려요!</p>
      )}
      {recommandedFoodList.map((food) => (
        <div key={food}>
          <button
            className={`item-ingredient-btn mb-4 ${food === select && 'bg-lightRed'}`}
            id={food}
            onClick={handleSelectFood}
          >
            {food}
          </button>
        </div>
      ))}
      {!select && recommandedFoodList.length === 0 && (
        <Link href="/" className="text-center">
          <p className="text-lg">앗! 선택된 재료가 없어요!</p>
          <p className="underline decoration-wavy text-lightRed">재료 선택하러가기 →</p>
        </Link>
      )}
    </>
  );
};

export default RecommendFoodList;
