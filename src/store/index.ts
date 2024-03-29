import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import listsReducer from './listSlice';
import chosenListReducer from './chosenListSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    task: tasksReducer,
    list: listsReducer,
    chosenList: chosenListReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
