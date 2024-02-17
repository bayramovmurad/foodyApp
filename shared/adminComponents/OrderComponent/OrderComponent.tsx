import { useState } from "react";
import { Modal } from "react-bootstrap";

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
  
const OrderComponent = ({activeData}:any) => {
    const [deleteModal,setDeleteModal] = useState(false)

    const deleteItem = (id: string): void => {
        setDeleteModal(!deleteModal)
    }

    const response = (boolParam: boolean) => {
        if(boolParam){
            console.log("id");
            setDeleteModal(!deleteModal)
        }else{
            setDeleteModal(!deleteModal)
        }
    }

    return (
        <div className="w-full">
            <table className="border-collapse bg-white w-full">
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
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap flex justify-center items-center h-[61px]">
                                    <img src="/adminImg/OrderPage/Eye.svg" alt="" />
                                </td>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap h-[61px]">
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
                ) : (
                  <>
                  </>
                )
              }
        </div>
    )
}
export default OrderComponent