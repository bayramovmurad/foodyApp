import React from 'react'

interface ButtonTypes {
    value: string | number,
    color: string,
    size: string,
    background: string,
    weight: number,
    width: string,
    height: string;
    isDisabled: boolean,
    radius: string,
}

const Button = ({ 
    value , color , size , background , weight , width , height , isDisabled , radius
}:ButtonTypes) => {
    const buttonStyle = {
        color: color,
        fontSize: size,
        background: background,
        width: width,
        height: height,
        borderRadius: radius,
        fontWeight: weight
    }
    return (
    <button disabled={isDisabled} style={buttonStyle}>
        {
            value
        }
    </button>
  )
}

export default Button