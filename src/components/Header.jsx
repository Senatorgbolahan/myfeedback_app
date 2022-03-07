import React from 'react';

function Header(props) {
  const {text} = props
  return (
    <header className="container">
      <h1>{text}</h1>
    </header>
  );
}

export default Header;
