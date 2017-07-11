import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibileTodoList from '../containers/VisibleTodoList';

const App = ({ match }) => (
  <div>
    <AddTodo />
    <VisibileTodoList filter={match.params.filter || 'SHOW_ALL'} />
    <Footer />
  </div>
);

export default App;
