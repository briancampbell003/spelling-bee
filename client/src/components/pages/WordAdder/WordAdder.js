import React, { useState } from 'react';
import WordAdderForm from './WordAdderForm';
import './WordAdder.css';

function WordAdder() {
    function addWord(word) {
        alert(word);
      }

    return (
        <div>
            <h1>Add a word to your pool</h1>
            < WordAdderForm addWord={addWord}/>
            {/* CALLS FUNCTION TO OPEN BELOW INFORMATION IN MODAL?? THAT CAN BE TWEAKED THEN SAVED TO POOL */}
            <div className="wordResult">
                <p className="returnedWord"></p>
                <p className="returnedMoreDate"></p>

            </div>
        </div>
    )
}

export default WordAdder;