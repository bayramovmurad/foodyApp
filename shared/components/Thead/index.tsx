import React, { FC } from 'react';

interface TheadProps {
  items: string[];
}

const Thead: FC<TheadProps> = ({ items }) => {
  return (
      <thead className='bg-white w-full'>
            <tr className='pt-6 w-full h-full'>
                {
                    items.map((item: string) => (
                        <th className='h-[30px] px-[12px] text-[#00072B] text-[14px] font-semibold'>
                            {
                                item
                            }
                        </th>
                    ))
                }
            </tr>
      </thead>
  )
}

export default Thead;
