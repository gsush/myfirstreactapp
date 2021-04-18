// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // // react dom is having render method
// // ReactDOM.render(document.getElementById("root"));

// import React, { Component } from "react";
// import reactDom from "react-dom";
// import ChildComponent from "./Components/ChildComponent";
// import ChildwithClassBased from "./Components/ChildwithClassBased";
// import ImagewithFunction from "./Components/ImagewithFunction"
// import RandomImage from "./Components/RandomImage"
// //import App from "./App";


// class App extends Component {
//     render() {
//         state = {
//             users: {
//                 username: "snehangshu",
//                 age: 26,
//                 company: "testyantra",
//                 salary: "200000"
//             }
//         }
//         return <div>


//             <ChildComponent username="snehangshu" />


//             <ChildwithClassBased users={this.state.users} />
//             <ImagewithFunction />
//             <RandomImage />
//         </div>


//     }
// }
// reactDom.render(<App />, document.getElementById("root"));

import React, { Component, Fragment } from "react";
import ListAndkeys from "./ListAndkeys"
import faker from "faker/locale/en_IND";
import ReactDOM from 'react-dom'
class App extends Component {
    state = {
        Employes: [
            {
                emp_id: 1,
                emp_name: "mani",
                emp_photo: faker.image.avatar(),
                emp_sal: 20000,
                emp_designation: "react developer",
            },
            {
                emp_id: 2,
                emp_name: "maniya",
                emp_photo: faker.image.avatar(),
                emp_sal: 50000,
                emp_designation: "node developer",
            },
            {
                emp_id: 3,
                emp_name: "shashi",
                emp_photo: faker.image.avatar(),
                emp_sal: 554444,
                emp_designation: "web developer",
            },
        ],
    };
    render() {
        return (
            <Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>id</th>
                            <th>name</th>
                            <th>salary</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Employes.map((emp) => (
                            <ListAndkeys emp={emp} />
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));