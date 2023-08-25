import React from 'react';

const divStyle={
    fontFamily: 'cursive',
    boxShadow: '5px 2px 5px gray',
}

const headerStyle={
    backgroundColor: 'yellow',
    width: '100vw',
    height: '10vh'
}

const spanStyle={
    display: 'inline-block',
    marginLeft: '45px',
    marginTop: '12px',
    fontSize: '25px'
}

function Header(props) {
    return (
        <div style={divStyle}>
            <h3 style={headerStyle}><span style={spanStyle}>{props.title}</span></h3>
        </div>
    );
};

export default Header;