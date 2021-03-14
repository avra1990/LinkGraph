import React, { Component } from 'react';
import Image from './Images';
import '../css/Styles.css';

class ImageList extends Component {
    constructor(deleteImage, image) {
        super(deleteImage, image)
    }



    render() {
        const allImages = image.map((image, id) => {
            return (
                <Image image={image} key={image.id} deleteImage={deleteImage}/>
            )
        })
        return (
            {allImages}
        )
    }
}

export default ImageList;