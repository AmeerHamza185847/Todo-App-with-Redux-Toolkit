import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <Provider store={store}>
      <div>
      <h1 style={{textAlign:'center'}}>Todo App</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
