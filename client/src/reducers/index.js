import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import {createStore, combineReducers} from 'redux';

const todoApp = combineReducers({todos, visibilityFilter});

const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store; 