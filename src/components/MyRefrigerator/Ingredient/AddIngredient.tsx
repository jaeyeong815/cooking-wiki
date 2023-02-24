import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '@/store/slice/ingredientListSlice';

const AddIngredient = () => {
  const [ingredient, setIngredient] = useState<string>('');
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => setIngredient(e.target.value.trim());
  const handleEnteredIngredient = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addList(ingredient));
    setIngredient('');
  };

  return (
    <form onSubmit={handleEnteredIngredient}>
      <input type="text" placeholder="재료를 입력해주세요" value={ingredient} onChange={handleOnChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default AddIngredient;
