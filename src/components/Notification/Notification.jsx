import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

class Notification extends Component {
  render() {
    const { message } = this.props;

    return <p className={styles.message}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
