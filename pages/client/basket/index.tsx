import OutlineButton from '../../../shared/components/OutlineButton '
import Button from "../../../shared/components/Button";
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'
import Image from "next/image";
import { useGlobalStore } from '../../../provider/provider';
import { addBasket, getProducts , getBasket , deleteBasket , clearBasket } from '../../../services';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const Basket = () => {
    const { back , push } = useRouter()
    const { activeRestaurant } = useGlobalStore();
    const [data, setData] = useState([])
    const [basketData, setBasketData] = useState([])
    const [checkoutTotalPrice, setCheckoutTotalPrice] = useState(0);


    useEffect(() => {
      getProductDetail()
    }, [])

    const getProductDetail = async () => {
      const res = await getProducts();
      const filterData = res?.data.result.data.filter((item: any) => item.rest_id == activeRestaurant.id);
      setData(filterData);
    };

    const addBasketItem = async (id: any) => {
      const basketObj = {
        product_id: id,
      }
      const res = await addBasket(basketObj);
      if(res?.status == 201){
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

    const clearBasketItem = async (id: any) => {
      const basketObj = {
        basket_id: id,
      }
      console.log(basketObj);
      
      const res = await clearBasket(basketObj);
      console.log(res);
    }

    const getBasketFunction = async () => {
      const response = await getBasket()
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
        basketData?.forEach(item => {
            totalPrice += item.price * item.count;
        });
        setCheckoutTotalPrice(totalPrice);
    };

    const checkoutFunction = () => {
      push("/client/checkout")
    }

    return (
      <div className="bg-white">
        <div className="p-[30px]">
          <Header
            isLogin={true}
            isBasket={true}
            isAvatar={true}
            isName={false}
            isBottom={false}
          />
        </div>

        <main className="p-[30px] flex justify-center">
          
          <div className="max-w-[1440px] w-full content">
            <img
              src={activeRestaurant.img_url}
              alt="pizza"
              width={1373}
              height={448}
              className="max-w-[1373px] w-full max-h-[400px]"
            />
            <div className='flex mb-2 border-b border-[#F2F2F2]  justify-between py-[20px] px-[50px]'>
              <div className="left flex flex-col gap-1">
                <p className='restaurantsName text-[#4F4F4F] text-[22px] font-bold'>
                  {
                    activeRestaurant.name
                  }
                </p>
                <p className='place text-[#828282] text-[14px] font-medium'>
                  {
                    activeRestaurant.address
                  }
                </p>
              </div>
              <div className='right flex gap-[50px]'>
                <div>
                  <p className='text-[#828282] text-[18px] font-medium'>
                    Cuisine
                  </p>
                  <p className='text-[#828282] text-[14px] font-medium'>
                    {
                      activeRestaurant.cuisine
                    }
                  </p>
                </div>

                <div className='flex gap-[28px]'>
                  <OutlineButton
                    value={activeRestaurant.delivery_price + " ₼"}
                    color={"#D63626"}
                    size={"14px"}
                    background={"#fff"}
                    width={"72px"}
                    height={"51px"}
                    isDisabled={false}
                    radius={"5px"}
                    weight={500}
                    border={"1px solid #D63626"}
                  />

                  <div onClick={() => back()}>
                    <Button
                      value={"Go Back"}
                      color={"#FFF"}
                      size={"14px"}
                      background={"#D63626"}
                      width={"72px"}
                      height={"52px"}
                      isDisabled={false}
                      radius={"5px"}
                      weight={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex justify-between'>
                  <div className="basketList max-w-[846px] flex flex-col w-full rounded bg-[#F3F4F6] py-[40px] px-[2px]">
                    <p className='text-[#4F4F4F] text-center text-[25px] font-bold mb-[40px]'>
                      Products
                    </p>
                    {
                      data.map((item: any) =>
                        <div className="basketItem border-t border-b border-[#E0E0E0] flex justify-between py-[22px] px-[40px]">
                          <div className='flex gap-[36px]'>
                            <img
                              src={item.img_url}
                              alt=""
                              width={57}
                              height={53}
                            />
                            <div className='flex flex-col gap-[7px]'>
                              <p className='text-[#4F4F4F] font-medium text-[18px]'>
                                {item.name}
                              </p>
                              <p className='text-[#828282] font-bold text-[14px]'>
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <div className='flex gap-[30px] items-center'>
                            <p className='text-[#333] text-[14px] font-medium'>
                              <span className='text-[#828282] text-[16px] font-medium'>From</span> {item.price} 
                            </p>

                            <button onClick={() => addBasketItem(item.id)} className='w-[40px] h-[40px] border-[#BDBDBD] border-[2px] rounded-[50%] flex items-center justify-center'>
                              <span className='text-[#BDBDBD] text-[25px] mt-[-3px]'>
                                +
                              </span>
                            </button>
                          </div>
                        </div>
                      )
                    }
                  </div>
              
                  <div className="checkoutBox max-w-[397px] max-h-[400px] overflow-y-scroll w-full py-[10px] px-[12px] bg-[#F3F4F6] rounded">
                      <p className='text-[#D63626] text-[16px] font-medium mb-[12px]'>
                        {
                          basketData?.length
                        } items
                      </p>

                      {
                        basketData?.map((item:any) => (
                              <div className="checkoutItem border-t border-[#E0E0E0] flex justify-between relative py-[25px]">
                                  <div className='flex items-center'>
                                    <img
                                      src={item.img_url}
                                      alt=""
                                      width={45}
                                      height={45}
                                      className='w-[45px] h-[45px]'
                                    />

                                    <div className='flex justify-center flex-col gap-[6px] ml-[12px]'>
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

                                  <div className='countBox cursor-pointer mr-[25px] flex flex-col bg-[#fff] py-[4px] rounded-[50px] px-[7px]'>
                                    <p className='w-full text-center flex justify-center' onClick={() => removeBasketItem(item.id)}>
                                      -
                                    </p>
                                    <p>
                                      {
                                          item.count
                                      }
                                    </p>
                                    <p className='w-full text-center flex justify-center' onClick={() => addBasketItem(item.id)}>
                                      +
                                    </p>
                                  </div>

                                  <svg onClick={() => clearBasketItem(item.id)} className='absolute cursor-pointer right-0 top-0' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_149_2159)">
                                      <path d="M15.625 16.666H19.7916V18.7493H15.625V16.666ZM15.625 8.33268H22.9166V10.416H15.625V8.33268ZM15.625 12.4993H21.875V14.5827H15.625V12.4993ZM3.12498 18.7493C3.12498 19.8952 4.06248 20.8327 5.20831 20.8327H11.4583C12.6041 20.8327 13.5416 19.8952 13.5416 18.7493V8.33268H3.12498V18.7493ZM5.20831 10.416H11.4583V18.7493H5.20831V10.416ZM10.4166 4.16602H6.24998L5.20831 5.20768H2.08331V7.29102H14.5833V5.20768H11.4583L10.4166 4.16602Z" fill="#BDBDBD" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_149_2159">
                                        <rect width="25" height="25" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                              </div>
                        ))
                      }

                      <div  onClick={() => checkoutFunction()} className='bg-[#D63626] py-[2px] cursor-pointer px-[4px] rounded-[100px] flex justify-between items-center mt-9 '>
                          <p className='text-white text-[16px] font-medium ml-3'>
                            Checkout
                          </p>

                          <Button
                              value={checkoutTotalPrice}
                              color={"#D63626"}
                              size={"16px"}
                              background={"#FFFFFF"}
                              width={"153px"}
                              height={"37px"}
                              isDisabled={false}
                              radius={"100px"}
                              weight={500}
                          />
                      </div>
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

export default Basket;
