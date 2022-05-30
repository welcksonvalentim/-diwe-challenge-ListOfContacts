import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Context from './Context/Context';
import Login from './Pages/Login';
import List from './Pages/List';
import AddContact from './Pages/List';
import './App.css';

function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/list" element={ <List />} />
        <Route path="/list" element={ <AddContact />} />
      </Routes>
    </Context>
  );
}

export default App;
