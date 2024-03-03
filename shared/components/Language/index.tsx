import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const Language = () => {
    const [isActive, setIsActive] = useState(false);
    const { i18n } = useTranslation();
    const activeLanguage = i18n.language; 
    const handleActive = () => {
        setIsActive(!isActive);
    };

    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng);
        setIsActive(false); 
    };

    const languages = ['en', 'az'].filter(lng => lng !== activeLanguage)

    return (
        <div>
            <div onClick={handleActive} className="relative cursor-pointer">
                    <p>
                        <img 
                            src={i18n.language == "az" ? "/mate/language/az.svg" : "/mate/language/eng.svg"} 
                            className="w-[41px] h-[41px]"
                            alt="error"
                        />
                    </p>

                    {
                        isActive ? (
                            <div className={`flex flex-col absolute py-1 bg-white ${isActive ? "top-[50px] px-1" : ''} z-10`}>
                                {languages.map(lng => (
                                    <div className="cursor-pointer" key={lng} onClick={() => changeLanguage(lng)}>
                                        <img 
                                            src={lng == "az" ? "/mate/language/az.svg" : "/mate/language/eng.svg"} 
                                            className="w-[41px] h-[41px]"
                                            alt="error"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : <></>
                    }
            </div>
        </div>
    )
}

export default Language