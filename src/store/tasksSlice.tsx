import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../utils';

const getInitialState = (): ITask[] =>
  JSON.parse(localStorage.getItem('tasks') ?? '[]');

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: getInitialState(),
  reducers: {
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      return action.payload;
    },
  },
});

export const { setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
