// import React from 'react';
// import ReactDOM from 'react-dom';
// // react dom is having render method
// ReactDOM.render(document.getElementById("root"));

import React, { Component } from "react";
import reactDom from "react-dom";
import ChildComponent from "./Components/ChildComponent";
import ChildwithClassBased from "./Components/ChildwithClassBased";
import ImagewithFunction from "./Components/ImagewithFunction"
import RandomImage from "./Components/RandomImage"
//import App from "./App";


class App extends Component {
    render() {
        return <div>


            <ChildComponent username="snehangshu" />
            <ChildwithClassBased username="sameer" />
            <ImagewithFunction />
            <RandomImage />
        </div>


    }
}
reactDom.render(<App />, document.getElementById("root"));