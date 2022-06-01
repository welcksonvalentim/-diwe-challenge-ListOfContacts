import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Context from './Context/Context';
import Login from './Pages/Login';
import List from './Pages/List';
import AddContact from './Pages/AddContact';
import './App.css';

function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/contacts" element={ <List />} />
        <Route path="/addContact" element={ <AddContact />} />
      </Routes>
    </Context>
  );
}

export default App;
