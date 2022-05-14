import React from 'react';
import logo from './logo.svg';
import './App.css';
import TitleForm from './component/TitleForm';
import AddButton from './component/AddButton';
import TodoList from './component/TodoList';
import SearchForm from './component/SearchForm';

function App() {
  return (
    <div style={{ margin: 12 }}>
      <div>
        <TitleForm />
        <AddButton />
      </div>
      <SearchForm />
      <TodoList />
    </div>
  );
}

export default App;
