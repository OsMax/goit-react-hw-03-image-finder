import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItems from './ImageGalleryItem';
import Modal from './Modal';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    modalIsOpen: false,
    modalUrl: '',
  };

  onModalOpen = e => {
    if (e.target.nodeName === 'IMG' && !this.state.modalIsOpen) {
      this.setState(() => ({
        modalIsOpen: true,
        modalUrl: e.target.attributes.lsrc.value,
      }));
      document.body.style.overflow = 'hidden';
    }
  };
  onModalClose = () => {
    this.setState(() => ({
      modalIsOpen: false,
      modalUrl: '',
    }));
    document.body.style.overflow = 'scroll';
  };

  render() {
    // console.log(this.props.items[0]);
    return (
      <>
        <ul className={css.gallery}>
          {this.props.items.map(item => {
            return (
              <ImageGalleryItems
                key={item.id}
                info={item}
                onModalOpen={this.onModalOpen}
              />
            );
          })}
        </ul>
        {this.state.modalIsOpen && (
          <Modal onModalClose={this.onModalClose}>
            <img
              src={this.state.modalUrl}
              alt=""
              className={css.modalImg}
              loading="lazy"
            />
          </Modal>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ImageGallery;
