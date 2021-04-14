import React, { useState } from 'react'
import faker from 'faker/locale/en_IND'
const ImagewithFunction = () => {
    let [Image, setImage] = useState(faker.image.avatar());
    let RandomImage = () => {
        setImage(faker.image.avatar());
    }
    return (
        <div>
            <p><img src={Image} alt="img"></img></p>
            <button onClick={RandomImage}>random image</button>
        </div>
    )
}

export default ImagewithFunction
