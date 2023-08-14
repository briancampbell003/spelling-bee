import React, { useState } from 'react';
import './WordAdder.css';

function WordAdder() {
    const [word, setWord] = useState('');

    const fetchData = (word) => {
        fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=4013f53d-9186-47c1-acb8-17287689092c')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                        let word = data[0].meta.id;
                        let partOfSpeech = data[0].fl;
                        let etymology = data[0].et[0][1];
                        let definition1 = data[0].shortdef[0];
                        let definition2 = data[0].shortdef[1];
                        let definition3 = data[0].shortdef[2];
                    console.log('YOUR WORD IS', word, "WHICH MEANS", definition1, 'OR', definition2, 'OR', definition3, ". IT IS A ", partOfSpeech, "WITH ORIGINS ", etymology);
                })
                .catch((err) => {
                    console.log(err.message);
                });
    }

    function handleSearch(e) {
        e.preventDefault();
        console.log("handling a search here");
        fetchData(word);
    }

    return (
        <div>
            <h1>Add a word to your pool</h1>
            <form className="word-form" onSubmit={handleSearch}>
                <input className="wordName" placeholder="Lookup your word" value={word} onChange={e => setWord(e.target.value)} />
                <button type="submit" className="searchBtn">Search</button>
            </form>

            <div className="wordResult">
                <p className="returnedWord"></p>
                <p className="returnedMoreDate"></p>

            </div>
        </div>
    )
}

export default WordAdder;