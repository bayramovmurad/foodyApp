import Image from "next/image";
import { useEffect, useState } from 'react';
import { getProducts } from '../../../services/index'
import { getProducts, getRestuarants } from '../../../services/index'
const Restaurants = () => {
    const [productsData,setProductsData] = useState([])
    const [restaurantsData,setRestaurantsData] = useState([])

    const [originalData, setOriginalData] = useState([])
    const [productsData, setProductsData] = useState([])
    const [restaurantsData, setRestaurantsData] = useState([])

    const renderProducts = async () => {
        const response = await getProducts()
        setProductsData(response?.data.result.data);
        setOriginalData(response?.data.result.data)
    }

    useEffect(() => {
        renderProducts()
    },[productsData])
        renderRestaurant()
    }, [])


    const renderRestaurant = async () => {
        const response = await getProducts()
        setProductsData(response?.data.result.data);
        setRestaurantsData(response?.data.result.data);
    }

    useEffect(() => {
        renderRestaurant()
    },[restaurantsData])


    const filterRestaurants = (title: string | null) => {
        let item = originalData.filter((item: any) => item.description == title)
        setProductsData(item)
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
                    <div className="filterItem flex gap-[17px] cursor-pointer">
                        <Image
                            src="/client/minifood/pizza.svg"
                            alt="pizza"
                            width={25}
                            height={28}
                        />
                        <p className="text-[#333] text-[20px] font-semibold">
                            Chinese
                        </p>
                    <div className="left max-w-[251px] w-full py-[40px] pl-[25px] pr-[25px] bg-[#F3F4F6] flex flex-col gap-[25px]">
                        {
                            restaurantsData.map((item) => (
                                <div key={item.id} onClick={() => filterRestaurants(item.description)} className="filterItem flex gap-[17px] cursor-pointer">
                                    <Image
                                        src="/client/minifood/pizza.svg"
                                        alt="pizza"
                                        width={25}
                                        height={28}
                                    />
                                    <p className="text-[#333] text-[20px] font-semibold">
                                        {
                                            item.description
                                        }
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="filterItem flex gap-[17px] cursor-pointer">
                        <Image
                            src="/client/minifood/pizza.svg"
                            alt="pizza"
                            width={25}
                            height={28}
                        />
                        <p className="text-[#333] text-[20px] font-semibold">
                            Chinese
                        </p>
                    </div>
                    <div className="cardBody grid grid-cols-4 gap-[40px]">
                        {
                            productsData.map((item) => (
                                <RestaurantCard
                                    key={item.id}
                                    detail={item}
                                />
                            ))
                        }

                    <div className="filterItem flex gap-[17px] cursor-pointer">
                        <Image
                            src="/client/minifood/pizza.svg"
                            alt="pizza"
                            width={25}
                            height={28}
                        />
                        <p className="text-[#333] text-[20px] font-semibold">
                            Chinese
                        </p>
                    </div>

                    <div className="filterItem flex gap-[17px] cursor-pointer">
                        <Image
                            src="/client/minifood/pizza.svg"
                            alt="pizza"
                            width={25}
                            height={28}
                        />
                        <p className="text-[#333] text-[20px] font-semibold">
                            Chinese
                        </p>
                    </div>
                </div>

                <div className="cardBody grid grid-cols-4 gap-[40px]">
                    {
                        productsData.map((item) => (
                            <RestaurantCard
                                detail={item}
                            />  
                        ))
                    }

                </div>
                </div>
            </main>
        


            <Footer
                isTop={false}
@@ -116,4 +90,4 @@ const Restaurants = () => {
    );
};

export default Restaurants;