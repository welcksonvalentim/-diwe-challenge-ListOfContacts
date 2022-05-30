import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendLoginInputs } from '../Utils/Functions';
import loginImage from '../Images/loginImage.png';

function Login() {
  const [add, setAdd] = useState({ email: '', password: ''});
  const navigate = useNavigate();

  const handleClick = async(event) => {
    event.preventDefault();
    await sendLoginInputs(add);
    navigate('/addContact');
  };

  return (
    <main className='login'>
      <section className='login-image'>
        <img alt='dev man in desk' src={loginImage}/>
      </section>
      <section className='login-information'>
      <link href="http://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"/>
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
            <button type='submit'>Fazer Login</button>
          </label>
        </form>
      </section>
    </main>
  );
}

export default Login;
