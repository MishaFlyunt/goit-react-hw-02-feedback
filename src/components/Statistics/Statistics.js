import { Notification } from '../Notification/Notification';
import { StatisticsList, StatisticsSpan } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <StatisticsList>
      <li>
        <StatisticsSpan>Good: {good}</StatisticsSpan>
      </li>
      <li>
        <StatisticsSpan>Neutral: {neutral}</StatisticsSpan>
      </li>
      <li>
        <StatisticsSpan>Bad: {bad}</StatisticsSpan>
      </li>
      <li>
        <StatisticsSpan>Total: {total}</StatisticsSpan>
      </li>
      <li>
        <StatisticsSpan>Positive Feedback: {positivePercentage}%</StatisticsSpan>
      </li>
    </StatisticsList>
  ) : (
    <Notification mes="There is no feedback" />
  );
};
