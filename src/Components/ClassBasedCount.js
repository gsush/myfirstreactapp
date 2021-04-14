import React, { Component } from "react";

class ClassBassedCount extends Component {
    state = {
        count: 0,
    };
    Increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    Decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };
    Reset = () => {
        this.setState({ count: 0 });
    };
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button id="btn1" onClick={this.Increment}>
                    Increase
        </button>
                <button id="btn2" onClick={this.Decrement}>
                    Decrease
        </button>
                <button id="btn3" onClick={this.Reset}>
                    Reset
        </button>
            </div>
        );
    }
}
export default ClassBassedCount;


