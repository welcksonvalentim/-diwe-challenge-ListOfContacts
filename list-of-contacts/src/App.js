import React from 'react';
import Context from './Context/Context';
import Login from './Pages/Login';
import './App.css';

function App() {
  return (
    <Context>
        <Login />
    </Context>
  );
}

export default App;
