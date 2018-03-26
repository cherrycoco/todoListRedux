import React from 'react';
import AddTodo from '../containers/AddTodo.jsx';
import Footer from './Footer.jsx';
import VisibleTodoList from '../containers/VisibleTodoList.jsx';

const App = ({ match }) => {
  return (
    <div>
      <h1>Cherry's Todo List</h1>
      <AddTodo />
      <VisibleTodoList filter={match.params.filter || 'All'}/>
      <Footer />
    </div>
  )
}

export default App;