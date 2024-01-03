import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getInitialTheme } from '../utils';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialTheme(),
  reducers: {
    setTheme: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
