import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';
import TodoList from '../components/TodoList.jsx';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'All':
      return todos;
    case 'Active':
      return todos.filter(todo => !todo.completed);
    case 'Completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

const mapStateToProps = (state, props) => ({
    todos: getVisibleTodos(state.todos, props.filter)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick (id) {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList; 