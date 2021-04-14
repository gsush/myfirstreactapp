import React, { useState } from 'react'
// 14-04-2021
// here we are using function based component and use it for a counter 

const FunctionbasedCounter = () => {
    let [count, setCount] = useState(0);

    let Increment = () => {
        setCount(count + 1);
    }

    let Decrement = () => {
        setCount(count - 1);
    }

    let Reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onMouseEnter={Increment} >Increment</button>
            <button onClick={Decrement} >Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default FunctionbasedCounter
