import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/ingredientStore';
import { deleteListInItem, selectItem } from '@/store/slice/ingredientListSlice';

const IngredientList = () => {
  const ingredientList = useSelector((state: RootState) => state.ingredientList.ingredientList);
  const dispatch = useDispatch();

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => dispatch(selectItem(e.currentTarget.id));

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => dispatch(deleteListInItem(e.currentTarget.id));

  return (
    <ul className="m-8 w-60">
      {ingredientList.map((ingredient) => (
        <li key={ingredient}>
          <span className="inline-block w-40 p-0">{ingredient}</span>
          <button id={ingredient} onClick={handleSelect}>
            선택
          </button>
          <button id={ingredient} onClick={handleDelete}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
