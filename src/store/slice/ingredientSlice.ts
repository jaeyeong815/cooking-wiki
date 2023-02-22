import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IngredientList {
  ingredientList: string[];
}

const initialState: IngredientList = {
  ingredientList: [],
};

export const ingredientSlice = createSlice({
  name: 'ingredientList',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      state.ingredientList.push(action.payload);
    },
  },
});

export const { addList } = ingredientSlice.actions;
export default ingredientSlice.reducer;
