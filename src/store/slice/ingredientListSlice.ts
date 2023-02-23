import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IngredientList {
  ingredientList: string[];
  selectList: string[];
}

const initialState: IngredientList = {
  ingredientList: [],
  selectList: [],
};

export const ingredientListSlice = createSlice({
  name: 'ingredientList',
  initialState,
  reducers: {
    addList: (state, action: PayloadAction<string>) => {
      state.ingredientList.push(action.payload);
    },
    selectItem: (state, action: PayloadAction<string>) => {
      state.selectList.push(action.payload);
    },
  },
});

export const { addList, selectItem } = ingredientListSlice.actions;
export default ingredientListSlice.reducer;
