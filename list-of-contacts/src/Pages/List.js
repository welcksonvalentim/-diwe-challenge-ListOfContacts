import React, { useEffect, useState } from 'react';
import { getAllList, editContact, deleteContact } from '../Utils/Functions';

function List() {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);

  useEffect(() => {
   setData(getAllList());
   setLoading(false);
  }, []);

  const handleClickEdit = async(numberId) => {
    await editContact(numberId);
  }

  const handleClickDelete = async(numberId) => {
    await deleteContact(numberId);
  }

  if (loading) return <h1>loading...</h1>;
  return (
    <main className='list'>
      <section>
        <h2>Listagem de contatos</h2>
        <button>Adicionar novo contato</button>
      </section>
      <select>
        <tr>
          <td>#</td>
          <td>Nome</td>
          <td>Celular</td>
          <td>Email</td>
          <td>Ações</td>
        </tr>
        {data[0].map((task) => 
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.nome}</td>
            <td>{task.celular}</td>
            <td>{task.Email}</td>
            <td><button onClick={() => handleClickEdit(task.id)}>Editar</button></td>
            <td><button onClick={() => handleClickDelete(task.id)}>Excluir</button></td>
          </tr>
        )}
      </select>
    </main>
  );
}

export default List;