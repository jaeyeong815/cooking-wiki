import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { deleteSelectListInItem } from '@/store/slice/ingredientListSlice';

const SelectIngredientList = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => dispatch(deleteSelectListInItem(e.currentTarget.id));

  return (
    <ul>
      {selectList.map((ingredient) => (
        <li key={ingredient}>
          <span className="inline-block w-40 p-0">{ingredient}</span>
          <button id={ingredient} onClick={handleDelete}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SelectIngredientList;
