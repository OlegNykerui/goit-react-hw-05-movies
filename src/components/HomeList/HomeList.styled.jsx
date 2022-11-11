import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  grid-template-rows: auto;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid gray;
  gap: 30px;
`;

export const Image = styled.img`
  width: 270px;
  height: 300px;
`;
export const Item = styled.li`
  width: 270px;
  margin: 20px;
  padding-bottom: 10px;
  text-decoration: none;
  border: 2px solid gray;
`;

export const Title = styled.h2`
  text-align: center;
  text-decoration: none;
  color: black;
  font-style: italic;
`;

export const Text = styled.p`
  margin: 3px;
  text-align: center;

  color: black;
`;
