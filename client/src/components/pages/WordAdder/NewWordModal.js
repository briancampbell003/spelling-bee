import React, { useState } from 'react';
import './WordAdder.css';

function NewWordModal(props) {
    // const [word, setWord] = useState('');

    function handleChange(e) {
        // setWord(e.target.value);
    }

    function handleSave(e) {
        e.preventDefault();
        console.log("saving a word here");
            // if (newDream) {
            //     const response = await fetch('/api/dreams', {
            //       method: 'POST',
            //       body: JSON.stringify(newDream),
            //       headers: { 'Content-Type': 'application/json' },
            //     });
            
            //     if (response.ok) {
            //       document.location.replace('/mydreams');
            //     } else {
            //       alert('Failed to post your new dream.');
            //     }
            //   }
    }

    return (
        <>
            <form className="word-form" onSubmit={handleSave}>
                <input className="word2save" placeholder={props[0].meta.id} />
                <button type="submit" className="saveWordBtn">Search</button>
            </form>
        </>
    )
}

export default NewWordModal;