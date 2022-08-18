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

export default FeedbackOptions;
