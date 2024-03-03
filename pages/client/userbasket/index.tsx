import FormTitle from '../../../shared/components/FormTitle/index'
import Sidebar from '../../../shared/components/Sidebar/index'
import Header from "../../../shared/components/Header/index"
import Footer from '../../../shared/components/Footer/index'
import Button from '../../../shared/components/Button';


import Image from 'next/image';
import { addBasket, clearBasket, deleteBasket, getBasket } from '../../../services';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const userBasket = () => {
  const { t } = useTranslation()
  const { push } = useRouter()
  const [basketData, setBasketData] = useState([])
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState(0);
  const [clearId,setClearId] = useState("")

  const getBasketFunction = async () => {
    const response = await getBasket()
    setBasketData(response?.data.result.data.items);
    setClearId(response?.data.result.data.id);
  }
  useEffect(() => {
      getBasketFunction()
  },[])



  const addBasketItem = async (id: any) => {
    const basketObj = {
      product_id: id,
    }
    const res = await addBasket(basketObj);
    if(res?.status == 201){
      getBasketFunction()
    }
  }


  const clearBasketItem = async (id: any) => {
    const res = await clearBasket(id);
    if(res?.status == 200){
      getBasketFunction()
    }
  }



  const removeBasketItem = async (id: any) => {
      const basketObj = {
        product_id: id,
      }
      const res = await deleteBasket(basketObj);
      if(res?.status == 200){
        getBasketFunction()
      }
  }

  
  const calculateTotalPrice = () => {
      let totalPrice = 0;
      basketData?.forEach((item:any) => {
          totalPrice += item.price * item.count;
      });
      setCheckoutTotalPrice(totalPrice);
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [basketData]);



  const sendCheckout = () => {
    push("/client/checkout")
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

                  <div className="content bg-[#F3F4F6] py-[42px] px-9 w-full">
                      <FormTitle
                          value={t("yourbasket")}
                      />
                        <div className="checkoutBox max-w-full w-full py-[20px] bg-[#F3F4F6] rounded">
                            

                            {
                              basketData?.length !== 0 ? (
                                <div>
                                  <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center text-[#D63626] text-[16px] font-medium mb-[12px]'>
                                      <svg className="mt-[-10px]" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_610_3424)">
                                          <path d="M24.5088 11.1697H19.162L14.2729 3.60906C14.0608 3.28635 13.7036 3.125 13.3464 3.125C12.9892 3.125 12.632 3.28635 12.4199 3.62059L7.53078 11.1697H2.18399C1.57006 11.1697 1.06775 11.6883 1.06775 12.3222C1.06775 12.4259 1.07891 12.5296 1.1124 12.6334L3.94765 23.3173C4.20438 24.2854 5.06389 25 6.09083 25H20.602C21.6289 25 22.4884 24.2854 22.7563 23.3173L25.5916 12.6334L25.625 12.3222C25.625 11.6883 25.1227 11.1697 24.5088 11.1697ZM13.3464 6.32903L16.4719 11.1697H10.2209L13.3464 6.32903ZM20.602 22.6949L6.10199 22.7065L3.64626 13.4747H23.0577L20.602 22.6949ZM13.3464 15.7798C12.1185 15.7798 11.1139 16.817 11.1139 18.0848C11.1139 19.3526 12.1185 20.3899 13.3464 20.3899C14.5743 20.3899 15.5789 19.3526 15.5789 18.0848C15.5789 16.817 14.5743 15.7798 13.3464 15.7798Z" fill="#D63626"/>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_610_3424">
                                            <rect width="25.625" height="25" fill="white"/>
                                          </clipPath>
                                        </defs>
                                      </svg>

                                      {
                                        basketData?.length
                                      } items
                                    </div>

                                    <svg onClick={() => clearBasketItem(clearId)} className='cursor-pointer right-[20px] top-[20px]' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g clip-path="url(#clip0_149_2159)">
                                        <path d="M15.625 16.666H19.7916V18.7493H15.625V16.666ZM15.625 8.33268H22.9166V10.416H15.625V8.33268ZM15.625 12.4993H21.875V14.5827H15.625V12.4993ZM3.12498 18.7493C3.12498 19.8952 4.06248 20.8327 5.20831 20.8327H11.4583C12.6041 20.8327 13.5416 19.8952 13.5416 18.7493V8.33268H3.12498V18.7493ZM5.20831 10.416H11.4583V18.7493H5.20831V10.416ZM10.4166 4.16602H6.24998L5.20831 5.20768H2.08331V7.29102H14.5833V5.20768H11.4583L10.4166 4.16602Z" fill="#BDBDBD"/>
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_149_2159">
                                          <rect width="25" height="25" fill="white"/>
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                  {
                                    basketData?.map((item:any) => (
                                      <div key={item.id} className="checkoutItem border-t border-[#E0E0E0] flex justify-between relative py-[25px]">
                                          <div className='flex'>
                                            <img
                                                src={item.img_url}
                                                alt="ads" 
                                                width={105}
                                                height={45}
                                            />

                                            <div className='flex justify-center flex-col gap-[6px] ml-[12px] cursor-pointer'>
                                              <p className='text-[#4F4F4F] font-medium text-[16px]'>
                                                {
                                                  item.name
                                                }
                                              </p>
                                              <p className='text-[#828282] font-medium text-[14px]'>
                                                {
                                                  item.price
                                                }
                                              </p>
                                            </div>
                                          </div>

                                          <div className='countBox cursor-pointer mr-[100px] flex flex-col bg-[#fff] py-[4px] rounded-[50px] px-[7px]'>
                                              <p  onClick={() => removeBasketItem(item.id)}>
                                                -
                                              </p>
                                              <p>
                                                {
                                                  item.count
                                                }
                                              </p>
                                              <p onClick={() => addBasketItem(item.id)}>
                                                +
                                              </p>
                                          </div>
                                      </div>
                                    ))
                                  }

                                  <div onClick={sendCheckout} className='bg-[#D63626] cursor-pointer py-[8px] px-[20px] rounded-[100px] flex justify-between items-center mt-9 '>
                                      <p className='text-white text-[22px] font-medium'>
                                        {
                                          t("Checkouts")
                                        }
                                      </p>

                                      <Button
                                          value={checkoutTotalPrice}
                                          color={"#D63626"}
                                          size={"20px"}
                                          background={"#FFFFFF"}
                                          width={"189px"}
                                          height={"43px"}
                                          isDisabled={false}
                                          radius={"100px"}
                                          weight={500}
                                      />
                                  </div>
                                </div>
                              ) : <img className='w-[500px] h-[550px] object-cover' src="/client/basket/a.svg" alt="" />
                            }

                            
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

export default userBasket;
