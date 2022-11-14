import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  border-bottom: 2px solid #ff2700;
  background-color: #ffd6cd; ;
`;

export const ItemMenu = styled(NavLink)`
  display: inline-block;
  border: 1px solid black;
  border-radius: 7px;
  margin: 5px;
  padding: 20px;
  font-size: 20px;
  color: black;
  font-weight: 500;
  font-size: 30px;
  text-decoration: none;
  text-align: center;
  &.active {
    background: #f99e8e;
  }
`;
