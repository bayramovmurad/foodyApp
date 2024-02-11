import React, { FC, useEffect, useState } from 'react';
import FormTitle from '../../../shared/components/FormTitle/index';
import Sidebar from '../../../shared/components/Sidebar/index';
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index';
import Button from '../../../shared/components/Button/index';
import Input from '../../../shared/components/Input/index';
import Label from '../../../shared/components/Label/index';
import { toArr } from '../../../utils/toArr/index';
import { profileClient } from '../../../services';

interface FormDataTypes {
  number: string;
  username: string;
  fullname: string;
  email: string;
  adress: string;
}

const Profile: FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    number: "",
    username: "",
    fullname: "",
    email: "",
    adress: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    let response = toArr(formData);
    let filteredItem = response.some((item) => item[1] == "");
    setDisabled(filteredItem);
  });



  let saveData = async (e: any) => {
    e.preventDefault();
    const userInformation: any = localStorage.getItem("userInformation");
    const parseData = JSON.parse(userInformation);

    let data = {
        email: "string@gmail.com",
        username: "string",
        img_url: "string",
        phone: 98312,
        fullname: "string"
    }
    const res = await profileClient(data)
    console.log(res);
  };

  return (
    <div className="bg-white">
      <div className="p-[30px]">
        <Header
          isLogin={true}
          isBasket={true}
          isAvatar={true}
          isName={true}
          isBottom={false}
        />
      </div>

      <main className="p-[30px] flex justify-center">
        <div className="max-w-[1440px] w-full flex gap-4">
          <Sidebar />

          <div className="content h-full bg-[#F3F4F6] pt-[42px] pb-[70px] px-9 w-full flex flex-col">
            <FormTitle
              value={"Profile"}
            />

            <div className='flex justify-center items-center mb-8'>
              <div className='bg-white w-[146px] h-[141px] rounded-[50%] flex flex-col cursor-pointer justify-center items-center'>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7374_4504)">
                    <path d="M48.375 25.1C46.675 16.475 39.1 10 30 10C22.775 10 16.5 14.1 13.375 20.1C5.85 20.9 0 27.275 0 35C0 43.275 6.725 50 15 50H47.5C54.4 50 60 44.4 60 37.5C60 30.9 54.875 25.55 48.375 25.1ZM35 32.5V42.5H25V32.5H17.5L29.125 20.875C29.625 20.375 30.4 20.375 30.9 20.875L42.5 32.5H35Z" fill="#6FCF97" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7374_4504">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className='text-[#929292] text-[18px] font-medium'>
                  upload
                </span>
              </div>
            </div>

            <form className='flex justify-between gap-12 max-h-[330px] h-full' action="">
              <div className="left h-full w-full flex flex-col gap-4 justify-between">
                <div className='flex flex-col'>
                  <Label value={"Contact"} forId={"number"} />
                  <Input type={"text"} id={"number"} name={"number"} placeholder={"+994"} value={formData.number} onInputChange={handleInputChange} />
                </div>

                <div className='flex flex-col'>
                  <Label value={"Username"} forId={"username"} />
                  <Input type={"text"} id={"username"} name={"username"} placeholder={"Rahimli Sarkhan"} value={formData.username} onInputChange={handleInputChange} />
                </div>

                <div className='flex flex-col'>
                  <Label value={"Full Name"} forId={"fullname"} />
                  <Input type={"text"} id={"fullname"} name={"fullname"} placeholder={"Sarkhan Rahimli"} value={formData.fullname} onInputChange={handleInputChange} />
                </div>
              </div>

              <div className="right h-full w-full flex flex-col gap-4 justify-between">
                <div className='flex flex-col'>
                  <Label value={"Email"} forId={"Email"} />
                  <Input type={"email"} id={"Email"} name={"email"} placeholder={"rahimlisarkhan@gmail.com"} value={formData.email} onInputChange={handleInputChange} />
                </div>

                <div className='flex flex-col'>
                  <Label value={"Address"} forId={"Address"} />
                  <Input type={"text"} id={"Address"} name={"adress"} placeholder={"Ataturk 45 Ganclik Baku"} value={formData.adress} onInputChange={handleInputChange} />
                </div>

                <Button
                  value={"Save"}
                  color={"#FFF"}
                  size={"18px"}
                  background={"#6FCF97"}
                  width={"100%"}
                  height={"53px"}
                  isDisabled={disabled}
                  radius={"4px"}
                  weight={600}
                  callBack={saveData}
                />
              </div>
            </form>
          </div>
        </div>
      </main>


      <Footer
        isTop={false}
      />
    </div>
  );
};

export default Profile;