import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import listsReducer from './listSlice';

export const store = configureStore({
  reducer: {
    task: tasksReducer,
    list: listsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
