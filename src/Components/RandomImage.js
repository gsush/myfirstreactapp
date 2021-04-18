import React, { Component } from 'react'
import faker from 'faker/locale/en_IND'

class RandomImage extends Component {
    state = {
        randomImg: faker.image.avatar()
    };
    generateRandomImage = () => {
        this.setState({
            randomImg: faker.image.avatar(),
        });
    }
    render() {
        return (
            <div>
                <img src={this.state.randomImg} alt="img" />
                <button onClick={this.generateRandomImage}>RandomImage</button>
            </div>
        )
    }
}
export default RandomImage