import React from 'react';

function Header({ text }) {
  return (
    <header className="container">
      <h1>{text}</h1>
    </header>
  );
}

export default Header;
