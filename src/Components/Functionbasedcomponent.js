import React, { useState } from 'react'

const Functionbasedcomponent = () => {
    let [username] = useState("snehangshu");
    return (
        <div>
            <h1>hello i am {username}</h1>
        </div>
    )
}

export default Functionbasedcomponent
