import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IngredientList {
  ingredientList: string[];
}

const initialState: IngredientList = {
  ingredientList: [],
};

export const ingredientListSlice = createSlice({
  name: 'ingredientList',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      state.ingredientList.push(action.payload);
    },
  },
});

export const { addList } = ingredientListSlice.actions;
export default ingredientListSlice.reducer;
