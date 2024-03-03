import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { doc, onSnapshot, setDoc, collection } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import OutlineButton from '../../../shared/components/OutlineButton ';
import Button from "../../../shared/components/Button";
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index';
import { useGlobalStore } from '../../../provider/provider';
import { addBasket, getProducts, getBasket, deleteBasket, clearBasket, getOrders } from '../../../services';
import { db } from '../../../server/configs/firebase';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

interface Comment {
  id: string;
  byName: string;
  comment: string;
  date: string;
}

const Basket: FC = () => {
  const { t } = useTranslation();
  const { back, push } = useRouter();

  const { activeRestaurant } = useGlobalStore();
  const [data, setData] = useState<any[]>([]);
  const [basketData, setBasketData] = useState<any[]>([]);
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState<number>(0);
  const [clearId, setClearId] = useState<string>("");
  const [commentValue, setCommentValue] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    const res = await getProducts();
    const filterData = res?.data.result.data.filter((item: any) => item.rest_id == activeRestaurant.id);
    setData(filterData);
  };

  const addBasketItem = async (id: string) => {
    const basketObj = {
      product_id: id,
    };
    reLogin();
    const res = await addBasket(basketObj);
    if (res?.status == 201) {
      getBasketFunction();
    }
  };

  const date: Date = new Date();

  function reLogin() {
    const loginDate: number | null = parseInt(
      localStorage.getItem("loginDate") || "",
      10
    );
    const currentSecond: number = date.getTime();
    const timeDifference: number = currentSecond - (loginDate || 0);

    if (!localStorage.getItem("userInformation")) {
      swal("Error", "You need to be logged in !", "error");
      setTimeout(() => {
        push("/client/login");
      }, 750);
      return;
    }

    if (timeDifference / 1000 >= 3600) {
      swal("Error", "Your browsing session has expired !", "error");
      setTimeout(() => {
        push("/client/login");
      }, 750);
      localStorage.removeItem("userInformation");
      localStorage.removeItem("token");
    } else if (timeDifference / 1000 >= 3540) {
      swal("Error", "You will be logged out from the site in the next 1 minutes.!", "error");
    }
  }

  const removeBasketItem = async (id: string) => {
    const basketObj = {
      product_id: id,
    };
    const res = await deleteBasket(basketObj);
    if (res?.status == 200) {
      getBasketFunction();
    }
  };

  const clearBasketItem = async (id: string) => {
    const res = await clearBasket(id);
    if (res?.status == 200) {
      getBasketFunction();
    }
  };

  const getBasketFunction = async () => {
    const response = await getBasket();
    setBasketData(response?.data.result.data.items);
    setClearId(response?.data.result.data.id);
  };

  useEffect(() => {
    getBasketFunction();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [basketData]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    basketData?.forEach((item: any) => {
      totalPrice += item.price * item.count;
    });
    setCheckoutTotalPrice(totalPrice);
  };

  const checkoutFunction = () => {
    push("/client/checkout");
  };

  const colletionRef = collection(db, 'comments');

  const addComment = async () => {
    const res:any = await getOrders()
    console.log(res?.status);
    
    if(res?.data?.result?.data.length == 0){
      swal("Error","Commentelave etmek ucun en azi bir sifaris etmelisiz")
    }
    else{
      if (localStorage.getItem("userInformation")) {
        if (activeRestaurant.length == 0) {
          swal("Error", "Comment Elave etmek ucun active restaurant daxil olun", "error");
        } else if (commentValue.length == 0) {
          swal("Error", "Comment Elave edin", "error");
        }
        else {
          let info: any = localStorage.getItem("userInformation");
          const currentDate = new Date();
  
          const newSchool: Comment = {
            id: activeRestaurant.id,
            byName: JSON.parse(info)?.fullname,
            comment: commentValue,
            date: `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
          };
  
          const schoolRef = doc(colletionRef);
          setDoc(schoolRef, newSchool);
          setCommentValue("");
        }
      } else {
        reLogin();
      }
    }

  };

  useEffect(() => {
    const unsub = onSnapshot(colletionRef, (querySnapshot) => {
      const items: Comment[] = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data() as Comment);
      });
      let data = items.filter((item: Comment) => item.id == activeRestaurant.id);
      setComments(data);
    });
    return () => {
      unsub();
    };
  }, []);

  const addFavourites = (item:any) => {
    console.log(item);
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

      <main className="p-[30px] flex flex-col justify-center items-center">

        <div className="max-w-[1440px] w-full content">
          <img
            src={activeRestaurant.img_url}
            alt="pizza"
            width={1373}
            height={448}
            className="max-w-[1373px] w-full max-h-[400px] object-cover"
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
                    value={t("goback")}
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
                {
                  t("products")
                }
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
              {
                data.length == 0 ? (
                  <p className="text-center text-[#4F4F4F] font-bold text-[20px]">
                    {activeRestaurant.name} Restoranina aid Product yoxdur
                  </p>
                ) : <></>
              }
            </div>

            {basketData?.length !== 0 ? (
              <div className="checkoutBox max-w-[500px] max-h-[400px] overflow-y-scroll w-full py-[10px] px-[12px] bg-[#F3F4F6] rounded">
                <div className='flex justify-between'>
                  <p className='text-[#D63626] text-[16px] font-medium mb-[12px]'>
                    {
                      basketData?.length
                    } items
                  </p>

                  <svg onClick={() => clearBasketItem(clearId)} className='cursor-pointer right-0 top-0' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                {
                  basketData?.map((item: any) => (
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


                    </div>
                  ))
                }

                <div onClick={() => checkoutFunction()} className='bg-[#D63626] py-[2px] cursor-pointer px-[4px] rounded-[100px] flex justify-between items-center mt-9 '>
                  <p className='text-white text-[16px] font-medium ml-3'>
                    {
                      t('Checkouts')
                    }
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
            ) : <img className='w-[500px] h-[600px] object-cover' src="/client/basket/a.svg" alt="" />
            }
          </div>

        </div>

        <div className='mt-10 flex flex-col justify-start items-center  gap-3'>
          <div className='flex justify-center gap-3'>
            <input onChange={(e) => setCommentValue(e.target.value)} value={commentValue} placeholder='Enter Comment' className='border-[#F3F4F6] outline-none px-3 border rounded-[10px] w-[470px] h-[40px] font-bold text-[#4F4F4F]' type="text" />
            <button onClick={addComment} className='bg-[#F3F4F6] w-[170px] h-[40px] rounded-[12px] font-bold text-[#4F4F4F]'>
              Add Comment
            </button>
          </div>
          <div className='flex flex-col justify-center gap-3 max-w-[652px] w-full'>
            {
              comments.map((item: Comment) => (
                <div className='flex justify-between relative items-center text-center py-2 border-b border-[#4F4F4F]'>
                  <p className='text-black font-semibold'>
                    {
                      item.comment
                    }
                  </p>

                  <div className='flex flex-col justify-end items-end'>
                    <p className='text-black font-semibold text-[14px]'>
                      by {
                        item.byName
                      }
                    </p>

                    <p className='text-[12px] text-gray-500'>
                      {
                        item.date
                      }
                    </p>
                  </div>
                </div>
              ))
            }
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