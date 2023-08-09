import styled from 'styled-components';

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StatisticsSpan = styled.span`
  color: ${props => getRandomColor(props.index)};
`;
