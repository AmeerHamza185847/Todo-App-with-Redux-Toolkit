import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/todoSlice';
import { setFilter } from '../redux/filterSlice';

const TodoList = () => {
  const dispatch = useDispatch();

  // Get the current filter from Redux state
  const filter = useSelector((state) => state.filter);

  // Get the list of todos from Redux state
  const todos = useSelector((state) => state.todos);

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>All</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
        <button onClick={() => dispatch(setFilter('active'))}>Active</button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
