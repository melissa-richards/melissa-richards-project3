import { useState } from 'react';
// this page is a massive custom hook to do everything in one function this is so I can remember the value of the state at the moment the user is using the app


// function to store custom hook.. 
// declaring a apiGet var to fetch the random word api 
// once it fetches the api, use .then to convert? the response to a json
//.then with the json add another function to define the result
// inside the result reach into the api and pull the word and definition from the array

function useData() { 
    const [randomWord, setRandomWord] = useState([])
    const apiGet = () => {
        fetch('https://random-words-api.vercel.app/word')
            .then((response) => response.json())
            .then((json) => {
                const result = { word: userInput + json[0].word, definition: json[0].definition }
                setRandomWord([result, ...randomWord]);
            })
            .catch(() => {
                alert('ooopsies something went wrong!')
            })
    };

    //make a use state variable for user input from the form
    const [userInput, setUserInput] = useState('');
    //create a function to update the state var and 
    const handleSubmit = (event) => {
        event.preventDefault();
        apiGet();
    } 

    //filters through the returned results and remove the object 
    const handleExit = (removeWord) => { 
        const updatedWords = randomWord.filter((wordObject) => {
            return (wordObject.word !== removeWord)
        })
        setRandomWord([...updatedWords])
    }


    //clears the state.
    const clearInput = () => { 
        setUserInput('');
        setRandomWord([]);
    }
    //saves the user's input 
    const handleInput = (e) => setUserInput(e.target.value) 

    return { randomWord, setRandomWord, userInput, setUserInput, apiGet, handleSubmit, clearInput, handleInput, handleExit }
}

export default useData