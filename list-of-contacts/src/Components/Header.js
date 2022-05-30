import React from 'react';
import arrow from '../Images/arrow-left.svg';

function Header() {
  return (
    <header className="header">
      <link alt="arrow left" src={arrow}>Voltar</link>
    </header>
  );
}

export default Header;
