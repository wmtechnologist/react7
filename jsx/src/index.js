//Import the React and ReactDOM Libraries ES2015 Modules system
import React from 'react';
import ReactDOM from 'react-dom';



//const React = require('react') // CommonJS Modules
//Create a react component
//function based component
const App = () => {
    const buttonText = {text: 'there'};
    return (
    <div>
    <label className="label" htmlFor="name">Enter Name: </label>
    <input id="name" type="text"/>
    <button style={{ backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
    </button>
  </div>
  );
};

//Take react component and show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')

);