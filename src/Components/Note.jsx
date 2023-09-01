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
            <p style={{marginLeft: '5px', fontWeight: 'bold'}}>{props.title}</p>
            <p style={{marginLeft: '5px'}} spellCheck='false'>{props.content}</p>
            <button onClick={()=>{
                props.onClick(props.id);
            }} style={{border: 'none', fontSize: '15px', textAlign:'end'}}>Delete</button>
        </div>
    )
}

export default Note;