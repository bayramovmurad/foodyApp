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
                  <RestaurantCard
                      path={"/client/restaurant/food.svg"}
                      name={"Coffee Mania"}
                      description={"chinese, sea-food, thai, lebanese, caribbean"}
                      price={5}
                      time={"09 Min"}
                  />  
                  <RestaurantCard
                      path={"/client/restaurant/food.svg"}
                      name={"Coffee Mania"}
                      description={"chinese, sea-food, thai, lebanese, caribbean"}
                      price={5}
                      time={"09 Min"}
                  />  
                  <RestaurantCard
                      path={"/client/restaurant/food.svg"}
                      name={"Coffee Mania"}
                      description={"chinese, sea-food, thai, lebanese, caribbean"}
                      price={5}
                      time={"09 Min"}
                  />  
                  <RestaurantCard
                      path={"/client/restaurant/food.svg"}
                      name={"Coffee Mania"}
                      description={"chinese, sea-food, thai, lebanese, caribbean"}
                      price={5}
                      time={"09 Min"}
                  />  
                  <RestaurantCard
                      path={"/client/restaurant/food.svg"}
                      name={"Coffee Mania"}
                      description={"chinese, sea-food, thai, lebanese, caribbean"}
                      price={5}
                      time={"09 Min"}
                  />  
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
