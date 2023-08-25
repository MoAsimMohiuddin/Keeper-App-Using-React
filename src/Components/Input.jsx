import React from 'react';

const buttonStyles={
    fontFamily: 'cursive',
    display: 'block',
    width: '94vw',
    marginLeft: '40px',
    marginTop: '1vw',
    border: 'none',
    padding: '5px',
}

function Input() {
    return (
        <input type='button' value='Add' style={buttonStyles}/>
    );
};

export default Input;