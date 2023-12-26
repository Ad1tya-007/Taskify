import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = 'HOME';

export const chosenListSlice = createSlice({
  name: 'chosenList',
  initialState,
  reducers: {
    setChosenList: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setChosenList } = chosenListSlice.actions;

export default chosenListSlice.reducer;
