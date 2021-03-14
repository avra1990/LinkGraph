import React, { Component } from 'react';
import Image from './Image';
import '../css/Styles.css';

class ImageList extends Component {
    render() {
        const { images, deleteImage } = this.props;
        return (
            <div className="imageWrapper">
                {
                    images.map((image, id) => {
                        return (
                            <Image image={image} key={image.id} deleteImage={deleteImage} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ImageList;