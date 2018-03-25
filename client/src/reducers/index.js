import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import {createStore, combineReducers} from 'redux';
import { loadState, saveState } from '../localStorage';
import throttle from 'lodash/throttle';

const todoApp = combineReducers({todos, visibilityFilter});

const store = createStore(todoApp, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}), 1000);

export default store; 