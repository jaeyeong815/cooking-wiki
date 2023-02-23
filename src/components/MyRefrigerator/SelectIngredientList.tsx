import { useSelector } from 'react-redux';
import { RootState } from '@/store/ingredientStore';

const SelectIngredientList = () => {
  const selectList = useSelector((state: RootState) => state.ingredientList.selectList);

  return (
    <ul>
      {selectList.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
      ))}
    </ul>
  );
};

export default SelectIngredientList;
