import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={styles.buttonsFeedback}>
        {options.map(option => (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            className={`${styles.button} ${styles[option]}`}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
