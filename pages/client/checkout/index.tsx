import FormTitle from '../../../shared/components/FormTitle/index'
import Sidebar from '../../../shared/components/Sidebar/index'
import Header from "../../../shared/components/Header/index"
import Footer from '../../../shared/components/Footer/index'
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import Label from '../../../shared/components/Label';
import { toArr } from '../../../utils/toArr/index';

import { useEffect, useState } from 'react';
import { addOrder, getBasket } from '../../../services';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';
interface FormDataTypes {
  adress: string;
  number: string;
}

const Checkout = () => {
  const { t } = useTranslation()
  const { push } = useRouter()
  const [basketData, setBasketData] = useState([])
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState(0);
  const [activePaymentType,setActivePaymentType] = useState(0)
  const [activeBasketId,setActiveBasketId] = useState("")
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

  let saveData = async (e: any) => {
      e.preventDefault();
      console.log(activeBasketId);
    
      if(formData.adress == "" || formData.number == "" || activeBasketId == ""){
        swal("Error","Formu Doldurun","error")
      }
      else{
        const orderInfo = {
          basket_id: activeBasketId,
          delivery_address: formData.adress,
          contact: formData.number,
          payment_method: 0
        }
        const res:any = await addOrder(orderInfo)
        if(res?.status == 201){
            push("/client/orders")

          return
        }else{
          swal("Error","Something went wrong","error")
        }
      }
  };



  const getBasketFunction = async () => {
    const response = await getBasket()
    setActiveBasketId(response?.data.result.data.id);
    setBasketData(response?.data.result.data.items);
  }

  useEffect(() => {
      getBasketFunction()
  },[])

  useEffect(() => {
    calculateTotalPrice();
  }, [basketData]);
  
  const calculateTotalPrice = () => {
      let totalPrice = 0;
      basketData?.forEach((item:any) => {
          totalPrice += item.price * item.count;
      });
      setCheckoutTotalPrice(totalPrice);
  };

  const paymentType = (e:any) => {
    setActivePaymentType(e.target.value);
  }


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

                <div className="content bg-[#F3F4F6] py-[42px] px-9 max-w-[618px] w-[100%] max-h-[515px]">
                    <FormTitle
                        value={t('Checkouts')}
                    />

                    <form className='flex justify-between gap-12 max-w-full h-full mt-8' action="">
                          <div className="left h-full w-full flex flex-col gap-6">
                              <div className='flex flex-col'>
                                  <Label value={t("adresss")} forId={"adress"} />
                                  <Input type={"text"} id={"adress"} name={"adress"} placeholder={"Ataturk 45 Ganclik Baku"} value={formData.adress} onInputChange={handleInputChange} />
                              </div>

                              <div className='flex flex-col'>
                                  <Label value={t("number")} forId={"number"} />
                                  <Input type={"number"} id={"number"} name={"number"} placeholder={"+994"} value={formData.number} onInputChange={handleInputChange} />
                              </div>

                              <div className='flex flex-col'>
                                  <label className="text-[#4F4F4F] text-[18px] font-semibold mb-1" htmlFor="">
                                      {
                                        t("method")
                                      }
                                  </label>
                                  <div className='flex gap-[70px] items-center mt-5'>
                                    <div className='flex gap-2'>
                                      <input onChange={paymentType} type="radio" id="contactChoice2" name="contact" value="0" />
                                      <label htmlFor="contactChoice2" className='ml-2 text-[#828282] text-[14px]'>
                                        {
                                          t("atdoor")
                                        }
                                      </label>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                      <input onChange={paymentType} type="radio" id="contactChoice3" name="contact" value="1" />
                                      <label htmlFor="contactChoice3" className='text-[#828282] text-[14px]'>
                                        {
                                          t("credit")
                                        }
                                      </label>
                                    </div>
                                  </div>
                              </div>

                              <Button
                                  value={t("save")}
                                  color={"#FFF"}
                                  size={"18px"}
                                  background={"#6FCF97"}
                                  width={"100%"}
                                  height={"53px"}
                                  radius={"4px"}
                                  weight={600}
                                  callBack={saveData} 
                                  isDisabled={false}                              
                              />
                          </div>
                    </form>
                </div>

                <div className="content bg-[hsl(220,14%,96%)] py-[42px] px-9 max-w-[397px] w-[100%] max-h-[372px] flex flex-col  text-center gap-[20px] items-center">
                    <p className='text-[#828282] text-[18px] font-medium'>
                      {
                        t("yourorder")
                      }
                    </p>

                    <div className="flex flex-col w-full px-[5px] gap-[10px]">
                        {
                            basketData?.map((item:any) => (
                              <div key={item.id}>
                                  <div className="orderItem flex gap-[40px] justify-between items-center">
                                      <p className='text-[#828282] text-[14px] font-normal flex items-center'>
                                        <span className='text-[18px] font-medium mr-1'>
                                            {
                                              item.count
                                            }
                                        </span>x { 
                                          item.name
                                        }
                                      </p>

                                      <p className='text-[#828282] text-[14px] font-normal'>
                                        {
                                          item.price
                                        }
                                      </p>
                                  </div>
                              </div>
                            ))
                        }
                    </div>
                    
                    <div className="totalPrice border-t flex justify-between items-center p-[20px] border-[#E0E0E0] w-full ">
                        <p className='text-[#828282] font-roboto text-18 font-medium leading-70 tracking-0.54'>
                          {
                            t("total")
                          }
                        </p>

                        <p className='text-[#828282] font-sans text-14 font-normal leading-70 tracking-0.42'>
                          {
                            checkoutTotalPrice
                          }
                        </p>
                    </div>
                </div>
              </div>
        </main>
       

        <Footer
            isTop={false}
        />
    </div>
  );
};

export default Checkout;
