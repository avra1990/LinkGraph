import React, { Component } from 'react';
import '../css/Styles.css';

class NewImage extends Component {

    addImage = () => {
        this.props.addIntoImages(this.state)
    }

    setImg = (e) => {
        this.setState({
            src: e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <input onChange={this.setImg} placeholder='new image' className='inputImage' className='form-control' />
                <button onClick={this.addImage} className='addImage' className='form-control'>Add</button>
            </div>
        )
    }
}

export default NewImage;