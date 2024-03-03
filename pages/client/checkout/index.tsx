import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import swal from 'sweetalert';
import { IoMdStar } from 'react-icons/io';
import FormTitle from '../../../shared/components/FormTitle/index';
import Sidebar from '../../../shared/components/Sidebar/index';
import Header from '../../../shared/components/Header/index';
import Footer from '../../../shared/components/Footer/index';
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import Label from '../../../shared/components/Label';
import { toArr } from '../../../utils/toArr/index';
import { addOrder, getBasket } from '../../../services';
import { doc, onSnapshot, setDoc, collection } from 'firebase/firestore';
import { db } from '../../../server/configs/firebase';

interface FormDataTypes {
  adress: string;
  number: string;
}

const Checkout: FC = () => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const [basketData, setBasketData] = useState<any[]>([]);
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState<number>(0);
  const [activePaymentType, setActivePaymentType] = useState<number>(0);
  const [activeBasketId, setActiveBasketId] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isOrder, setIsOrder] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataTypes>({
    adress: '',
    number: '',
  });
  const [question, setQuestion] = useState<boolean>(false);
  const [rating, setRating] = useState<any>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [ratings,setRatings] = useState([])
  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    let response = toArr(formData);
    let filteredItem = response.some((item) => item[1] == '');
    setDisabled(filteredItem);
  });

  let saveData = async (e: any) => {
    e.preventDefault();

    if (
      formData.adress == '' ||
      formData.number == '' ||
      activeBasketId == '' ||
      basketData.length == 0
    ) {
      swal('Error', 'Formu Doldurun', 'error');
    } else {
      const orderInfo = {
        basket_id: activeBasketId,
        delivery_address: formData.adress,
        contact: formData.number,
        payment_method: activePaymentType,
      };
      const res: any = await addOrder(orderInfo);
      if (res?.status == 201) {
        setQuestion(true);
      } else {
        swal('Error', 'Something went wrong', 'error');
      }
    }
  };

  const getBasketFunction = async () => {
    const response = await getBasket();
    setActiveBasketId(response?.data.result.data.id);
    setBasketData(response?.data.result.data.items);
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

  const paymentType = (e: any) => {
    setActivePaymentType(e.target.value);
  };

  const colletionRef = collection(db, 'ratings')

  const sendRating = () => {
    const ratingData:any = {
      count: rating,
    };

    const schoolRef = doc(colletionRef);
    setDoc(schoolRef, ratingData);
    swal("Gonderildi")
    setQuestion(false)
    
    setTimeout(() => {
      setIsOrder(true)
    },1500)
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
            <FormTitle value={t('Checkouts')} />

            {!isOrder ? (
              <form
                className="flex justify-between gap-12 max-w-full h-full mt-8"
                action=""
              >
                <div className="left h-full w-full flex flex-col gap-6">
                  <div className="flex flex-col">
                    <Label value={t('adresss')} forId={'adress'} />
                    <Input
                      type={'text'}
                      id={'adress'}
                      name={'adress'}
                      placeholder={'Ataturk 45 Ganclik Baku'}
                      value={formData.adress}
                      onInputChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <Label value={t('number')} forId={'number'} />
                    <Input
                      type={'number'}
                      id={'number'}
                      name={'number'}
                      placeholder={'+994'}
                      value={formData.number}
                      onInputChange={handleInputChange}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="text-[#4F4F4F] text-[18px] font-semibold mb-1"
                      htmlFor=""
                    >
                      {t('method')}
                    </label>
                    <div className="flex gap-[70px] items-center mt-5">
                      <div className="flex gap-2">
                        <input
                          onChange={paymentType}
                          type="radio"
                          id="contactChoice2"
                          name="contact"
                          value="0"
                        />
                        <label
                          htmlFor="contactChoice2"
                          className="ml-2 text-[#828282] text-[14px]"
                        >
                          {t('atdoor')}
                        </label>
                      </div>

                      <div className="flex gap-2 items-center">
                        <input
                          onChange={paymentType}
                          type="radio"
                          id="contactChoice3"
                          name="contact"
                          value="1"
                        />
                        <label
                          htmlFor="contactChoice3"
                          className="text-[#828282] text-[14px]"
                        >
                          {t('credit')}
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    value={t('save')}
                    color={'#FFF'}
                    size={'18px'}
                    background={'#6FCF97'}
                    width={'100%'}
                    height={'53px'}
                    radius={'4px'}
                    weight={600}
                    callBack={saveData}
                    isDisabled={false}
                  />
                </div>
              </form>
            ) : (
              <></>
            )}

            {isOrder ? (
              <div className="flex flex-col justify-center items-center mt-10 ml-10">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="200" height="200" rx="100" fill="#6FCF97" />
                  <g clip-path="url(#clip0_158_6399)">
                    <path
                      d="M88.25 124.062L62.1875 98L53.3125 106.812L88.25 141.75L163.25 66.75L154.438 57.9375L88.25 124.062Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_158_6399">
                      <rect
                        width="150"
                        height="150"
                        fill="white"
                        transform="translate(32 23)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-[#4F4F4F] text-[30px] font-medium max-w-[385px]">
                  Your order has been received
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>

          {!isOrder ? (
            <div className="content bg-[hsl(220,14%,96%)] py-[42px] px-9 max-w-[397px] w-[100%] max-h-[372px] flex flex-col  text-center gap-[20px] items-center">
              <p className="text-[#828282] text-[18px] font-medium">
                {t('yourorder')}
              </p>

              <div className="flex flex-col w-full px-[5px] gap-[10px]">
                {basketData?.map((item: any) => (
                  <div key={item.id}>
                    <div className="orderItem flex gap-[40px] justify-between items-center">
                      <p className="text-[#828282] text-[14px] font-normal flex items-center">
                        <span className="text-[18px] font-medium mr-1">
                          {item.count}
                        </span>
                        x {item.name}
                      </p>

                      <p className="text-[#828282] text-[14px] font-normal">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}

                {basketData?.length == 0 ? (
                  <p className="text-[#828282]">
                    Heleki hec bir sifarişiniz yoxdur
                  </p>
                ) : (
                  <></>
                )}
              </div>

              <div className="totalPrice border-t flex justify-between items-center p-[20px] border-[#E0E0E0] w-full ">
                <p className="text-[#828282] font-roboto text-18 font-medium leading-70 tracking-0.54">
                  {t('total')}
                </p>

                <p className="text-[#828282] font-sans text-14 font-normal leading-70 tracking-0.42">
                  {checkoutTotalPrice}
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}

          {question ? (
            <div className=" fixed bg-[#00000040] w-full h-full left-0 top-0 flex rating justify-center items-center">
              <div className="bg-white w-[600px] h-[400px] rounded-xl py-5 px-5 flex flex-col items-center justify-center relative">
                <p className="text-[#4f4f4f] text-[23px] font-medium absolute top-[25px] left-[25px]">
                  Bizi Dəyərləndirin
                </p>

                <div className='flex justify-center items-center w-full cursor-pointer'>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                      <label className='cursor-pointer'>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                        />
                        <IoMdStar
                          key={i}
                          className="star"
                          size={60}
                          color={
                            ratingValue <= (hover || rating)
                              ? '#2B2073'
                              : '#e4e5e9'
                          }
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                      </label>
                    );
                  })}
                </div>

                <button onClick={sendRating} disabled={rating == null ? true : false} className='bg-green-500 py-3 px-7 rounded-lg absolute bottom-[25px] right-[25px] text-white '>
                  Send
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </main>

      <Footer isTop={false} />
    </div>
  );
};

export default Checkout;