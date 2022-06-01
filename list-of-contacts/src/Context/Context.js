import React, { createContext, useContext, useState } from 'react';

export const Context = createContext();

export default function MyContextProvider({children}) {
  const [dataContact, setDataContact] = useState({});
  const [token, setToken] = useState('');
  return <Context.Provider value={{dataContact, setDataContact, token, setToken}}>
    {children}
  </Context.Provider>
}

export function useListOfContacts() {
  const context = useContext(Context);
  const {dataContact, setDataContact, token, setToken} = context;
  return { dataContact, setDataContact, token, setToken };
}
