import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/SectionTitle';
import { SectionBox } from './Section/SectionTitle.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);
  };
  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      handleClick,
      state,
    } = this;
    const total = countTotalFeedback();
    const persentage = countPositiveFeedbackPercentage(total);

    return (
      <SectionBox>
        <Section
          title={'Please leave feedback'}
          children={<FeedbackOptions option={state} onBtnClick={handleClick} />}
        />
        <Section
          title={'Statistics'}
          children={
            total === 0 ? (
              <p>There is no feedback</p>
            ) : (
              <Statistics
                title={'Statistics'}
                total={total}
                persentage={persentage}
                good={state.good}
                neutral={state.neutral}
                bad={state.bad}
              />
            )
          }
        />

        <GlobalStyle />
      </SectionBox>
    );
  }
}
