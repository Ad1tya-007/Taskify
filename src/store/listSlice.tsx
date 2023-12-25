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
    addToList: (state, action: PayloadAction<IList>) => {
      state.push(action.payload);
    },
  },
});

export const { setLists, addToList } = listsSlice.actions;

export default listsSlice.reducer;
