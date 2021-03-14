import React, { Component } from 'react';
import '../css/Styles.css';

class NewImage extends Component {
    state = {
        src: ''
    }

    addImage = (e) => {
        e.preventDefault();
        const { src } = this.state;
        if (src) {
            this.props.addIntoImages(`images/${src}`)
        }
    }

    setImg = (e) => {
        if (e.target.files.length > 0) {
            this.setState({
                src: e.target.files[0].name
            })
        }
        else {
            this.setState({
                src: ''
            })
        }
    }

    render() {
        return (
            <form >
                <input type="file" onChange={this.setImg} placeholder='new image' className='inputImage' className='form-control'></input>
                <button type="submit" onClick={this.addImage} className='addImage' className='addImage'>Add Image</button>
            </form>
        )
    }
}

export default NewImage;