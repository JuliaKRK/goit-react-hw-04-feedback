import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={styles.statisticsContainer}>
        <div className={styles.statistics}>
          <p className={styles.statItem}>
            Good: <span className={styles.statValue}>{good}</span>
          </p>
          <p className={styles.statItem}>
            Neutral: <span className={styles.statValue}>{neutral}</span>
          </p>
          <p className={styles.statItem}>
            Bad: <span className={styles.statValue}>{bad}</span>
          </p>
          <p className={styles.statItem}>
            Total: <span className={styles.statValue}>{total}</span>
          </p>
          <p className={styles.statItem}>
            Positive feedback:{' '}
            <span className={styles.statValue}>{positivePercentage}%</span>
          </p>
        </div>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
