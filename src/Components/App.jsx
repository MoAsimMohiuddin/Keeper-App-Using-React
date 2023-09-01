import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import Input from './Input.jsx';
import notes from './Notes.js';
import './Styles.css';

function App() {
    const [notesState, notesFunc]=React.useState(notes);
    const [titleState, handleTitleInput]=React.useState('');
    const [contentState, handleContentInput]=React.useState('');
    const [count, setCount]=React.useState(0);

    function handleChange(event) {
        event.target.name==='title'?handleTitleInput(event.target.value):handleContentInput(event.target.value);
    }

    function func() {
        if(titleState!=='' && contentState!=='') {
            const newNote={
                id: count+1,
                title: titleState,
                content: contentState
            }
            
            notesFunc((prevNotes)=>[...prevNotes, newNote]);
            handleTitleInput('');
            handleContentInput('');
            setCount((prev)=>{
                return prev+1;
            })
        }
    };

    function deleteNote(idd) {
        notesFunc((prevItems) => {
            return prevItems.filter((item) => {
              return item.id !== Number(idd);
            });
          });
    }

    // Here, notes.push(note) then notesFunc(notes) will not work. Because, In order for React to re-render, We have to create a new reference to the state which we want to render. If we use the notes.push(note) approach, It will update the array, But it won't change the reference. So, React thinks that, "Oh. The reference is same. So i don't need to change anything". This is why this approach won't work.
    return (
        <div>
            <Header title='Keeper'/>
            {notesState.map(note=><Note key={note.id} title={note.title} content={note.content} id={note.id} onClick={deleteNote}/>)}
            <Input name='title' type='text' placeholder='Enter Title' value={titleState} onChange={handleChange}></Input>
            <Input name='content' type='text' placeholder='Enter Content' value={contentState} onChange={handleChange}></Input>
            <Input className="Add-button" type='submit' value='Click Me' onClick={func}/>
        
            <Footer/>
        </div>
    )
}

export default App;