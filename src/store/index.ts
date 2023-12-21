import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

export const store = configureStore({
  reducer: {
    task: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
