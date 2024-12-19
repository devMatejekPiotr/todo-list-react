import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);

      state.tasks[index].done = !state.tasks[index].done;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completeAllTasks: (state) => {
      state.tasks.forEach((task) => (task.done = true));
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  completeAllTasks,
} = taskSlice.actions;

export const selectTask = (state) => state.tasks;
export default taskSlice.reducer;
