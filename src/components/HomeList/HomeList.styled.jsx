import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  grid-template-rows: auto;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid #f99e8e;
  gap: 30px;
`;

export const Image = styled.img`
  width: 270px;
  height: 350px;
`;
export const Item = styled.li`
  width: 270px;
  margin: 10px;

  text-decoration: none;
  border: 2px solid #f99e8e;
  border-radius: 2%;
`;

export const Title = styled.h2`
  text-align: center;
  text-decoration: none;
  color: black;
  font-style: italic;
`;

export const Text = styled.p`
  margin: 3px;
  font-style: italic;

  /* text-align: center; */
  padding-left: 10px;
  margin-bottom: 10px;

  color: black;
`;
