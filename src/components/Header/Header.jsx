import React from 'react';
import { ItemMenu } from './Header.styled';

const navMenu = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <div>
      {navMenu.map(({ href, text }) => (
        <ItemMenu to={href} key={href} end>
          {text}
        </ItemMenu>
      ))}
    </div>
  );
};

export default Header;
