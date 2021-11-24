import "./styles.css"
function Card({ word, definition, exit }) {

    const handleCopy = () => {
        navigator.clipboard.writeText(word)
    }


    return (
        <>
            <div className="cardContainer">
                <div className="copyExit">
                    <p className="cardWord">{word}</p>
                    <button className="copy" onClick={handleCopy}><i className="fas fa-copy"></i></button>
                    <button className="exit" onClick={() => exit(word)}>X</button>
                </div>
                <div className="wordDefinition">
                    <p className="cardDefinition">{definition}</p>
                </div>
            </div>
        </>
    );

};

export default Card