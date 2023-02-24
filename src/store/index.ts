import { configureStore } from '@reduxjs/toolkit';
import ingredientListReducer from '@/store/slice/ingredientListSlice';
import recommendReducer from '@/store/slice/recommendSlice';

export const store = configureStore({
  reducer: {
    ingredientList: ingredientListReducer,
    recommendList: recommendReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
