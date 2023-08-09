import { GlobalStyle, Container } from './GlobalStyle';
import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbacskOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    this.setState(prevState => {
      return {
        [e]: prevState[e] + 1,
      };
    });
  };

  totalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  positivePercentage = ({ good }) =>
    Math.round((good * 100) / this.totalFeedback(this.state));

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Plase leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section titleStat="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback(this.state)}
            positivePercentage={this.positivePercentage(this.state)}
          />
        </Section>

        <GlobalStyle />
      </Container>
    );
  }
}
