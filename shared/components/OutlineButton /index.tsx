import React from 'react'

interface ButtonTypes {
    value: string,
    color: string,
    size: string,
    background: string,
    weight: number,
    width: string,
    height: string;
    isDisabled: boolean,
    radius: string,
    border: string,
}

const OutlineButton = ({ 
    value , color , size , background , weight , width , height , isDisabled , radius , border
}:ButtonTypes) => {
    const buttonStyle = {
        color: color,
        fontSize: size,
        background: background,
        width: width,
        height: height,
        borderRadius: radius,
        fontWeight: weight,
        border: border,
    }
    return (
    <button disabled={isDisabled} style={buttonStyle}>
        {
            value
        }
    </button>
  )
}

export default OutlineButton