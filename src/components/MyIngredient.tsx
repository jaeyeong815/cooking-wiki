import { useState } from 'react';

const MyIngredient = () => {
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const [ingredient, setIngredient] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setIngredient(e.target.value.trim());
  const handleEnteredIngredient = (e: React.MouseEvent<HTMLElement>) => {
    setIngredientList(ingredientList?.concat(ingredient));
    setIngredient('');
  };

  const handleSearch = async(e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredient: `${ingredientList[0]}, 돼지고기` }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      console.log(data.result)
    } catch(error) {
      console.error(error);
    }
  }

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
      <button onClick={handleSearch}>검색하기</button>
    </div>
  );
};

export default MyIngredient;
