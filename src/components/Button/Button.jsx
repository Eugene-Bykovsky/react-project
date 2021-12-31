import React from 'react'
import './Button.css'

const Button = (props) => {
    const {onClickFunc, buttonClass, text} = props
    return (
        <button onClick={onClickFunc} className={buttonClass}>
            {text}
        </button>
    )
}

export default Button
