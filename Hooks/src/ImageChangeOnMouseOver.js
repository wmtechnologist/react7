import React from 'react';
import ImageToggleOnMouseOver from './ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver
                primaryImg="./img/color.png" 
                secondaryImg="./img/noir.png"
                alt="Olivia"/>
        </div>
    );
};

export default ImageChangeOnMouseOver;