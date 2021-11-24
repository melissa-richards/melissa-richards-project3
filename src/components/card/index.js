import "./styles.css"
function Card({ word, definition }) {
    return (
        <>
            <div className="cardContainer">
                <p className="cardWord">{word}</p>
                <p className="cardDefinition">{definition}</p>
            </div>
        </>
    );

};

export default Card