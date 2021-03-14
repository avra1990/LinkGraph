import React, { Component } from 'react';
import ImageList from './components/ImageList';
import Images from './components/Images';
import NewImage from './components/NewImage';

class App extends Component {
    state = [
        image = [
            {
                id: 1,
                src: <img className='images' src={'images/h1.jpg'}/>
            },
            {
                id: 2,
                src: <img className='images' src={'images/h2.jpg'}/>
            },
            {
                id: 3,
                src: <img className='images' src={'images/h3.jpg'}/>
            },
            {
                id: 4,
                src: <img className='images' src={'images/h4.jpg'}/>
            },
            {
                id: 5,
                src: <img className='images' src={'images/h5.jpg'}/>
            },
        ]
    ]

    componentDidMount() {
        let data = [];
        if(localStorage.data) {
            data = JSON.stringify(localStorage.data)
        } else {
            this.setState({
                image: data
            })
        }
    }

    addIntoImages = (image) => {
        this.setState({
            image: [...this.state.image, image]
        })
    }

    deleteImage = (id) => {
        const copyImages = [...this.state.image];
        copyImages.splice(id, 1);
        this.setState({
            image: copyImages
        })
    }

    like = () => {

    }

    render() {
        return (
            <>
                <NewImage addIntoImages = {this.addIntoImages}/>
                <Images like = {this.like}/>
                <ImageList image={this.state.image} deleteImage = {this.deleteImage}/>
            </>
        )
    }
}

export default App;