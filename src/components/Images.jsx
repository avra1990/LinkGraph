import React, { Component } from 'react';
import '../css/Styles.css';

class Images extends Component {

    constructor(image,like, deleteImage, id) {
        super(image,like, deleteImage, id);
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className='card'>
                        <div className="card-body">
                            <img className='images' src={'images/h3.jpg'} alt='#' />
                        </div>
                        <div className="row card-footer">
                            <a><i><img onClick={() => {like(id)}} className='icons' src='../icons/facebook-like.png' /></i></a>
                            <a><i><img onClick={() => {like(id)}} className='icons' src='../icons/poor-quality.png' /></i></a>
                            <button onClick={() => {deleteImage(id)}} className='deleteBtn float-right'>Delete</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Images;

