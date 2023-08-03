import React, { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.onSearch(e.currentTarget.serchInput.value);
  };
  render() {
    return (
      <header className={css.searchbar}>
        <a href="index.html">
          <img
            src={require('../images/logo-661013_1280.webp')}
            alt="pixabay"
            className={css.headerImg}
          />
        </a>
        <form className={css.form} onSubmit={this.onSubmit}>
          <input
            className={css.input}
            name="serchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
