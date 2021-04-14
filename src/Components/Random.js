
// // how to generate random number using class based component
// import React, { Component } from 'react'

// class Random extends Component {
//     state = { random: 0 };
//     clickRandom = () => {
//         this.setState({ random: Math.round(Math.random() * 100) });
//     };
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.random}</h1>
//                 <button onClick={this.clickRandom} >RandomNumber</button>
//             </div>
//         )
//     }
// }
// export default Random;


// using function based component generating random number
import React, { useState } from 'react'

const Random = () => {
    let [count, randomCount] = useState(0);
    let RandomNumber = () => {
        randomCount(Math.round(Math.random() * 100))
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={RandomNumber}>Random--number</button>
        </div>
    )
}

export default Random
