import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllList, /* editContact, */ deleteContact } from '../Utils/Functions';

function List() {
  const navigate = useNavigate();
/*    const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);

  useEffect(() => {
   setData(getAllList());
   setLoading(false);
  }, []); */

/*   const handleClickEdit = async(numberId) => {
    await editContact(numberId);
  }

  const handleClickDelete = async(numberId) => {
    await deleteContact(numberId);
  } */

  const handleClickAddContact = () => {
    navigate('/addContact');
  }

/*   if (loading) return <h1>loading...</h1>; */
  return (
    <main className='list'>
      <section>
        <h2>Listagem de contatos</h2>
        <button onClick={() => handleClickAddContact()}>Adicionar novo contato</button>
      </section>
      <select>
        <tr>
          <td>#</td>
          <td>Nome</td>
          <td>Celular</td>
          <td>Email</td>
          <td>Ações</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
{/*         {data[0].map((contact) => 
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.mobile}</td>
            <td>{contact.email}</td>
            <td><button onClick={() => handleClickEdit(contact.id)}>Editar</button></td>
            <td><button onClick={() => handleClickDelete(contact.id)}>Excluir</button></td>
          </tr>
        )} */}
      </select>
    </main>
  );
}

export default List;