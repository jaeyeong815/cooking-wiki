import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from '@/store/slice/ingredientSlice';

export const store = configureStore({
  reducer: {
    ingredient: ingredientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
