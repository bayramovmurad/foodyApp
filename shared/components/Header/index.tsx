import Title from "../Title";
import Button from "../Button";
import Language from "../Language";
import Description from "../Description";
import OutlineButton from "../OutlineButton ";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { useRouter } from "next/router";
import { getBasket, getProfileInfo, getRestuarants } from "../../../services";
import { useDebounce } from 'use-debounce'; 
import { useGlobalStore } from "../../../provider/provider";
import swal from "sweetalert";
import styles from './style.module.css'
interface headerTypes {
    isLogin: boolean,
    isBasket: boolean,
    isAvatar: boolean,
    isName: boolean,
    isBottom: boolean
}

export const Header = ({ isLogin , isBasket , isAvatar , isName , isBottom }:headerTypes) => {
    const { push } = useRouter();
    const { setActiveRestaurant } = useGlobalStore();
    const { t, i18n } = useTranslation();
    const [isToken, setIsToken] = useState(false);
    const [isFullName, setIsFullName] = useState("");
    const [isImage, setIsImage] = useState("");
    const [isActiveName, setIsActiveName] = useState("");
    const [isResultBox, setIsResultBox] = useState<boolean>(false);
    const [restaurants, setRestaurants] = useState([]);
    const [searchValue, setSearchValue] = useState(""); 
    const [debouncedSearchValue] = useDebounce(searchValue, 500);
    const [basketData, setBasketData] = useState([])

    useEffect(() => {
        const localItem: any = localStorage?.getItem("token");
        const localUser: any = localStorage?.getItem("userInformation");

        let parsedItem = JSON.parse(localItem);
        let parsedUser = JSON.parse(localUser);
        let fullName = parsedUser?.fullname;
        let str = " ";
        str += parsedUser?.fullname?.split(" ")[0]?.[0] ?? "";
        str += parsedUser?.fullname?.split(" ")[1]?.[0] ?? "";
        let avatar = str.toUpperCase();

        setIsFullName(fullName);
        setIsActiveName(avatar);
        setIsImage(parsedUser?.img_url);
        if (parsedItem?.access_token) {
            setIsToken(true);
        } else {
            setIsActiveName("default value");
        }
    }, [isToken]);

    useEffect(() => {
        const searchRestaurant = async () => {
        if (debouncedSearchValue.length > 0) {
            setIsResultBox(true);
        } else {
            setIsResultBox(false);
        }

        const res = await getRestuarants();
        let restaurantsData = res?.data.result.data.filter((item: any) =>
            item.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
        );
        setRestaurants(restaurantsData);
        };

        searchRestaurant();
    }, [debouncedSearchValue]); 


    const getBasketFunction = async () => {
        const response = await getBasket()
        setBasketData(response?.data.result.data.items);
    }

      useEffect(() => {
        getBasketFunction()
    },[basketData])

    return (    
        <header className="flex flex-col  rounded-s bg-[#f3f4f6] ">
            <div className="sw-full flex justify-center">
                <div className="max-w-[1440px] w-full top flex justify-between pt-[36px] pb-[41px] pr-[89px] pl-[57px]">
                    <div onClick={() => push("/")} className="left flex items-center justify-center">
                        <svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4282 3.38836V7.56436H6.14019V13.1084H14.6362V17.2484H6.14019V26.0684H0.668187V3.38836H15.4282ZM36.068 17.3204C36.068 18.7364 35.828 20.0084 35.348 21.1364C34.892 22.2644 34.256 23.2244 33.44 24.0164C32.624 24.8084 31.664 25.4204 30.56 25.8524C29.456 26.2604 28.268 26.4644 26.996 26.4644C25.724 26.4644 24.536 26.2724 23.432 25.8884C22.352 25.4804 21.416 24.9044 20.624 24.1604C19.832 23.4164 19.208 22.5044 18.752 21.4244C18.296 20.3204 18.068 19.0724 18.068 17.6804C18.068 16.2164 18.296 14.9084 18.752 13.7564C19.232 12.6044 19.88 11.6324 20.696 10.8404C21.512 10.0484 22.472 9.44836 23.576 9.04036C24.68 8.60836 25.868 8.39236 27.14 8.39236C28.412 8.39236 29.588 8.58436 30.668 8.96836C31.772 9.35236 32.72 9.92836 33.512 10.6964C34.304 11.4404 34.928 12.3644 35.384 13.4684C35.84 14.5724 36.068 15.8564 36.068 17.3204ZM30.596 17.5004C30.596 16.5644 30.5 15.7724 30.308 15.1244C30.116 14.4524 29.852 13.9124 29.516 13.5044C29.18 13.0724 28.796 12.7604 28.364 12.5684C27.932 12.3764 27.488 12.2804 27.032 12.2804C26.576 12.2804 26.132 12.3644 25.7 12.5324C25.292 12.7004 24.92 12.9884 24.584 13.3964C24.272 13.8044 24.02 14.3444 23.828 15.0164C23.636 15.6644 23.54 16.4924 23.54 17.5004C23.54 19.2524 23.9 20.5364 24.62 21.3524C25.34 22.1684 26.168 22.5764 27.104 22.5764C27.56 22.5764 27.992 22.4924 28.4 22.3244C28.832 22.1324 29.204 21.8444 29.516 21.4604C29.852 21.0524 30.116 20.5244 30.308 19.8764C30.5 19.2284 30.596 18.4364 30.596 17.5004ZM57.5386 17.3204C57.5386 18.7364 57.2986 20.0084 56.8186 21.1364C56.3626 22.2644 55.7266 23.2244 54.9106 24.0164C54.0946 24.8084 53.1346 25.4204 52.0306 25.8524C50.9266 26.2604 49.7386 26.4644 48.4666 26.4644C47.1946 26.4644 46.0066 26.2724 44.9026 25.8884C43.8226 25.4804 42.8866 24.9044 42.0946 24.1604C41.3026 23.4164 40.6786 22.5044 40.2226 21.4244C39.7666 20.3204 39.5386 19.0724 39.5386 17.6804C39.5386 16.2164 39.7666 14.9084 40.2226 13.7564C40.7026 12.6044 41.3506 11.6324 42.1666 10.8404C42.9826 10.0484 43.9426 9.44836 45.0466 9.04036C46.1506 8.60836 47.3386 8.39236 48.6106 8.39236C49.8826 8.39236 51.0586 8.58436 52.1386 8.96836C53.2426 9.35236 54.1906 9.92836 54.9826 10.6964C55.7746 11.4404 56.3986 12.3644 56.8546 13.4684C57.3106 14.5724 57.5386 15.8564 57.5386 17.3204ZM52.0666 17.5004C52.0666 16.5644 51.9706 15.7724 51.7786 15.1244C51.5866 14.4524 51.3226 13.9124 50.9866 13.5044C50.6506 13.0724 50.2666 12.7604 49.8346 12.5684C49.4026 12.3764 48.9586 12.2804 48.5026 12.2804C48.0466 12.2804 47.6026 12.3644 47.1706 12.5324C46.7626 12.7004 46.3906 12.9884 46.0546 13.3964C45.7426 13.8044 45.4906 14.3444 45.2986 15.0164C45.1066 15.6644 45.0106 16.4924 45.0106 17.5004C45.0106 19.2524 45.3706 20.5364 46.0906 21.3524C46.8106 22.1684 47.6386 22.5764 48.5746 22.5764C49.0306 22.5764 49.4626 22.4924 49.8706 22.3244C50.3026 22.1324 50.6746 21.8444 50.9866 21.4604C51.3226 21.0524 51.5866 20.5244 51.7786 19.8764C51.9706 19.2284 52.0666 18.4364 52.0666 17.5004ZM72.9253 0.328358H78.2533V26.0684H74.5813L74.0413 24.1964H73.8613C73.5253 24.7244 72.9373 25.2404 72.0973 25.7444C71.2813 26.2244 70.2013 26.4644 68.8573 26.4644C67.7293 26.4644 66.6853 26.2604 65.7253 25.8524C64.7653 25.4204 63.9373 24.8204 63.2413 24.0524C62.5453 23.2604 61.9933 22.3124 61.5853 21.2084C61.2013 20.0804 61.0093 18.8204 61.0093 17.4284C61.0093 16.0604 61.1893 14.8244 61.5493 13.7204C61.9093 12.5924 62.4253 11.6444 63.0973 10.8764C63.7933 10.0844 64.6453 9.47236 65.6533 9.04036C66.6613 8.60836 67.8013 8.39236 69.0733 8.39236C69.8653 8.39236 70.6093 8.51236 71.3053 8.75236C72.0253 8.96836 72.5653 9.24436 72.9253 9.58036V0.328358ZM72.9253 13.4684C72.7093 13.1804 72.3733 12.9044 71.9173 12.6404C71.4613 12.3764 70.9573 12.2444 70.4053 12.2444C69.8533 12.2444 69.3373 12.3404 68.8573 12.5324C68.3773 12.7004 67.9453 12.9884 67.5613 13.3964C67.2013 13.8044 66.9133 14.3324 66.6973 14.9804C66.4813 15.6044 66.3733 16.3844 66.3733 17.3204C66.3733 19.1204 66.7213 20.4524 67.4173 21.3164C68.1373 22.1564 69.0613 22.5764 70.1893 22.5764C70.8853 22.5764 71.4613 22.3964 71.9173 22.0364C72.3973 21.6764 72.7333 21.2924 72.9253 20.8844V13.4684ZM81.7548 8.78836H87.5868L90.4308 16.4924L91.5828 20.7044H91.7268L92.8068 16.4204L95.2908 8.78836H100.727L94.4988 26.3924C94.1628 27.3764 93.7668 28.3364 93.3108 29.2724C92.8548 30.2084 92.2908 31.0844 91.6188 31.9004C90.9708 32.7164 90.1788 33.4604 89.2428 34.1324C88.3068 34.8044 87.1788 35.3564 85.8588 35.7884L83.6628 31.6484C85.0788 31.1444 86.2428 30.4244 87.1548 29.4884C88.0908 28.5524 88.7148 27.4724 89.0268 26.2484L89.0988 25.9604L81.7548 8.78836Z" fill="black"/>
                            <path d="M103.644 23.2964C103.644 22.3844 103.944 21.6404 104.544 21.0644C105.168 20.4644 105.9 20.1644 106.74 20.1644C107.58 20.1644 108.3 20.4644 108.9 21.0644C109.5 21.6404 109.8 22.3844 109.8 23.2964C109.8 24.2804 109.5 25.0604 108.9 25.6364C108.3 26.1884 107.58 26.4644 106.74 26.4644C105.9 26.4644 105.168 26.1884 104.544 25.6364C103.944 25.0604 103.644 24.2804 103.644 23.2964Z" fill="#D63626"/>
                        </svg>
                    </div>

                    <div className="center flex items-center justify-center">
                        <ul className="flex gap-[16px] ">
                            <li onClick={() => push("/")} className="cursor-pointer text-[#828282] hover:text-[#D63626]">
                                {
                                    t('home')
                                }
                            </li>
                            <li onClick={() => push("/client/restaurants")} className="cursor-pointer text-[#828282] hover:text-[#D63626]">
                                {
                                    t('restaurants')
                                }
                            </li>
                            <li onClick={() => push("/client/about")} className="cursor-pointer text-[#828282] hover:text-[#D63626]">
                                {
                                    t('about')
                                }
                            </li>
                            <li onClick={() => push("/client/works")} className="cursor-pointer text-[#828282] hover:text-[#D63626]">
                                {
                                    t('howitworks')
                                }
                            </li>
                            <li onClick={() => push("/client/fags")} className="cursor-pointer text-[#828282] hover:text-[#D63626]">
                                {
                                    t('faq')
                                }
                            </li>
                            <li onClick={() => push("/client/offer")} className="cursor-pointer text-[#828282] hover:text-[#D63626]">
                                {
                                    t('cOffer')
                                }
                            </li>
                        </ul>

                    </div>

                    <div className="right flex items-center gap-5 relative">
                        <input 
                            type="search" 
                            placeholder={t('search')}
                            className="rounded-[10px] mr-5 bg-white pt-[14px] pr-[20px] pb-[12px] pl-[20px] text-[#000] placeholder:text[#000] outline-none"
                            onChange={(e) => setSearchValue(e.target.value)}
                        />

                        {
                            isResultBox ? (
                                <div className="absolute left-0 top-16 w-[300px] rounded-lg z-20 bg-white p-4">
                                    {
                                        restaurants?.map((item:any) => (
                                            <div className="flex items-center gap-4 border-b pb-2 pt-2 cursor-pointer"  onClick={() => setActiveRestaurant(item) || push("/client/basket")}>
                                                <img
                                                    src={item.img_url}
                                                    alt="img"
                                                    className="w-[59px] h-[37px] "
                                                />

                                                <div>
                                                    <p className="font-bold text-[14px]">
                                                        {
                                                            item.name
                                                        }
                                                    </p>
                                                    <p className="text-[14px] w-[150px] overflow-x-scroll whitespace-nowrap">
                                                        {
                                                            item.cuisine
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    {
                                        restaurants?.length == 0 ? <p>Tapilmadi</p> : <></>
                                    }
                                </div>
                            ) : <></>
                        }
                        
                        <Language />

                        {
                            !isToken ? (
                                <button onClick={() => push("/client/register")} className="bg-[#D63626] hover:bg-[#a93c3c] flex justify-center items-center text-center py-[6.96px] px-[18px] text-white  rounded-[30px] ml-[27px]">
                                    {
                                        t("signup")
                                    }   
                                </button>
                            ) : (
                                <></>
                            )
                        }

                        {
                            isToken ? (
                                <div onClick={() => push("/client/basket")} className="w-[40px] h-[40px] relative rounded-[100px] bg-[#EB5757] cursor-pointer flex justify-center pt-[1px]">
                                    <img className="w-[32px] h-[32px]" src="/client/basket/basket.svg" alt="" />
                                    
                                    <p className=" w-[16px] h-[16px] flex justify-center items-center text-[11px] text-white absolute right-[-4px] top-[-4px] bg-[#753030] z-10 rounded-full">
                                        {
                                            basketData?.length
                                        }
                                    </p>
                                </div>
                            ) : <></>
                        }

                        {
                            isToken ? (
                                <div onClick={() => push("/client/profile")} className="cursor-pointerm relative rounded-full w-10 h-10 text-lg text-white text-center flex justify-center items-center shadow-md font-semibold hover:scale-95 transition-all duration-500">
                                    {
                                        isActiveName
                                    }
                                    <img src={isImage} className="absolute w-full h-full rounded-full" alt="" />
                                </div>  
                            ) : <></>
                        }

                        {
                            isToken ? (
                                <p className="text-[#333] fs-normal font-medium">
                                    {
                                        isFullName
                                    }
                                </p>
                            ) : <></>
                        }


                    </div>
                </div>  
            </div>

            {
                isBottom ? (
                    <div className="flex justify-center">
                        <div className="max-w-[1440px] w-full bottom pr-[44px] pb-[162px] pl-[56px] flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <Title
                                    value={t('headerTitle')}
                                    size={"60px"}
                                    weight={900}
                                    color={"#181617"}
                                    mwidth={"653px"}
                                />

                                <Description 
                                    value={t('headerDescription')}
                                    mwidth={"510px"}
                                    size={"22px"}
                                    weight={400}
                                    color={"#828282"}
                                />

                                <div className="flex gap-[39px] mt-[42px]">
                                    {
                                        !isToken ? (
                                            <div className="" onClick={() => push("/client/register")}>
                                                <Button
                                                    value={t('register')}
                                                    color={"#FFF"}
                                                    size={"25px"}
                                                    background={"#D63626"}
                                                    width={"220px"}
                                                    height={"70px"}
                                                    isDisabled={false}
                                                    radius={"30px"}
                                                    weight={500}
                                                />
                                            </div>
                                        ) : <></>
                                    }

                                    <OutlineButton
                                        value={t('order')}
                                        color={"#828282"}
                                        size={"25px"}
                                        background={"transparent"}
                                        width={"220px"}
                                        height={"70px"}
                                        isDisabled={false}
                                        radius={"30px"}
                                        weight={500}
                                        border={"2px solid #828282"}
                                    />
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center">
                                <img 
                                    src="/client/burger/burger.svg" 
                                    className="z-[3] relative"
                                    alt="" 
                                />
                                
                                <img 
                                    src="/client/basket/black.svg" 
                                    className="w-[529px] h-[476px] absolute top-0 z-[2]"
                                    alt="" 
                                />
                                
                                <img className={`${styles.burgerImage} absolute top-0 z-10`} src="/client/basket/boxs.svg" alt="" />
                            </div>

                        </div>
                    </div> 
                ) : <>
                </>
            }
        </header>
    )
}

export default Header