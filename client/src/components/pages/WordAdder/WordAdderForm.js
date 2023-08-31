import React, { useState } from 'react';
import './WordAdder.css';

function WordAdderForm(props) {
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
                })
                .catch((err) => {
                    console.log(err.message);
                });
    }

    function handleChange(e) {
        setWord(e.target.value);
    }

    function handleSearch(e) {
        e.preventDefault();
        console.log("handling a search here");
        fetchData(word);
        setWord("");
    }

    return (
        <>
            <form className="word-form" onSubmit={handleSearch}>
                <input className="wordName" placeholder="Lookup your word" value={word} onChange={handleChange} />
                <button type="submit" className="searchBtn">Search</button>
            </form>
        </>
    )
}

export default WordAdderForm;