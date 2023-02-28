import AddIngredient from '@/components/MyRefrigerator/Ingredient/AddIngredient';
import IngredientList from '@/components/MyRefrigerator/Ingredient/IngredientList';
import SelectedIngredientList from '@/components/MyRefrigerator/SelectedIngredient/SelectedList';
import SearchRecipe from '@/components/MyRefrigerator/SelectedIngredient/SearchRecipe';

const MyRefrigerator = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="py-4 text-2xl font-bold text-gray">마이 냉장고</h1>
      <AddIngredient />
      <IngredientList />
      <SelectedIngredientList />
      <SearchRecipe />
    </div>
  );
};

export default MyRefrigerator;
