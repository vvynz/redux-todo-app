import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  //initial state can be blank
  initialState: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
  ],
  // reducers will take the current state & create a new state based on the actions
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;