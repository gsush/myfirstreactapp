import React from 'react'

const ChildComponent = (props) => {
    console.log(props);
    return (
        <div>
            <h1>i am {props.username}</h1>
        </div>
    )
}

export default ChildComponent
