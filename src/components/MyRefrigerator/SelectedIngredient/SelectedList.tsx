import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store';
import { deleteSelectListInItem } from '@/store/slice/ingredientListSlice';

const SelectIngredientList = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => dispatch(deleteSelectListInItem(e.currentTarget.id));

  return (
    <>
      <hr className="border w-5/6 border-dashed " />
      <p className="mt-20 font-bold text-xl">선택된 재료</p>
      <ul className="my-6">
        {selectList.map((ingredient) => (
          <li className="mb-3 flex items-center" key={ingredient}>
            <span className="inline-block item-ingredient">{ingredient}</span>
            <button className="btn-option-del" id={ingredient} onClick={handleDelete}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SelectIngredientList;
