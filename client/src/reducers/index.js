import todos, * as fromTodos from './todos.js';
// import visibilityFilter from './visibilityFilter.js';
import { combineReducers } from 'redux';

const todoApp = combineReducers({todos});

export default todoApp; 

export const getVisibleTodos = (state, filter) => 
  fromTodos.getVisibleTodos(state.todos, filter);