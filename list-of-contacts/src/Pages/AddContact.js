import React, { useState } from 'react';
import { createContact } from '../Utils/Functions';
import '../App.css';

function Login() {
  const [add, setAdd] = useState({ name: '', email: '', mobile: ''});

  const handleClick = async(event) => {
    event.preventDefault();
    await createContact(add);
  };

  return (
    <main>
      <section>
        <img alt='imagem teste' src=''/>
      </section>
      <section>
        <h1>Cadastre um novo contato</h1>
        <h2>Preencha as informações para cadastrar um novo contato</h2>
        <form className='login' onSubmit={ (event) => handleClick(event) }>
          <label htmlFor='name'>
            <h4>Nome Completo</h4>
            <input
              type='text'
              placeholder='Digite o nome do contato'
              name='name'
              onChange={(event) => setAdd({...add, name: event.target.value})}
              required
            />
          </label>
          <label htmlFor='email'>
            <h4>Email</h4>
            <input
              type='email'
              placeholder='Digite o email'
              name='email'
              onChange={(event) => setAdd({...add, email: event.target.value})}
              required
            />
          </label>
          <label htmlFor='mobile'>
            <h4>Celular</h4>
            <input
              type='number'
              placeholder='Digite o senha'
              name='mobile'
              onChange={(event) => setAdd({...add, mobile: event.target.value})}
              required
            />
          </label>
          <label htmlFor='button'>
            <input
              className='loginButton'
              type='submit'
              name='button'
              value='Cadastrar contato'
              required
            />
          </label>
        </form>
      </section>
    </main>
  );
}

export default Login;
