import React from 'react';
import { ItemMenu, Wrapper } from './Header.styled';

const navMenu = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <Wrapper>
      {navMenu.map(({ href, text }) => (
        <ItemMenu to={href} key={href} end>
          {text}
        </ItemMenu>
      ))}
    </Wrapper>
  );
};

export default Header;
