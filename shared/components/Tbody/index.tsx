import React, { FC } from 'react';

interface TBodyProps {
  data: { 
    id: string; 
    time: string; 
    address: string; 
    amount: number; 
    paymentMethod: string; 
    contact: string 
  }[];
}

const TBody: FC<TBodyProps> = ({ data }) => {
  return (
    <tbody className='bg-white h-[1000px]'>
      {data.map((item) => (
        <tr className=' border-t border-b border-[#DFE2E9]'>
            <td className='py-[14px] px-[12px]'>
              {item.id}
            </td>

            <td className='py-[14px] px-[12px]'>
              {item.time}
            </td>

            <td className='py-[14px] px-[12px]'>
              {item.address}
            </td>

            <td className='py-[14px] px-[12px]'>
              {item.amount}
            </td>

            <td className='py-[14px] px-[12px]'>
              {item.paymentMethod}
            </td>

            <td className='py-[14px] px-[12px]'>
              {item.contact}
            </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;