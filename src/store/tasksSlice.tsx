import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../utils';

const initialState: ITask[] = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      return action.payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
