import React from "react";
import './App.css';
import { Button } from "./components/button";
import TextInput from "./components/textInput";
import useCustomHook from "./hooks/useCustomHook";
import Card from "./components/card"

function Api() {

    const { randomWord, userInput, apiGet, handleSubmit, clearInput, handleInput } = useCustomHook()


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
                    />
                    <Button
                        onClick={apiGet}
                        text="GENERATE" />
                    <Button
                        onClick={clearInput}
                        text="RESET"
                    />
                </form>
                {randomWord.map(word =>
                    {
                    console.log(word)
                    return (
                        <Card
                            key={word.word}
                            word={word.word}
                            definition={word.definition}
                        />
                    )
                    
                }
                )}
            </main>
        </div>
    );
};

export default Api