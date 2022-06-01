import React, { createContext, useContext, useState } from 'react';

export const Context = createContext();

export default function MyContextProvider({children}) {
  const [listContacts, setListContacts] = useState([]);
  const [token, setToken] = useState('');
  return <Context.Provider value={{listContacts, setListContacts, token, setToken}}>
    {children}
  </Context.Provider>
}

export function useListOfContacts() {
  const context = useContext(Context);
  const {listContacts, setListContacts, token, setToken} = context;
  return { listContacts, setListContacts, token, setToken };
}
