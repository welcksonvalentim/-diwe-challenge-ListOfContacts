import React, { useState } from 'react';
import Header from '../Components/Header';
import { editContact } from '../Utils/Functions';
import { useListOfContacts } from '../Context/Context';

function EditContact() {
  const [add, setAdd] = useState({ name: '', email: '', mobile: ''});
  const { dataContact, token } = useListOfContacts();

  const handleClick = async(event) => {
    event.preventDefault();
    await editContact(dataContact.id, add, token);
  };

  return (
    <main className= 'editContact'>
      <link href="http://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"/>
      <Header />
      <section className= 'editContact-section'>
        <h1>Atualiza um contato</h1>
        <h2>Preencha as informações para atualizar os dados do contato</h2>
        <form className='login' onSubmit={ (event) => handleClick(event) }>
          <label htmlFor='name'>
            <h4>Nome Completo</h4>
            <input
              className='editContact-name'
              type='text'
              value={dataContact.name}
              placeholder='Digite o nome do contato'
              name='name'
              onChange={(event) => setAdd({...add, name: event.target.value})}
              required
            />
          </label>
          <label htmlFor='email'>
            <h4>Email</h4>
            <input
              className='editContact-email'
              type='email'
              value={dataContact.email}
              placeholder='Digite o email'
              name='email'
              onChange={(event) => setAdd({...add, email: event.target.value})}
              required
            />
          </label>
          <label htmlFor='mobile'>
            <h4>Celular</h4>
            <input
              className='editContact-celular'
              type='number'
              value={dataContact.mobile}
              placeholder='Digite o celular'
              name='mobile'
              onChange={(event) => setAdd({...add, mobile: event.target.value})}
              required
            />
          </label>
          <label htmlFor='button'>
            <button type='submit'>Atualizar contato</button>
          </label>
        </form>
      </section>
    </main>
  );
}

export default EditContact;