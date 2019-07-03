import React from 'react';

const LoadSpinner = (props) =>{
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
}

LoadSpinner.defaultProps = {
    message : 'Loading...'
};

export default LoadSpinner;