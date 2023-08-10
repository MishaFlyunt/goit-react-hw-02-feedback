import styled from 'styled-components';
import { getRandomColors } from '../RandomColor';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 15px 0;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  border: 2px solid green;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${props => getRandomColors(props.index)};
  color: white;

  &:hover {
    background-color: ${props => getRandomColors(props.index)};
    color: white;
  }
`;
