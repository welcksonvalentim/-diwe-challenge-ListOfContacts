import React, { createContext, useContext, useState } from 'react';

export const Context = createContext();

export default function MyContextProvider({children}) {
  const [listContacts, setListContacts] = useState([]);
  return <Context.Provider value={{listContacts, setListContacts}}>
    {children}
  </Context.Provider>
}

export function useListOfContacts() {
  const context = useContext(Context);
  const {listContacts, setListContacts} = context;
  return { listContacts, setListContacts };
}
