import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addList } from '@/store/slice/ingredientListSlice';

const AddIngredient = () => {
  const [ingredient, setIngredient] = useState<string>('');
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setIngredient(e.target.value.trim());
  const handleEnteredIngredient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ingredient.length === 0) {
      alert('재료를 등록해주세요!');
      return;
    }
    dispatch(addList(ingredient));
    setIngredient('');
  };

  return (
    <form onSubmit={handleEnteredIngredient}>
      <input
        className="w-80 placeholder:italic placeholder:text-slate-400 bg-white rounded py-2 px-9 shadow-md focus:outline-none focus:border-yellow focus:ring-yellow focus:ring-1"
        type="text"
        placeholder="냉장고에 있는 재료를 입력해주세요!"
        value={ingredient}
        onChange={handleOnChange}
      />
      <button className="btn-primary ml-5" type="submit">
        등록
      </button>
    </form>
  );
};

export default AddIngredient;
