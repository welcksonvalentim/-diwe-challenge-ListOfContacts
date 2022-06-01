import React from 'react';
import arrow from '../Images/arrow-left.svg';


function Header() {
  const handleClick = () => {
    window.history.back();
  }

  return (
    <header className="header">
      <button onClick={() => handleClick()}>
        <img alt="arrow left" src={arrow}/>Voltar
      </button>
    </header>
  );
}

export default Header;
