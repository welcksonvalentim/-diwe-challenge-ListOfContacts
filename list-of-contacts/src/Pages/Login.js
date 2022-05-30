import React, { useState } from 'react';
import { sendLoginInputs } from '../Functions/Functions';
import '../App.css';

function Login() {
  const [add, setAdd] = useState({ email: '', password: ''});

  const handleClick = async(event) => {
    event.preventDefault();
    await sendLoginInputs(add);
  };

  return (
    <main>
      <section>
        <img alt='imagem teste' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fcoodesh.com%2Fblog%2Frh-tech%2Frecrutamento%2Fcontratar-desenvolvedor-pleno-dicas-para-acertar-no-recrutamento%2F&psig=AOvVaw3VqO3R0-Pvrs0uNd3rlebT&ust=1653996920384000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJC7ue2Qh_gCFQAAAAAdAAAAABAD'/>
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
              type='password'
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
