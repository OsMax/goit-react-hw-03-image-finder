import React from 'react';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <div className={css.spinner}></div>
      <div className={css.loader}>
        <div className={css.item1}></div>
        <div className={css.item2}></div>
        <div className={css.item3}></div>
        <div className={css.item4}></div>
        <div className={css.item5}></div>
      </div>
    </>
  );
};

export default Loader;
