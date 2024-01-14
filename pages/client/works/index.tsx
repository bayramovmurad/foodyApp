import Description from "../../../shared/components/Description";
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'
import Title from "../../../shared/components/Title";

import Image from "next/image";

const Works = () => {
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
            <div className="max-w-[1440px] w-full flex justify-center text-center items-center flex-col gap-[20px]">
                <Title  
                    value={"How it works"}
                    size={"45px"}
                    weight={600}
                    color={"#000"}
                    mwidth={"273px"}
                />

                <Description
                    value={"Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address."}
                    mwidth={"1034px"}
                    size={"20px"}
                    weight={500}
                    color={"#828282"}
                />

                <div className="relative w-full h-[683px] flex justify-center">
                    <Image
                        src="/client/works/background.svg"
                        alt="background"
                        width={900}
                        height={400}
                        className="w-[900px] h-[500px] absolute top-[70px]"
                    />
                    <Image
                        src="/client/works/delivery.svg"
                        alt="background"
                        width={628}
                        height={683}
                        className="w-[628px] h-[683px] absolute z-10"
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

export default Works;
