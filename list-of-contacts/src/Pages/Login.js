import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendLoginInputs } from '../Utils/Functions';
import loginImage from '../Images/loginImage.png';
import { useListOfContacts } from '../Context/Context';

function Login() {
  const [add, setAdd] = useState({ email: '', password: ''});
  const { setToken } = useListOfContacts();
  const navigate = useNavigate();

  const handleClick = async(event) => {
    event.preventDefault();
    const returnToken = await sendLoginInputs(add);
    await setToken(returnToken);
    navigate('/contacts');
  };

  return (
    <main className='login'>
      <link href="http://fonts.cdnfonts.com/css/montserrat" rel="stylesheet"/>
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
      <section className='login-image'>
        <img alt='dev man in desk' src={loginImage}/>
      </section>
      <section className='login-information'>
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
            <button type='submit'>Fazer Login</button>
          </label>
        </form>
      </section>
    </main>
  );
}

export default Login;
