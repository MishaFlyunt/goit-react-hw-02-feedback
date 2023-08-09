import { GlobalStyle, Container } from './GlobalStyle';
import { Component } from 'react';
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
    Math.round(good * 100) / this.totalFeedback(this.state);

  render() {
    return (
      <Container>
        <Section title="Plase leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.good}
            neutral={this.neutral}
            bad={this.bad}
            total={this.totalFeedback}
            positivePercentage={this.positivePercentage}
          />
        </Section>

        <GlobalStyle />
      </Container>
    );
  }
}
