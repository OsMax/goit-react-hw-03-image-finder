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

export default ImageGalleryItem;
