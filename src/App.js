import './App.css';
import { useState, useReducer } from 'react';
import Todo from './Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...todos, newTodo(action.payload.name)]
  }
  if (action.type === ACTIONS.TOGGLE_TODO) {
    return todos.map(todo => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    })
  }
  if (action.type === ACTIONS.DELETE_TODO) {
    return todos.filter(todo => todo.id != action.payload.id);
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

function App() {
  const [val, setVal] = useState('');

  const changeValHandler = (e) => {
    setVal(e.currentTarget.value);
  }

  const [todos, dispatch] = useReducer(reducer, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: val } });
    setVal('');
  }

  return (
    <div style={{ position: 'fixed', top: '100px', left: '200px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={formSubmitHandler}>
          <input type="text" onChange={changeValHandler} value={val} />
        </form>
        {todos.map(todo => {
          return <Todo key={todo.id} {...todo} dispatch={dispatch} />
        })}
      </div>
    </div >
  );
}

export default App;
