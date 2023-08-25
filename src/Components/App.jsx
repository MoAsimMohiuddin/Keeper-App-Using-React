import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import Input from './Input.jsx';

function App() {
    return (
        <div>
            <Header title='Keeper'/>
            <Note title='Lionel Messi' content='GOAT 🐐'/>
            <Note title='Neymar Jr' content='Ney Magician 🪄'/>
            <Note title='Luis Suarez' content='El Pistolero 🚀'/>
            <Note title='Andres Iniesta' content='Maestro 🧠'/>
            <Footer/>
        </div>
    )
}

export default App;