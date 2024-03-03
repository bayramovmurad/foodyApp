import { useState } from "react";
import Modal from "../../components/Modal";
import { getOrders } from "../../../services";

const formatDate = (timestamp:any) => {
    const currentDate = new Date();
    const date = new Date(timestamp);
    const timeDifference = currentDate.getTime() - date.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  };
  
const OrderComponent = ({activeData , callback}:any) => {
    const [deleteModal,setDeleteModal] = useState(false)
    const [activeId,setActiveId] = useState("")
    const [isShowModal,setIsShowModal] = useState<boolean>(false)
    const [activeProducts,setActiveProducts] = useState([])

    const deleteItem = (id:any): void => {
        setActiveId(id)
        setDeleteModal(!deleteModal)
    }

    const response = (boolParam: boolean) => {
        if(boolParam){
            callback(activeId)
            setDeleteModal(!deleteModal)
        }else{
            setDeleteModal(!deleteModal)
        }
    }

    const showOrders = async (id: any) => {
        setIsShowModal(!isShowModal)
        const res = await getOrders()
        const activeOrder:any = res?.data.result.data.filter((item:any) => item.id == id)
        console.log(activeOrder[0].products);
        setActiveProducts(activeOrder[0].products);
      }

    return (
        <div className="w-full">
            <table className="border-collapse bg-white w-full">
                {activeData?.length > 0 ?
                    (
                      <thead>
                          <tr>
                              <th className=" border p-5">ID</th>
                              <th className=" border p-5">Customer ID</th>
                              <th className=" border p-5">Time</th>
                              <th className=" border p-5">Delivery Address</th>
                              <th className=" border p-5">Amount</th>
                              <th className=" border p-5">Payment Method</th>
                              <th className=" border p-5">Contact</th>
                              <th className=" border p-5">Eyes</th>
                              <th className=" border p-5">Bin</th>
                          </tr>
                      </thead>
                    ) : <></>
                  }


                <tbody>
                    {
                        activeData?.map((item:any) => (
                            <tr>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap"><p className="border px-2 py-1 rounded-lg"><p className=" whitespace-nowrap overflow-x-scroll max-w-28">{item.id}</p></p></td>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap"><p className="border px-2 py-1 rounded-lg"><p className=" whitespace-nowrap overflow-x-scroll max-w-[140px]">{item.customer_id}</p></p></td>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap max-w-[130px] px-[10px]" >{formatDate(item.created)}</td>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap max-w-[177px] px-[10px]">{item.delivery_address}</td>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap">{item.amount}</td>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap ">
                                    {
                                        item.payment_method == 0 ? "pay at the door" : "pay at the door by credit card"
                                    }
                                </td>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap">
                                    {
                                        item.contact
                                    }
                                </td>
                                <td className="border cursor-pointer text-center p-1 overflow-x-auto whitespace-nowrap flex justify-center items-center h-[61px]">
                                    <img onClick={() => showOrders(item.id)} src="/adminImg/OrderPage/Eye.svg" alt="" />
                                </td>
                                <td className="border cursor-pointer text-center p-1 overflow-x-auto whitespace-nowrap h-[61px]">
                                    <img onClick={() => deleteItem(item.id)}  src="/adminImg/OrderPage/Bin.svg" alt="" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {
                deleteModal ? (
                  <Modal
                      title={"Are you sure it’s deleted ?"}
                      description={"Attention! If you delete this order, it will not come back..."}
                      response={response}
                      modalResponseTitle={"delete"}
                  />
                ) : <></>
            }

{
                isShowModal ? (
                  <div className='fixed bg-[#00000040] w-full left-0 top-0 h-full flex justify-center items-center z-10'>
                    <div className='bg-white rounded-lg px-5 py-4 w-[754px] relative z-20'>
                      <table className='w-full'>
                        <thead className='bg-white w-full flex mb-5'>
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Image
                                </th>
                            </tr> 
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Name
                                </th>
                            </tr>
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Price
                                </th>
                            </tr>
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Count
                                </th>
                            </tr>
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] w-full px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Amount
                                </th>
                            </tr>
                        </thead>
                          <tbody>
                                {
                                  activeProducts.map((item:any) => (
                                    <tr className='flex justify-between pb-3 mb-1 border-b border-t pt-3 border-[#b8b2b2]'>
                                      <td className='text-center w-full flex justify-center items-center'>
                                        <img src={item.img_url} className='w-10 h-10' alt='image' />
                                      </td>
                                      <td className='text-center w-full flex items-center justify-center'>
                                        {
                                          item.name
                                        }
                                      </td>
                                      <td className='text-center w-full flex items-center justify-center'>
                                        {
                                          item.price
                                        }
                                      </td>
                                      <td className='text-center w-full flex items-center justify-center'>
                                        {
                                          item.count
                                        }
                                      </td>
                                      <td className='text-center w-full flex items-center justify-center'>
                                        {
                                          item.amount
                                        }
                                      </td>
                                    </tr>
                                  ))
                                }
                          </tbody>
                      </table>
                      <button onClick={() => setIsShowModal(false)} className='absolute right-4 cursor-pointer text-[25px] top-0 font-medium'>
                        x
                      </button>
                    </div>
                  </div>
                ) : <></>
              }

        </div>
    )
}
export default OrderComponent