import React from 'react';
import arrow from '../Images/arrow-left.svg';


function Header() {
  return (
    <header className="header">
      <a href="/"><img alt="arrow left" src={arrow}/>Voltar</a>
    </header>
  );
}

export default Header;
