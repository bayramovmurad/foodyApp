import Description from "../shared/components/Description";
import Header from "../shared/components/Header/index";
import Footer from '../shared/components/Footer/index'
import Title from "../shared/components/Title";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation, Pagination , Autoplay , Mousewheel, Keyboard } from 'swiper/modules';
import { getOffers, getRestuarants } from "../services";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGlobalStore } from "../provider/provider";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { onSnapshot, collection, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from "../server/configs/firebase";



const Home = () => {
    const { t } = useTranslation();
    const { push } = useRouter()
    const { setActiveRestaurant } = useGlobalStore();
    const [data, setData] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);

    const getOfferData = async () => {
        const res = await getOffers();
        setData(res?.data.result.data);
    }

    useEffect(() => {
        getOfferData();
    }, []);

    const adversitingCollectionRef = collection(db, 'Adversitings');

    const getAdversitingData = async () => {
        const unsub = onSnapshot(adversitingCollectionRef, (querySnapshot) => {
            const items: any = [];
            querySnapshot.forEach((doc) => {
              items.push({...doc.data(), id: doc.id});
            });
            setRestaurantData(items);
          });
      
          return () => {
            unsub();
          };
    }

    useEffect(() => {
        getAdversitingData();
    }, []);

    return (
        <div className="bg-white">
            <div className="p-[30px]">
                <Header
                    isLogin={false}
                    isBasket={false}
                    isAvatar={false}
                    isName={false}
                    isBottom={true}
                />
            </div>

            <main className="p-[30px] mb-[300px]">
                <section className=" relative justify-center" id="">
                    <p className="text-[#4f4f4f]  text-center font-semibold text-[28px] mb-3">
                        Our Reclams
                    </p>
                    <div className="banner bg-white  h-[121px] py-4 px-5  flex gap-4 justify-between">
                        {
                            restaurantData.length >= 4 ? (
                                <Swiper
                                spaceBetween={10}
                                slidesPerView={2}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                                >
                                    {
                                        restaurantData?.map((item:any) => (
                                            <SwiperSlide>
                                                <div onClick={() => push(item.url)} className="cursor-pointer w-[73px] relative h-[73px]  text-[12px] text-center rounded-full flex justify-center items-center">
                                                    <img
                                                        src={item.img_url}
                                                        className="absolute w-[73px] border-[0.5px] border-[#dbdbdb] p-[2px] object-cover h-[73px] rounded-full z-5"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                
                                </Swiper>
                            ) : (
                                restaurantData?.map((item:any) => (
                                    <div onClick={() => push(item.url)} className="cursor-pointer w-[73px] relative h-[73px]  text-[12px] text-center rounded-full flex justify-center items-center">
                                        <img
                                            src={item.img_url}
                                            className="absolute w-[73px] border-[0.5px] border-[#dbdbdb] p-[2px] object-cover h-[73px] rounded-full z-5"
                                        />
                                    </div>
                                ))
                            )
                        }
                        
                    </div>
                </section>

                <section className="bg-white pt-[50px] w-full flex justify-center" id="features">
                    <div className="flex w-full flex-col justify-center items-center text-center max-w-[1440px] ">
                        <Title
                            value={t("features")}
                            size={"40px"}
                            weight={900}
                            color={"#181617"}
                            mwidth={"204px"}
                        />

                        <Description
                            value={t("lorem")}
                            mwidth={"780px"}
                            size={"22px"}
                            weight={400}
                            color={"#828282"}
                        />

                        <div className="featuresBoxes flex justify-around w-full mt-[45px]">
                            <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                                <Image
                                    src="/client/features/features2.svg"
                                    alt="features Image"
                                    width={241}
                                    height={223}
                                />
                                <Title
                                    value="Discount Boucher"
                                    size={"30px"}
                                    weight={700}
                                    color={"#4F4F4F"}
                                    mwidth={"281px"}
                                />

                                <Description
                                    value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                                    mwidth={"273px"}
                                    size={"18px"}
                                    weight={400}
                                    color={"#828282"}
                                />
                            </div>

                            <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                                <Image
                                    src="/client/features/features.svg"
                                    alt="features Image"
                                    width={241}
                                    height={223}
                                />
                                <Title
                                    value="Fresh healthy Food"
                                    size={"30px"}
                                    weight={700}
                                    color={"#4F4F4F"}
                                    mwidth={"281px"}
                                />

                                <Description
                                    value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                                    mwidth={"273px"}
                                    size={"18px"}
                                    weight={400}
                                    color={"#828282"}
                                />
                            </div>

                            <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                                <Image
                                    src="/client/features/features3.svg"
                                    alt="features Image"
                                    width={241}
                                    height={223}
                                />
                                <Title
                                    value="Fast Home Delivery"
                                    size={"30px"}
                                    weight={700}
                                    color={"#4F4F4F"}
                                    mwidth={"281px"}
                                />

                                <Description
                                    value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                                    mwidth={"273px"}
                                    size={"18px"}
                                    weight={400}
                                    color={"#828282"}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-[150px] w-full flex justify-center items-center flex-col gap-[80px]">
                    {
                        data.map((item:any) => (
                            <div className="max-w-[1440px] flex justify-between w-full">
                                <div className="flex flex-col gap-[30px] mt-[30px]">
                                    <Title
                                        value={item.name}
                                        size={"50px"}
                                        weight={900}
                                        color={"#181617"}
                                        mwidth={"653px"}
                                    />

                                    <Description
                                        value={item.description}
                                        mwidth={"499px"}
                                        size={"22px"}
                                        weight={400}
                                        color={"#828282"}
                                    />
                                </div>

                                <img
                                    src={item.img_url}
                                    alt='kfc'
                                    width={636}
                                    height={676}
                                />
                            </div>
                        ))
                    }
                </section>

                <section className="bg-white pt-[50px] w-full flex justify-center" id="features">
                    <div className="flex w-full flex-col justify-center items-center text-center max-w-[1440px] ">
                        <Title
                            value={t("popular")}
                            size={"40px"}
                            weight={900}
                            color={"#181617"}
                            mwidth={"394px"}
                        />

                        <Description
                            value={t("lorem")}
                            mwidth={"780px"}
                            size={"22px"}
                            weight={400}
                            color={"#828282"}
                        />

                        <div className="featuresBoxes flex justify-around w-full mt-[45px]">
                            <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                                <Image
                                    src="/client/popular/burger.svg"
                                    alt="features Image"
                                    width={241}
                                    height={223}
                                />
                                <Title
                                    value="Dubble Chees"
                                    size={"30px"}
                                    weight={700}
                                    color={"#4F4F4F"}
                                    mwidth={"281px"}
                                />

                                <Description
                                    value="Lorem ipsum is placeholder  commonly used in the graphic s"
                                    mwidth={"273px"}
                                    size={"18px"}
                                    weight={400}
                                    color={"#828282"}
                                />
                            </div>

                            <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                                <Image
                                    src="/client/popular/pizza.svg"
                                    alt="features Image"
                                    width={241}
                                    height={223}
                                />
                                <Title
                                    value="Margarita"
                                    size={"30px"}
                                    weight={700}
                                    color={"#4F4F4F"}
                                    mwidth={"281px"}
                                />

                                <Description
                                    value="Lorem ipsum is placeholder  commonly used in the graphic "
                                    mwidth={"273px"}
                                    size={"18px"}
                                    weight={400}
                                    color={"#828282"}
                                />
                            </div>

                            <div style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                                <Image
                                    src="/client/popular/twister.svg"
                                    alt="features Image"
                                    width={241}
                                    height={223}
                                />
                                <Title
                                    value="Twister Menu"
                                    size={"30px"}
                                    weight={700}
                                    color={"#4F4F4F"}
                                    mwidth={"281px"}
                                />

                                <Description
                                    value="Lorem ipsum is placeholder  commonly used in the graphic "
                                    mwidth={"273px"}
                                    size={"18px"}
                                    weight={400}
                                    color={"#828282"}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer
                isTop={true}
            />
        </div>
    );
};

export default Home;

