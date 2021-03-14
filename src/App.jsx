import React, { Component } from 'react';
import ImageList from './components/ImageList';
import Image from './components/Image';
import NewImage from './components/NewImage';
import reactDom from 'react-dom';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

class App extends Component {
    state = {
        images: [
            {
                id: 1,
                src: 'images/h1.jpg',
                color: ''
            },
            {
                id: 2,
                src: 'images/h2.jpg',
                color: ''
            },
            {
                id: 3,
                src: 'images/h3.jpg',
                color: ''
            },
            {
                id: 4,
                src: 'images/h4.jpg',
                color: ''
            },
            {
                id: 5,
                src: 'images/h5.jpg',
                color: ''
            },
        ]
    }

     componentDidMount() {
         let data = [];
         if(localStorage.data) {
             data = JSON.stringify(localStorage.data)
         } else {
             this.setState({
                 images: this.state.images
             })
         }
     }

   

    addIntoImages = (src) => {
        const newImage = { id: this.state.images.length + 1, src: src }
        this.setState({
            images: [...this.state.images, newImage]
        })
    }

    deleteImage = (id) => {
        const newList = this.state.images.filter(image => image.id !== id)
        this.setState({
            images: newList
        })
    }

    like = (color) => {
        let red = {style:{backgroundColor: red }}
        let white ={style:{backgroundColor: white }}

        const getBackground = () => {
            return getBackground? red : white
        }
         
        this.setState({
            color: getBackground
        })
    }

    render() {
        return (
            <>
                <NewImage addIntoImages = {this.addIntoImages} setImg={this.setImg} />
                <ImageList images={this.state.images} deleteImage = {this.deleteImage}/>
            </>
        )
    }
}

export default App;