import React from 'react'

const Button = ({bgColor, textColor, text, onClick}) => {
    const buttonStyle = {
        backgroundColor: bgColor,
        color: textColor,
        padding: '10px 20px',
        fontSize: '1em',
        margin: '5px',
        border: 'none',
        borderRadius: '4px',
        width: '30vw',
        cursor: 'pointer'

    }
    return (
        <button
        style = {buttonStyle}
        onClick = {onClick}>{text}</button>
    )
}

export default Button