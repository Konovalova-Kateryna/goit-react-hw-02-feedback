import { PropTypes } from 'prop-types';
import { StatList, StatTotal } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, persentage }) => {
  return (
    <div>
      <StatList>
        <li key={'good'}>Good: {good}</li>
        <li key={'neutral'}>Neutral: {neutral}</li>
        <li key={'bad'}>Bad: {bad}</li>
      </StatList>
      <StatTotal>Total: {total}</StatTotal>
      <StatTotal>Positive feedback: {persentage} %</StatTotal>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  persentage: PropTypes.number,
};

export default Statistics;

// {Object.entries(object).map(key => (
//           <li key={key[0]}>
//             {key[0]}:{key[1]}
//           </li>
//         ))}
//       </ul>
//       <p>Total: {total}</p>
//       <p></p>
