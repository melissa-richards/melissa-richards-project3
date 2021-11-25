import React from "react";
import './App.css';
import Button from "./components/button";
import TextInput from "./components/textInput";
import useCustomHook from "./hooks/useCustomHook";
import Card from "./components/card"


//this component is for the form,api and button components to be passed into?
// do i need to add aria label??
// if you have time
// i just checked and the projects due at 10 am so im fine i dont want to loose points for acessiblity 
// do it for practice. points dont matter true
function Api() {

    const { randomWord, userInput, apiGet, handleSubmit, clearInput, handleInput, handleExit } = useCustomHook()


    return (
        <div className="App container">
            <main>
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="newName">Gamer Tag Generator</label>
                    <TextInput
                        id="newName"
                        placeholder="type your name"
                        value={userInput}
                        onChange={handleInput}
                        aria-label="type your name"
                    />
                    <div>
                        <Button
                            type='submit'
                            onClick={apiGet}
                            text="GENERATE"
                        />
                        <Button
                            type='button'
                            onClick={clearInput}
                            text="RESET"
                        />
                    </div>
                </form>
                {randomWord.map(word => {
                    return (
                        <Card
                            key={word.word}
                            word={word.word}
                            definition={word.definition}
                            exit={handleExit}
                        />
                    )

                }
                )}
            </main>
        </div>
    );
};

export default Api