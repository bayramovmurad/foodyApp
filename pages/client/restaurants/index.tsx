import RestaurantCard from '../../../shared/components/RestaurantCard/index'
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'


import Image from "next/image";
const Restaurants = () => {
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
          
                </div>

                <div className="cardBody grid grid-cols-4 gap-[40px]">
                    
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
