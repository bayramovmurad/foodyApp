import React, { FC } from 'react';
import FormTitle from '../../../shared/components/FormTitle/index';
import Sidebar from '../../../shared/components/Sidebar/index';
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index';
import Thead from '../../../shared/components/Thead/index';
import TBody from '../../../shared/components/Tbody/index';

interface OrdersProps {}

interface OrderData {
  id: number | string;
  amount: number | string;
  time: string;
  contact: string | number;
  paymentMethod: string;
  address: string;
}

const data: OrderData[] = [
    {
      id: 9177,
      amount: 249.7,
      time: "25 Dec 2021",
      contact: "994-51-410-3130",
      paymentMethod: "Cash On Delivery",
      address: "29 Eve Street, 543 Evenue Road, Ny 87876 ",
    }
]

const Orders: FC<OrdersProps> = () => {
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

                <div className="content bg-[#F3F4F6] py-[42px] px-9 w-full">
                    <FormTitle
                        value={"Your Orders"}
                    />

                    <div className='w-full h-full'>
                        <Thead
                            items={["ID","Time","Delivery Address","Amount","Payment Method","Contact"]}
                        />

                        <TBody
                            data={data}
                        />
                    </div>
                </div>
              </div>
        </main>
       

        <Footer
            isTop={false}
        />
    </div>
  );
};

export default Orders;