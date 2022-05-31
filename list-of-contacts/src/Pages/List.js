import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllList, /* editContact, */ deleteContact } from '../Utils/Functions';
import Header from '../Components/Header';

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
    <main>
      <link href="http://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"/>
      <Header />
      <section className='list'>
        <section className='list-name'>
          <h2>Listagem de contatos</h2>
          <button onClick={() => handleClickAddContact()}>Adicionar novo contato</button>
        </section>
        <section className='list-contact'>
        <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Nome</td>
            <td>Celular</td>
            <td>Email</td>
            <td>Ações</td>
          </tr>
        </thead> 
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
        </table>
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
        </section>
      </section>
    </main>
  );
}

export default List;