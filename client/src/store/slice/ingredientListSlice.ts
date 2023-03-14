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
    deleteListInItem: (state, action: PayloadAction<string>) => {
      state.ingredientList = state.ingredientList.filter((ingredient) => ingredient !== action.payload);
    },
    selectItem: (state, action: PayloadAction<string>) => {
      state.selectList.push(action.payload);
    },
    deleteSelectListInItem: (state, action) => {
      state.selectList = state.selectList.filter((ingredient) => ingredient !== action.payload);
    },
  },
});

export const { addList, deleteListInItem, selectItem, deleteSelectListInItem } = ingredientListSlice.actions;
export default ingredientListSlice.reducer;
