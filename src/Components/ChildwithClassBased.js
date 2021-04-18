import React, { Component } from 'react'

class ChildwithClassBased extends Component {
    render() {
        return (
            <div>
                <h1>i am {this.props.username}</h1>
            </div>
        )
    }
}
export default ChildwithClassBased;