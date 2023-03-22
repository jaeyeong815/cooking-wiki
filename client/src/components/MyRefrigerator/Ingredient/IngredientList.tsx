import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/store';
import { deleteListInItem, selectItem } from '@/store/slice/ingredientListSlice';
import { hasValue } from '@/utils/hasValue';

const IngredientList = () => {
  const ingredientList = useSelector((state: RootState) => state.ingredientList.ingredientList);
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();

  const hasIngredientList = hasValue(ingredientList);
  const hasSelectList = hasValue(selectList);

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => dispatch(selectItem(e.currentTarget.id));

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => dispatch(deleteListInItem(e.currentTarget.id));

  return (
    <>
      <ul className="my-10 overflow-y-auto h-64 px-10">
        {!hasIngredientList && (
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center">
              <span className="text-xl">재료가 텅 비어있어요</span>
              <img src="/sad.svg" className="w-12 h-12 inline-block" />
            </div>
            <div className="w-70 shadow-xl mt-8 py-3 flex flex-col items-center rounded-md bg-yellow/10">
              <p className="font-bold text-xl">!필독!</p>
              <p className="mx-5">현재 보고계시는 페이지에는 mock 데이터가 연결되어있습니다.</p>
              <p className="mx-5">재료 입력, 선택은 가능하지만 추천 요리와 요리 레시피가 고정되어있습니다.</p>
              <p className="mx-5">이 점 참고하고 테스트 해주시면 감사하겠습니다 !</p>
            </div>
          </div>
        )}
        {ingredientList.map((ingredient) => (
          <li className="mb-3 flex items-center" key={ingredient}>
            <span id={ingredient} onClick={handleSelect} className="item-ingredient">
              {ingredient}
            </span>
            <button className="btn-option-del" id={ingredient} onClick={handleDelete}>
              삭제
            </button>
          </li>
        ))}
      </ul>
      {hasIngredientList && !hasSelectList && (
        <div>
          <span>재료를 선택해주시면 요리를 추천해드릴게요!</span>
          <img className="w-10 h-10 inline-block" src="/search.svg" />
        </div>
      )}
    </>
  );
};

export default IngredientList;
