import React from "react";

const currYear=new Date().getFullYear();

const footerStyle={
    fontFamily: 'cursive',
    position: 'absolute',
    bottom: '0px',
    width: '100%',
    textAlign: 'center',
    marginBottom: '10px',
}

function Footer() {
    return (
        <div style={footerStyle}>
            <p>Copyright {currYear}</p>
        </div>
    );
};

export default Footer;