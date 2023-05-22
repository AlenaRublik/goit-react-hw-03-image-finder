import React from 'react';
import { Component } from 'react';

import {
  GalleryImg,
  LiItem,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {

  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  };


  render() {
    const image = this.props.image;

    return (
      <>
        <LiItem className="list-group-item">
            <GalleryImg
              src={image.webformatURL}
              alt={image.tags}
              loading="lazy"
            />
        </LiItem>
      </>
    );
  }
}

export default ImageGalleryItem;
