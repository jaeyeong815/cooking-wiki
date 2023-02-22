import { useState } from 'react';

const MyIngredient = () => {
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setIngredient(e.target.value.trim());
  const handleEnteredIngredient = (e: React.MouseEvent<HTMLElement>) => {
    setIngredientList(ingredientList?.concat(ingredient));
    setIngredient('');
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="py-4 text-2xl font-bold text-gray">마이 냉장고</h1>
      <div>
        <input
          className="rounded border-solid border-t-oliveGreen"
          type="text"
          placeholder="재료를 입력해주세요"
          value={ingredient}
          onChange={handleOnChange}
        />
        <button onClick={handleEnteredIngredient}>등록</button>
      </div>
      <ul className="m-8 w-52">
        {ingredientList.map((ingredient) => (
          <li key={ingredient}>
            <span className="inline-block w-40 p-0">{ingredient}</span>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyIngredient;
