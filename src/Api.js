//put imputs at the top
import React from "react";
import { useState } from 'react';
import './app.css';

//a function to hold my api, submit gets the calue calls the api then returns it 

function Api() {

    const [randomWord, setRandomWord] = useState('')



    const apiGet = () => {
        fetch('https://random-words-api.vercel.app/word')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                console.log(json[0].word);
                setRandomWord(json[0].word);
            });
        };
        console.log(randomWord);


    // this event will fire everytime there is a change in the input it is attached to 
    // const handleChange = (event) => {
    //     //get react to updat the state of APP component and set it to whatever is curently the value of the input field
    //     setUserInput(event.target.value);
        
    // }
    


    const [userInput, setUserInput] = useState('');

    //a function to take in the event object and refrence it on the form
    //prefent it from refreshing
    const handleSubmit = (event) => {
        event.preventDefault();
        //create a new object to store the name
        const nameTag = { userInput };
        console.log({ nameTag }, JSON.stringify(nameTag));
    }


    return (
        <div className="App wrapper">
            <header>
                <h1>Namer</h1>
            </header>
            
            <main>
                <form class="form" onSubmit={handleSubmit}>
                    <label htmlFor="newName">Gamer Tag Generator</label>
                    <input
                        type="text"
                        id="newName"
                        
                        //use the value attribute to se the state of the input// userInput state to keep track of input as it changes
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        
                    />
                    <button onClick={apiGet}>GENERATE</button>
                    
                </form>
                    <p>{ userInput }{ randomWord }</p>
            </main>
        </div>
    );
};

export default Api