import AddIngredient from '@/components/MyRefrigerator/Ingredient/AddIngredient';
import IngredientList from '@/components/MyRefrigerator/Ingredient/IngredientList';
import SelectedIngredientList from '@/components/MyRefrigerator/SelectedIngredient/SelectedList';

const MyRefrigerator = () => {
  return (
    <div className="flex flex-col items-center">
      <AddIngredient />
      <IngredientList />
      <SelectedIngredientList />
    </div>
  );
};

export default MyRefrigerator;
