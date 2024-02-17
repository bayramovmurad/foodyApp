import React, { FC, ChangeEvent } from "react";

interface InputTypes {
    type: string,
    id: string,
    name: string,
    placeholder: string,
    value: string,
    disabled?: any,
    onInputChange: (name: string, value: string) => void,
}

const InputComponent: FC<InputTypes> = ({ type , placeholder , id , value , disabled , name , onInputChange }) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        
        onInputChange(name, inputValue);
    };
    
    return (
        <>
            <input
                id={id}
                name={name}
                type={type} 
                value={value} 
                onChange={handleChange}
                placeholder={placeholder}
                className="bg-white rounded py-[11px] px-[22px] outline-none placeholder:text-[#828282] placeholder:text-[20px] placeholder:font-normal text-[20px] text-[#828282] font-normal "
            />
        </>
    )
}

export default InputComponent;