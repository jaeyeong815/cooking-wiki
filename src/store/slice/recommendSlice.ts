import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Recommended {
  recommendedFoodList: string[];
}

const initialState: Recommended = {
  recommendedFoodList: [],
};

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    addRecommendedFoodToList: (state, action: PayloadAction<string[]>) => {
      state.recommendedFoodList = action.payload;
    },
  },
});

export const { addRecommendedFoodToList } = recommendSlice.actions;
export default recommendSlice.reducer;
