import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Build a Todo App', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      // Todo: removes the console.log  statement to understand effectively 
      console.log("state in addTodo before adding a todo -->" , JSON.stringify(state));
      console.log("action in addTodo -->" , action);
      console.log("action payload in addTodo -->" , action.payload);
      state.push(action.payload);
      console.log("state in addTodo after adding a todo -->" , JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      // console.log("state in toggleTodo -->" , state);
      // console.log("action in toggleTodo -->" , action);
      // console.log("action payload in toggleTodo -->" , action.payload);
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      // it will return only that id does not match
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
