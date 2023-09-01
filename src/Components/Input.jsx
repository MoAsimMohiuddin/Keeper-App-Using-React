import React from 'react';

const buttonStyle=
{
    fontFamily: 'cursive',
    display: 'block',
    width: '94vw',
    marginLeft: '40px',
    marginTop: '1vw',
    border: 'none',
    padding: '5px',
    backgroundColor: 'rgb(231, 231, 231)'
}

function Input(props) {
    return (
        <input {...props} style={buttonStyle}/>
    );
};

export default Input;