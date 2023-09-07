import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.item} onClick={this.props.onModalOpen}>
        <img
          className={css.itemImg}
          src={this.props.info.webformatURL}
          lsrc={this.props.info.largeImageURL}
          alt={this.props.info.tag}
          loading="lazy"
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  info: PropTypes.shape({
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tag: PropTypes.string,
  }),
  onModalOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
