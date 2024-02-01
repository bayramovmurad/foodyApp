import React, { FC } from 'react';

interface CategoryComponentProps {
    detail: {
        id: number;
        path: string;
        name: string;
        slug: string;
    };
}

const CategoryComponent: FC<CategoryComponentProps> = ({ detail }) => {
    return (
        <tr>
            <td className="border-t text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">
                <span className="border px-2 py-1 rounded-lg">
                    {detail.id}
                </span>
            </td>
            <td className="border-t text-center  p-1 w-10" >
                <img src={`${detail.path}`} />
            </td>
            <td className="border-t text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">
                {detail.name}
            </td>
            <td className="border-t text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">
                {detail.slug}
            </td>
            <td className="border-t text-center font-semibold flex justify-center items-center h-[54px]">
                <img className="w-[19px] h-[19px] cursor-pointer mr-1" src="/adminImg/CategoryPage/Edit.svg" alt="" />
                <img className='w-[14px] h-[19px] cursor-pointer' src="/adminImg/CategoryPage/del.svg" alt="" />
            </td>
        </tr>
    );
}

export default CategoryComponent;