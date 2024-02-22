import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import Image from "next/image";
import { register } from "../../../services";
import { isEmail } from '../../../utils/isEmail/index';
import Language from "../../../shared/components/Language";
import Input from "../../../shared/components/Input";
import Label from "../../../shared/components/Label";
import Button from "../../../shared/components/Button";
import type { NextPage } from "next";
import swal from "sweetalert";

interface FormDataTypes {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const { push } = useRouter();
  const [formData, setFormData] = useState<FormDataTypes>({
    fullname: "",
    username: "",
    email: "",
    password: ""
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveData = async () => {
    const isValidEmail = isEmail(formData.email);

    if (Object.values(formData).some(value => value === '')) {
      swal("Oops","Formu Doldurun !","error");
    } else if (!isValidEmail) {
      swal("Email Error","Duzgun Email Daxil Edin","error");
    } else {
      const response = await register(formData);

      if (response?.status === 200) {
        swal("Register Olundu");
        setTimeout(() => {
          push("/client/login");
        }, 1400);
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />

      <header className="w-full p-[30px] flex justify-center">
        <div className="max-w-[1373px] w-full rounded flex justify-between bg-[#EB5757] py-[30px] px-[40px]">
          <div>
            <Image
              src="/mate/logo/white/logo.svg"
              alt="logo"
              width={134}
              height={52}
            />
          </div>

          <Language />
        </div>
      </header>

      <main className="w-full p-[30px] flex justify-center">
        <div className="flex gap-10 w-full max-w-[1373px]">
          <div className="left rounded bg-[#EB5757] w-[50%] flex justify-center items-center">
            <img
              src='/client/login/image.svg'
              alt='login'
            />
          </div>

          <div className="right flex flex-col items-center gap-[50px] text-center w-full py-[100px] max-w-[579px]">
            <div className="switched flex gap-[60px]">
              <p onClick={() => push("/client/login")} className="text-[#828282] text-3xl not-italic cursor-pointer font-normal leading-6">
                Login
              </p>

              <p onClick={() => push("/client/register")} className="text-[#EB5757] text-3xl not-italic cursor-pointer font-normal leading-6">
                Register
              </p>
            </div>

            <div className="w-full">
              <div className='customInput flex flex-col justify-start text-left'>
                <Label value={"Full Name"} forId={"fullname"} />
                <Input type={"text"} id={"fullname"} name={"fullname"} placeholder={"Enter Full name"} value={formData.fullname} onInputChange={handleInputChange} />
              </div>
              <div className='customInput flex flex-col justify-start text-left mt-5'>
                <Label value={"Username"} forId={"username"} />
                <Input type={"text"} id={"username"} name={"username"} placeholder={"Enter User name"} value={formData.username} onInputChange={handleInputChange} />
              </div>
              <div className='customInput flex flex-col justify-start text-left mt-5'>
                <Label value={"Email"} forId={"email"} />
                <Input type={"text"} id={"email"} name={"email"} placeholder={"Enter Email"} value={formData.email} onInputChange={handleInputChange} />
              </div>
              <div className='customInput flex flex-col justify-start text-left mt-5 mb-[72px]'>
                <Label value={"Password"} forId={"password"} />
                <Input type={"password"} id={"password"} name={"password"} placeholder={"Enter Password"} value={formData.password} onInputChange={handleInputChange} />
              </div>

              <Button
                value={"Register"}
                color={"#FFF"}
                size={"18px"}
                background={"#EB5757"}
                width={"100%"}
                height={"53px"}
                radius={"4px"}
                weight={600}
                callBack={saveData} isDisabled={false}              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;