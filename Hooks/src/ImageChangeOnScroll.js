import React from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
    return (
        <div>
            {[1, 2, 3, 4].map(id => {
                return (
                    <div key={id}>
                        <ImageToggleOnScroll
                            primaryImg={`/img/bw/${id}.jpg`}
                            secondaryImg={`/img/${id}.jpg`}
                            alt=""
                        />
                    </div>
                );
            })};
        </div>
    );
};

export default ImageChangeOnScroll;