import { Component } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseStatCount = e => {
    this.setState(state => {
      return { ...state, [e.target.name]: state[e.target.name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  getStatus = () => {
    return this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const status = this.getStatus();

    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.increaseStatCount}
          />
        </Section>
        <Section title="Statistics">
          {status ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
