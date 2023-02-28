import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { deleteListInItem, selectItem } from '@/store/slice/ingredientListSlice';

const IngredientList = () => {
  const ingredientList = useSelector((state: RootState) => state.ingredientList.ingredientList);
  const dispatch = useDispatch();

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => dispatch(selectItem(e.currentTarget.id));

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => dispatch(deleteListInItem(e.currentTarget.id));

  return (
    <ul className="my-20">
      {ingredientList.length === 0 && (
        <div className="flex items-center">
          <span className="text-xl">재료가 텅 비어있어요</span>
          <img src="/sad.svg" className="w-12 h-12 inline-block" />
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
  );
};

export default IngredientList;
