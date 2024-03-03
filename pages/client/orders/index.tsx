import React, { FC, useEffect, useState } from 'react';
import FormTitle from '../../../shared/components/FormTitle/index';
import Sidebar from '../../../shared/components/Sidebar/index';
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index';
import Thead from '../../../shared/components/Thead/index';
import TBody from '../../../shared/components/Tbody/index';
import { deleteOrder, getOrders } from '../../../services';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';

interface OrdersProps {}

interface OrderData {
  id: number | string;
  amount: number | string;
  time: string;
  contact: string | number;
  paymentMethod: string;
  address: string;
}


const Orders: FC<OrdersProps> = () => {
    const { t } = useTranslation()
    const [activeData,setActiveData] = useState([])
    
    const deleteOrderF = async (id: number | string) => {
        const deleteObj = {
          "order_id": id
        }
        const response = await deleteOrder(deleteObj)
        swal("Order Silindi")
        renderOrders()
    }

    const renderOrders = async () => {
      const res = await getOrders()
      
      setActiveData(res?.data.result.data)
    }

    useEffect(() => {
      renderOrders()
    },[])

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
                          value={t("yourorder")}
                      />

                      <table className='w-full mt-[60px]'>
                          <Thead
                              items={["ID","Time","Delivery Address","Amount","Payment Method","Contact",""]}
                          />

                          
                          <tbody className='bg-white'>
                              {
                                activeData.map((item: any) => (
                                    <TBody
                                        item={item}
                                        deleteOrder={deleteOrderF}
                                    />
                                ))
                              }
                          </tbody>
                      </table>
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