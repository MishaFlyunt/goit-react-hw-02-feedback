import styled from 'styled-components';
import {getRandomColor} from '../RandomColor'

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const StatisticsSpan = styled.span`
  color: ${props => getRandomColor(props.index)};
`;
