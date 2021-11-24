import "./styles.css"
const TextInput = ({id, placeholder, value, onChange}) => {
    
    return (
        <input
            type="text"
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxlength="8"
        />
    )
}

export default TextInput