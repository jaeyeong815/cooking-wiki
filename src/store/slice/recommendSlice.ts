import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Recommended {
  recommendedFoodList: string[];
  selectedFood: string;
  foodRecipe: string[];
}

const initialState: Recommended = {
  recommendedFoodList: [],
  selectedFood: '',
  foodRecipe: [],
};

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    addRecommendedFoodToList: (state, action: PayloadAction<string[]>) => {
      state.recommendedFoodList = action.payload;
    },
    selectedFood: (state, action: PayloadAction<string>) => {
      state.selectedFood = action.payload;
    },
    saveRecipe: (state, action: PayloadAction<string[]>) => {
      state.foodRecipe = action.payload;
    },
  },
});

export const { addRecommendedFoodToList, selectedFood, saveRecipe } = recommendSlice.actions;
export default recommendSlice.reducer;
