import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  onEscape = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.props.onModalClose}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};

export default Modal;
