import React, { Component } from 'react';
import '../css/Styles.css';

class Image extends Component {

    render() {
        const { image, like, deleteImage } = this.props;
        return (
            <>
                <div className="container-2">
                    <div className='card'>
                        <div className="card-body">
                            <img className='images' src={image.src} alt='#' />
                        </div>
                        <div className="row card-footer">
                            <a><i><img onClick={() => { like(image.id) }} className='icons' src='../icons/heart-regular.svg' /></i></a>
                            <button onClick={() => { deleteImage(image.id) }} className='deleteBtn'>Delete</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Image;

