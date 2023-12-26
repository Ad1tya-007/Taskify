import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IList } from '../utils';

const getInitialState = (): IList[] =>
  JSON.parse(localStorage.getItem('lists') ?? '[]');

export const listsSlice = createSlice({
  name: 'lists',
  initialState: getInitialState(),
  reducers: {
    setLists: (state, action: PayloadAction<IList[]>) => {
      return action.payload;
    },
  },
});

export const { setLists } = listsSlice.actions;

export default listsSlice.reducer;
