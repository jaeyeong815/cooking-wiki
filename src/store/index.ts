import { configureStore } from '@reduxjs/toolkit';
import ingredientListReducer from '@/store/slice/ingredientListSlice';

export const store = configureStore({
  reducer: {
    ingredientList: ingredientListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
