// import React from 'react';
// import ReactDOM from 'react-dom';
// // react dom is having render method
// ReactDOM.render(document.getElementById("root"));

import React, { Component } from "react";
import ReactDOM from "react-dom"; //
import App from "./app";

// how to create class based component

class App extends Component {
    render() {
        return <h1>I am class based component</h1>;
    }
}
// how to create function based component
ReactDOM.render(<App />, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";

//ReactDom.render(<App />, document.getElementById("root"));