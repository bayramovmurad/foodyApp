import { useState } from "react";
import Modal from "../../components/Modal";

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

    return (
        <div className="w-full">
            <table className="border-collapse bg-white w-full">
                {
                    activeData?.length > 0 ? (
                        <thead>
                            <tr>
                                <th className=" border p-5">ID</th>
                                <th className=" border p-5">Customer ID</th>
                                <th className=" border p-5">Time</th>
                                <th className=" border p-5">Delivery Address</th>
                                <th className=" border p-5">Amount</th>
                                <th className=" border p-5">Payment Method</th>
                                <th className=" border p-5">Contact</th>
                            </tr>
                        </thead>
                    ) : (
                        <></>
                    )
                }


                <tbody>
                    {
                        activeData?.map((item:any) => (
                            <tr>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap w-32"><p className="border px-2 py-1 rounded-lg max-w-28"><p className=" whitespace-nowrap overflow-x-scroll max-w-28">{item.id}</p></p></td>
                                <td className="border text-center p-1 overflow-x-auto whitespace-nowrap w-[160px]"><p className="border px-2 py-1 rounded-lg max-w-[150px]"><p className=" whitespace-nowrap overflow-x-scroll max-w-[150px]">{item.customer_id}</p></p></td>
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default OrderComponent