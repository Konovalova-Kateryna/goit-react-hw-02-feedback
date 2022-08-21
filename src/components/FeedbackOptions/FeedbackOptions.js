import { PropTypes } from 'prop-types';
import { BtnList, OptionBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ option, onBtnClick }) => {
  return (
    <BtnList>
      {Object.keys(option).map(key => (
        <li key={key}>
          <OptionBtn type="button" onClick={() => onBtnClick(key)}>
            {key.toUpperCase()}
          </OptionBtn>
        </li>
      ))}
    </BtnList>
  );
};
FeedbackOptions.propTypes = {
  option: PropTypes.object,
  onBtnClick: PropTypes.func,
};
export default FeedbackOptions;
