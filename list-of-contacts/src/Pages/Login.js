import React, { useState } from 'react';
import { sendLoginInputs } from '../Utils/Functions';
import '../App.css';

function Login() {
  const [add, setAdd] = useState({ email: '', password: ''});

  const handleClick = async(event) => {
    event.preventDefault();
    await sendLoginInputs(add);
    alert('funcionou');
  };

  return (
    <main>
      <section>
        <img alt='imagem teste' src=''/>
      </section>
      <section>
        <h1>Bem-vindo!</h1>
        <h2>Faça login para acessar nossa plataforma</h2>
        <form className='login' onSubmit={ (event) => handleClick(event) }>
          <label htmlFor='email'>
            <h4>Email</h4>
            <input
              type='email'
              placeholder='Digite seu email'
              name='email'
              onChange={(event) => setAdd({...add, email: event.target.value})}
              required
            />
          </label>
          <label htmlFor='password'>
            <h4>Senha</h4>
            <input
              type='text'
              placeholder='Digite sua senha'
              name='password'
              onChange={(event) => setAdd({...add, password: event.target.value})}
              required
            />
          </label>
          <label htmlFor='button'>
            <input
              className='loginButton'
              type='submit'
              name='button'
              value='Fazer Login'
              required
            />
          </label>
        </form>
      </section>
    </main>
  );
}

export default Login;
