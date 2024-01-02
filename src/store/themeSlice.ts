import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const getInitialState = (): string => localStorage.getItem('theme') ?? 'light';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: getInitialState(),
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
