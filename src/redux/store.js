import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
});

export default store;
