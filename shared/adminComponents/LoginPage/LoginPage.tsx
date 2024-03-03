import Button from "../../components/Button";
import Input from "../../components/Input"
import Label from "../../components/Label"
import Language from "../../components/Language"

import swal from 'sweetalert';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
interface FormDataTypes {
    username: string;
    password: string;
}

const LoginPage = () => {
    const { push } = useRouter()
    const { t } = useTranslation()
    const [isDisabled,setIsDisabled] = useState(true)
    const [formData, setFormData] = useState<FormDataTypes>({
        username: "",
        password: "",
    });

    const handleInputChange = (name: string, value: string) => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    useEffect(() => {
        if(formData.username == "" || formData.password == ""){
            setIsDisabled(true)
        }else{
            setIsDisabled(false)
        }
    },[formData])

    const saveData = () => {
        if(formData.username == "admin" && formData.password == "admin"){
            localStorage.setItem("adminToken","true")
            swal("Düzgün Ad ve Şifrə");
            setTimeout(() => {
                push("Dashboard")
            }, 2500);
        }else{
            swal("Oops!", "Yanliş Ad ve ya Şifrə", "error");
        }
    }
    return (
        <div className="">
            <div className="w-[102.96px] h-[22.06px] text-center pt-[57.23px] pl-[32.04px]"><span className="text-neutral-100 text-[28px] font-extrabold font-['Mukta'] leading-normal tracking-wide">Foody</span><span className="text-yellow-500 text-[28px] font-extrabold font-['Mukta'] leading-normal tracking-wide">.</span></div>
                <div className="md:mt-[198px] mt-[75.23px]  lg:min-w-[830px] md:w-[700px] w-[320px] mx-auto  md:flex  ">
                    <div className="md:w-[425px] w-[320px] h-[411px] md:bg-gray-700 flex flex-col justify-center items-center">
                        <div style={{ fontFamily: "monospace" }} className="w-[337px] h-[42px] text-center text-stone-300 text-[29px] font-bold mb-[41px]">
                            {
                                t('loginHeadTitle')
                            }
                        </div>
                        <div className="max-w-[318.80px] w-full mb-[26px] login">
                            <Input type={"text"} id={"username"} name={"username"} placeholder={`${t('loginUserName')}`} value={formData.username} onInputChange={handleInputChange} />
                        </div>
                        <div className="max-w-[318.80px] w-full mb-[26px] login">
                            <Input type={"password"} id={"username"} name={"password"} placeholder={t('loginPassword')} value={formData.password} onInputChange={handleInputChange} />
                        </div>
                        <div className="max-w-[318.80px] w-full mb-[26px] login">
                            <Button
                                value={`${t('loginSaveTitle')}`}
                                color={"#FFF"}
                                size={"18px"}
                                background={"#C035A2"}
                                width={"100%"}
                                height={"53px"}
                                isDisabled={isDisabled}
                                radius={"4px"}
                                weight={600}
                                callBack={saveData}
                            />
                        </div>
                    </div>

                    <div className="md:w-[405px] w-[320px]  h-[411px] md:bg-white flex justify-center items-center relative">
                        <div className="absolute right-[10px] top-[10px]">
                            <Language />
                        </div>
                        <img className="md:w-[346.04px] w-[320.04px] h-[303.75px] rounded-[14px]" src="/adminImg/LoginPage/LoginRight.svg" />
                    </div>
               </div>
        </div>
    )
}
export default LoginPage