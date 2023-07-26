import React from 'react';
import css from './Button.module.css';

const Button = ({ onShowMore }) => {
  return (
    <button className={css.loadMore} type="button" onClick={onShowMore}>
      <span className={css.textBtn}>~ Show more ~</span>
    </button>
  );
};

export default Button;
