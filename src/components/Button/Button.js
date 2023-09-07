import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onShowMore }) => {
  return (
    <button className={css.loadMore} type="button" onClick={onShowMore}>
      <span className={css.textBtn}>~ Show more ~</span>
    </button>
  );
};

Button.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};

export default Button;
