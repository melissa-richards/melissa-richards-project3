import { useState } from 'react';


function useData () {
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

    const [userInput, setUserInput] = useState('');

    //a function to take in the event object and refrence it on the form
    //prefent it from refreshing
    const handleSubmit = (event) => {
        event.preventDefault();
        //create a new object to store the name
        const nameTag = { userInput };
        console.log({ nameTag }, JSON.stringify(nameTag));
    }
    
    const clearInput = () => {
        setUserInput('');
        setRandomWord('');
    }

    const handleInput = (e) => setUserInput(e.target.value)

    return {randomWord, setRandomWord, userInput, setUserInput, apiGet, handleSubmit, clearInput, handleInput}
}

export default useData