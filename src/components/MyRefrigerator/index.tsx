import AddIngredient from '@/components/MyRefrigerator/AddIngredient';
import IngredientList from '@/components/MyRefrigerator/IngredientList';

const MyRefrigerator = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="py-4 text-2xl font-bold text-gray">마이 냉장고</h1>
      <AddIngredient />
      <IngredientList />
    </div>
  );
};

export default MyRefrigerator;
