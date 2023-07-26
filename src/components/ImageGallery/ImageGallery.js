import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItems from './ImageGalleryItem';
import Modal from './Modal';

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
  };

  render() {
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

export default ImageGallery;
