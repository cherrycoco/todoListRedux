import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import { combineReducers } from 'redux';

const todoApp = combineReducers({todos, visibilityFilter});

export default todoApp; 