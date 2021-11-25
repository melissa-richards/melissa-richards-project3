import "./styles.css"
//
function Button ({onClick, text, type = 'button', ...props}) {
    return (
        <button type={type} className='button' onClick={onClick} {...props}>{text}</button>
    );

};

export default Button