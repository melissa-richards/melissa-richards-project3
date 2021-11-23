import { useState } from 'react';


function useData () {
    const [randomWord, setRandomWord] = useState([])

    const apiGet = () => {
        fetch('https://random-words-api.vercel.app/word')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                console.log(json[0].word);
                const state = [...randomWord]
                state.unshift(userInput + json[0].word);
                setRandomWord(state);
            });
    };
    console.log(randomWord);

    const [userInput, setUserInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const nameTag = { userInput };
        console.log({ nameTag }, JSON.stringify(nameTag));
    }
    
    const clearInput = () => {
        setUserInput('');
        setRandomWord([]);
    }

    const handleInput = (e) => setUserInput(e.target.value)

    return {randomWord, setRandomWord, userInput, setUserInput, apiGet, handleSubmit, clearInput, handleInput}
}

export default useData