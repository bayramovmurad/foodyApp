import Sidebar from '../../../shared/components/Sidebar/index'
import Header from "../../../shared/components/Header/index"
import Footer from '../../../shared/components/Footer/index'
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import Label from '../../../shared/components/Label';
import { toArr } from '../../../utils/toArr/index';

import { useEffect, useState } from 'react';
interface FormDataTypes {
  adress: string;
  number: string;
}
const Checkout = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    adress: "",
    number: "",
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

  let saveData = (e: any) => {
      e.preventDefault();

      console.log("work");
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
              <div className="max-w-[1440px] w-full flex gap-4">
                <Sidebar />

                <div className="content bg-[#F3F4F6] py-[42px] px-9 w-full">
                <div className="content bg-[#F3F4F6] py-[42px] px-9 max-w-[618px] w-[100%] max-h-[515px]">
                    <FormTitle
                        value={"Checkout"}
                    />

                    <form className='flex justify-between gap-12 max-w-full h-full mt-8' action="">
                          <div className="left h-full w-full flex flex-col gap-6">
                              <div className='flex flex-col'>
                                  <Label value={"Delivery Address"} forId={"adress"} />
                                  <Input type={"text"} id={"adress"} name={"adress"} placeholder={"Ataturk 45 Ganclik Baku"} value={formData.adress} onInputChange={handleInputChange} />
                              </div>

                              <div className='flex flex-col'>
                                  <Label value={"Contact Number"} forId={"number"} />
                                  <Input type={"text"} id={"number"} name={"number"} placeholder={"+994"} value={formData.number} onInputChange={handleInputChange} />
                              </div>

                              <div className='flex flex-col'>
                                  <label className="text-[#4F4F4F] text-[18px] font-semibold mb-1" htmlFor="">
                                    Payment Method
                                  </label>
                                  <div className='flex gap-[70px] items-center mt-5'>
                                    <div className='flex gap-2'>
                                      <input type="radio" id="contactChoice2" name="contact" value="phone" />
                                      <label htmlFor="contactChoice2" className='ml-2 text-[#828282] text-[14px]'>
                                        pay at the door
                                      </label>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                      <input type="radio" id="contactChoice3" name="contact" value="mail" />
                                      <label htmlFor="contactChoice3" className='text-[#828282] text-[14px]'>
                                        pay at the door by credit card
                                      </label>
                                    </div>
                                  </div>
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

                <div className="content bg-[hsl(220,14%,96%)] py-[42px] px-9 max-w-[397px] w-[100%] max-h-[372px] flex flex-col  text-center gap-[20px] items-center">
                    <p className='text-[#828282] text-[18px] font-medium'>
                      Your Order
                    </p>

                    <div className="flex flex-col gap-[10px]">
                        <div>
                            <div className="orderItem flex gap-[40px] justify-between items-center">
                                <p className='text-[#828282] text-[14px] font-normal flex items-center'>
                                  <span className='text-[18px] font-medium mr-1'>
                                      1
                                  </span>
                                  x Papa John’s Pizza Restaurant
                                </p>

                                <p className='text-[#828282] text-[14px] font-normal'>
                                  $8.00
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="orderItem flex gap-[40px] justify-between items-center">
                                <p className='text-[#828282] text-[14px] font-normal flex items-center'>
                                  <span className='text-[18px] font-medium mr-1'>
                                      1
                                  </span>
                                  x Papa John’s Pizza Restaurant
                                </p>

                                <p className='text-[#828282] text-[14px] font-normal'>
                                  $8.00
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="orderItem flex gap-[40px] justify-between items-center">
                                <p className='text-[#828282] text-[14px] font-normal flex items-center'>
                                  <span className='text-[18px] font-medium mr-1'>
                                      1
                                  </span>
                                  x Papa John’s Pizza Restaurant
                                </p>

                                <p className='text-[#828282] text-[14px] font-normal'>
                                  $8.00
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="totalPrice border-t flex justify-between items-center p-[20px] border-[#E0E0E0] w-full ">
                        <p className='text-[#828282] font-roboto text-18 font-medium leading-70 tracking-0.54'>
                          Total
                        </p>

                        <p className='text-[#828282] font-sans text-14 font-normal leading-70 tracking-0.42'>
                          $17.80
                        </p>
                    </div>
                </div>
              </div>
        </main>
       

        <Footer
            isTop={false}
        />
    </div>
  )}

export default Checkout;
