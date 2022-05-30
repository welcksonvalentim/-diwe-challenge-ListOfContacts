import React from 'react';
import Context from './Context/Context';
import Login from './Pages/Login';
import List from './Pages/List';
import './App.css';

function App() {
  return (
    <Context>
      <Login />
      <List />
    </Context>
  );
}

export default App;
