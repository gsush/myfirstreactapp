// import React from 'react';
// import ReactDOM from 'react-dom';
// // react dom is having render method
// ReactDOM.render(document.getElementById("root"));

import React, { Component } from "react";
import reactDom from "react-dom";
import ImagewithFunction from "./Components/ImagewithFunction";
//import App from "./App";

import RandomImage from "./Components/RandomImage";
class App extends Component {
    render() {
        return <div>

            <RandomImage />
            <ImagewithFunction />
        </div>


    }
}
reactDom.render(<App />, document.getElementById("root"));