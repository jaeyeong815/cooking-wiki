import AddIngredient from '@/components/MyRefrigerator/Ingredient/AddIngredient';
import IngredientList from '@/components/MyRefrigerator/Ingredient/IngredientList';
import SelectedIngredientList from '@/components/MyRefrigerator/SelectedIngredient/SelectedList';
import SearchRecipe from '@/components/MyRefrigerator/SelectedIngredient/SearchRecipe';
import AnswerToQuestion from '@/components/AnswerToQuestion';

const MyRefrigerator = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="py-4 text-2xl font-bold text-gray">마이 냉장고</h1>
      <AddIngredient />
      <IngredientList />
      <SelectedIngredientList />
      <SearchRecipe />
      {/* 상태 저장하는 기능 구현하면 답변 컴포넌트는 (다른 페이지로) 없어질 예정 */}
      <AnswerToQuestion />
    </div>
  );
};

export default MyRefrigerator;
