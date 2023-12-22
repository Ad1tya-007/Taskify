import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IList } from '../utils';

const initialState: IList[] = [];

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    setLists: (state, action: PayloadAction<IList[]>) => {
      return action.payload;
    },
  },
});

export const { setLists } = listsSlice.actions;

export default listsSlice.reducer;
