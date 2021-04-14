// import React from 'react';
// import ReactDOM from 'react-dom';
// // react dom is having render method
// ReactDOM.render(document.getElementById("root"));

import React, { Component } from "react";
import reactDom from "react-dom";
//import App from "./App";
import ClassBassedCount from "./Components/ClassBasedCount";
import Classbasedcomponent from "./Components/Classbasedcomponent";
import Functionbasedcomponent from "./Components/Functionbasedcomponent";
import FunctionbasedCounter from "./Components/FunctionbasedCounter";
import Random from "./Components/Random";
class App extends Component {
    render() {
        return <div>
            <ClassBassedCount />
            <hr></hr>
            <Classbasedcomponent />
            <hr></hr>
            <Functionbasedcomponent />
            <hr></hr>
            <FunctionbasedCounter />
            <hr></hr>
            <Random />
        </div>


    }
}
reactDom.render(<App />, document.getElementById("root"));