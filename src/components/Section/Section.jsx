import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
