import AddIngredient from '@/components/MyRefrigerator/Ingredient/AddIngredient';
import IngredientList from '@/components/MyRefrigerator/Ingredient/IngredientList';
import SelectedIngredientList from '@/components/MyRefrigerator/SelectedIngredient/SelectedList';
import SearchRecipe from '@/components/MyRefrigerator/SelectedIngredient/SearchFoodList';

const MyRefrigerator = () => {
  return (
    <div className="flex flex-col items-center">
      <AddIngredient />
      <IngredientList />
      <SelectedIngredientList />
      <SearchRecipe />
    </div>
  );
};

export default MyRefrigerator;
