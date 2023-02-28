import RecommendFoodList from '@/components/AnswerToQuestion/\bRecommendFood.tsx/RecommendFoodList';
import FoodRecipe from '@/components/AnswerToQuestion/FoodRecipe/FoodRecipe';
import SearchFoodRecipe from '@/components/AnswerToQuestion/FoodRecipe/SearchFoodRecipe';

const AnswerToQuestion = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="py-4 text-2xl font-bold text-gray">마이 냉장고</h1>
      <RecommendFoodList />
      <SearchFoodRecipe />
      <FoodRecipe />
    </div>
  );
};

export default AnswerToQuestion;
