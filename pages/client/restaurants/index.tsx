import RestaurantCard from '../../../shared/components/RestaurantCard/index'
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'


import Image from "next/image";
import { useEffect, useState } from 'react';
import { getProducts , getRestuarants } from '../../../services/index'

import { useGlobalStore } from '../../../provider/provider';
import { useRouter } from 'next/router';

const Restaurants = () => {
    const { push } = useRouter()
    const { setActiveProduct } = useGlobalStore();
    const [originalData,setOriginalData] = useState([])
    const [productsData,setProductsData] = useState([])
    const [restaurantsData,setRestaurantsData] = useState([])

        
    const renderProducts = async () => {
        const response = await getProducts()
        console.log(response);
        setProductsData(response?.data.result.data);
        setOriginalData(response?.data.result.data)
    }

    useEffect(() => {
        renderProducts()
    },[])

    useEffect(() => {
        renderRestaurant()
    }, [])


    const renderRestaurant = async () => {
        const response = await getRestuarants()
        console.log(response);
        setRestaurantsData(response?.data.result.data);
    }


    const filterRestaurants = (title: string | null) => {
        let item = originalData.filter((item:any) => item.rest_id == title)
        setProductsData(item)
    }

    const sendRestaurant = (detail:any) => {

        try {
            setActiveProduct((prev:any) => [...prev,detail])
            push("/client/basket")
            console.log(detail);
            
        }catch (err) { 
            console.log({ err });
        }
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
                        <p className=' font-bold text-[18px]' onClick={() => setProductsData(originalData)}>
                            All Data
                        </p>
                        {
                            restaurantsData?.map((item:any) => (
                                <div key={item.id} onClick={() => filterRestaurants(item.id)} className="filterItem flex gap-[17px] cursor-pointer">
                                    <Image
                                        src="/client/minifood/pizza.svg"
                                        alt="pizza"
                                        width={25}
                                        height={28}
                                    />
                                    <p className="text-[#333] text-[20px] font-semibold">
                                        {
                                            item.name
                                        }
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="cardBody grid grid-cols-4 gap-[40px]">
                        {
                            productsData?.map((item) => (
                                <RestaurantCard
                                    callBack={sendRestaurant}
                                    key={item.id}
                                    detail={item}
                                />  
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

export default Restaurants;