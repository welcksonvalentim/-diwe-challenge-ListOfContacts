import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Context from './Context/Context';
import Login from './Pages/Login';
import List from './Pages/List';
import AddContact from './Pages/AddContact';
import EditContact from './Pages/EditContact';
import './App.css';

function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/contacts" element={ <List />} />
        <Route path="/addContact" element={ <AddContact />} />
        <Route path="/editContact" element={ <EditContact />} />
      </Routes>
    </Context>
  );
}

export default App;
