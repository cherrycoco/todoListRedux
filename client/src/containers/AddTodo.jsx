import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form>
        <input ref={node => {input = node}} />
        <button onClick={ e => {
          e.preventDefault();
          dispatch(addTodo(input.value));
          input.value = null;
        }}>Add</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo; 