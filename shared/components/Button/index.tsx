import React, { FC, ReactNode, CSSProperties, MouseEventHandler } from 'react';

interface ButtonProps {
    value: string | number;
    color: string;
    size: string;
    background: string;
    weight: number;
    width: string;
    height: string;
    isDisabled: boolean;
    radius: string;
    callBack?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
    value,
    color,
    size,
    background,
    weight,
    width,
    height,
    isDisabled,
    radius,
    callBack
}) => {
    const buttonStyle: CSSProperties = {
        color: color,
        fontSize: size,
        background: background,
        width: width,
        height: height,
        borderRadius: radius,
        fontWeight: weight,
    };

    return (
        <button onClick={callBack} disabled={isDisabled} style={buttonStyle}>
            {value}
        </button>
    );
};

export default Button;