import React, { useEffect, useState } from 'react';
import { getAllList } from '../Utils/Functions';
import { excludeTask } from '../Functions/Functions';

function List() {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);

  useEffect(() => {
   setData(getAllList());
   setLoading(false);
  }, []);

  const handleClick = async(numberId) => {
    await excludeTask(numberId);
  }

  if (loading) return <h1>loading...</h1>;
  return (
    <main className='tasks'>
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
          <td>{task.description}</td>
          <td>{task.status}</td>
          <td>{task.date}</td>
          <td>{task.priority}</td>
          <td><button onClick={() => handleClick(task.id)}>Exclude</button></td>
        </tr>
      )}
    </main>
  );
}

export default List;