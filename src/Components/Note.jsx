import React from 'react';

const noteStyle={
    display: 'inline-flex',
    flexDirection: 'column',
    fontFamily: 'cursive',
    border: '2px solid white',
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: '5px',
    marginTop: '20px',
    marginLeft: '40px',
    minWidth: '15vw',
    minHeight: '10vh',
    width: 'fit-content',
    height: 'fit-content',
    overflow: 'hidden',
    maxWidth: '95vw',
}

function Note(props) {
    return (
        <div style={noteStyle}>
            <p style={{marginLeft: '5px', fontWeight: 'bold'}} contentEditable='true'>{props.title}</p>
            <p style={{marginLeft: '5px'}} contentEditable='true' spellCheck='false'>{props.content}</p>
        </div>
    )
}

export default Note;