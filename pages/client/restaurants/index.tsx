import RestaurantCard from '../../../shared/components/RestaurantCard/index'
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'


import Image from "next/image";
import { useEffect, useState } from 'react';
import { getCategory , getRestuarants } from '../../../services/index'

import { useGlobalStore } from '../../../provider/provider';
import { useRouter } from 'next/router';

export default function Restaurants() {
    const { push } = useRouter()
    const { setActiveRestaurant } = useGlobalStore();
    const [originalData,setOriginalData] = useState([])
    const [categoryData,setCategoryData] = useState([])
    const [restaurantsData,setRestaurantsData] = useState([])
    const [loadingRestaurant, setLoadingRestaurant] = useState(true)
    const [noProductTitle,setNoProductTitle] = useState("")
    const renderCategory = async () => {
        const response = await getCategory()
        setCategoryData(response?.data.result.data);
    }

    useEffect(() => {
        renderCategory()
    },[])

    useEffect(() => {
        renderRestaurant()
    }, [])


    const renderRestaurant = async () => {
        setLoadingRestaurant(true)
        const response = await getRestuarants()
        setRestaurantsData(response?.data.result.data);
        setOriginalData(response?.data.result.data)
        setLoadingRestaurant(false)
    }


    const filterRestaurants = (id: string | null) => {
        let item = originalData.filter((item:any) => item.category_id == id)
        if(item.length == 0){
            setNoProductTitle("Restoran tapilmadi .")
        }else{
            setNoProductTitle("")
        }
        setRestaurantsData(item)
    }

    const sendRestaurant = (detail:any) => {
        try {
            setActiveRestaurant(detail)
            
            push(`/client/basket`)
        }catch (err) { 
            console.log({ err });
        }
    }

    const allData = () => {
        setRestaurantsData(originalData)
        setNoProductTitle("")
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
                <div className='max-w-[1440px] w-full flex gap-[40px]'>
                    <div className="left max-w-[251px] w-full py-[40px] pl-[25px] pr-[25px] bg-[#F3F4F6] flex flex-col gap-[25px]">
                        <p className=' font-bold text-[18px] cursor-pointer' onClick={allData}>
                            All Data
                        </p>
                        {
                            categoryData?.map((item:any) => (
                                <div key={item.id} onClick={() => filterRestaurants(item.id)} className="filterItem flex gap-[17px] cursor-pointer">
                                    <img
                                        src={item.img_url}
                                        alt="pizza"
                                        width={35}
                                        height={28}
                                        className='w-[35px] h-[35px] rounded-full'
                                    />
                                    <p className="text-[#333] text-[20px] font-semibold whitespace-nowrap max-w-[120px] overflow-x-scroll">
                                        {
                                            item.name
                                        }
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                    {
                        loadingRestaurant ? (
                            <div className="flex justify-center items-center w-full h-[400px]">
                                <span className="loader">Loading</span>
                            </div>
                        ) : <></>
                    }

                    <div className="cardBody grid grid-cols-4 gap-[40px]">
                        {
                            restaurantsData?.map((item:any) => (
                                <RestaurantCard
                                    callBack={sendRestaurant}
                                    key={item.id}
                                    detail={item}
                                />  
                            ))
                        }

                        <p className='w-full text-center font-semibold text-[20px]'>
                            {
                                noProductTitle
                            }
                        </p>
                    </div>

                </div>
            </main>
        

            <Footer
                isTop={false}
            />
        </div>
    );
};

