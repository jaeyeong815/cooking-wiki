import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/store/ingredientStore';
import { deleteListInItem, selectItem } from '@/store/slice/ingredientListSlice';

const IngredientList = () => {
  const ingredientList = useSelector((state: RootState) => state.ingredientList.ingredientList);
  const dispatch = useDispatch();

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => dispatch(selectItem(e.currentTarget.id));

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => dispatch(deleteListInItem(e.currentTarget.id));

  const handleSearch = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredient: `${ingredientList[0]}, 돼지고기` }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      console.log(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
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
      <button onClick={handleSearch}>검색하기</button>
    </>
  );
};

export default IngredientList;
