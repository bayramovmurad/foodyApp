const OrderComponent = () => {
    return (
        <div>
            <table className="border-collapse bg-white w-[1100px]">
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
                    <tr>

                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">9777</span></td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">2277</span></td>
                        <td className="border text-center  p-1 w-10" >25 Dec 2021</td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap max-w-[177px]">29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap">287.9 </td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap ">Cash On Delivery </td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap">994-51-410-3130</td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap"><img src="/adminImg/OrderPage/Eye.svg" alt="" /></td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap"><img src="/adminImg/OrderPage/Bin.svg" alt="" /></td>
                    </tr>
                    


                </tbody>
                <tbody>
                    <tr>

                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">9777</span></td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">2277</span></td>
                        <td className="border text-center  p-1 w-10" >25 Dec 2021</td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap max-w-[177px]">29 Eve Street, 543 Evenue Road, Ny 87876 </td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap">287.9 </td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap ">Cash On Delivery </td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap">994-51-410-3130</td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap"><img src="/adminImg/OrderPage/Eye.svg" alt="" /></td>
                        <td className="border text-center  p-1 overflow-x-auto whitespace-nowrap"><img src="/adminImg/OrderPage/Bin.svg" alt="" /></td>
                    </tr>



                </tbody>

            </table>
        </div>
    )
}
export default OrderComponent