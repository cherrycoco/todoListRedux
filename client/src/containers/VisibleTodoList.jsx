import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';
import TodoList from '../components/TodoList.jsx';
import { withRouter } from 'react-router';
import { getVisibleTodos } from '../reducers/index';

const mapStateToProps = (state, { match }) => ({
    todos: getVisibleTodos(state, match.params.filter)
});

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick (id) {
//     dispatch(toggleTodo(id));
//   }
// });

const VisibleTodoList = withRouter(connect(
  mapStateToProps, 
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList; 