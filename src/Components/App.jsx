import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import Input from './Input.jsx';
import notes from './Notes.js';

function createNote(note) {
    return (
        <Note key={note.id} title={note.title} content={note.content}/>
    );
};

function App() {
    return (
        <div>
            <Header title='Keeper'/>
            {notes.map(createNote)}
            <Footer/>
        </div>
    )
}

export default App;