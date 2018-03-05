import React from 'react';
import ReactDOM from 'react-dom';
import Addtodo from './components/AddTodo.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <h1>Cherry's Todo List</h1>
      <Addtodo />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));