import React, { useEffect, useState } from 'react';

interface DropdownProps {
    className: string;
    items: string[];
    activeProduct: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ className, items, filterItems }) => {
    const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<string>(items[0]);
    const [data, setData] = useState<string[]>([]);

    const handleActive = () => {
        setIsActiveDropdown(!isActiveDropdown);
    };

    useEffect(() => {
        let newData = items.filter((item) => item !== activeItem);
        setData(newData);
        filterItems(activeItem);
    }, [activeItem]);

    return (
        <div className={className}>
            <div onClick={handleActive} className='flex justify-between items-center w-full cursor-pointer'>
                <p className='text-[#F2F2F2DE] text-[14px]'>
                    {activeItem}
                </p>

                {
                    isActiveDropdown ? (
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 8.5L12.5 15.5L5.5 8.5" stroke="#E6E5E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.58335 14.2083L11 7.79166L17.4167 14.2083" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    )
                }

            </div>

            {
                isActiveDropdown ? (
                    <div className='absolute top-[50px] w-[199px] left-0 bg-[#5A5B70] px-[12px] rounded-[14px] py-2 cursor-pointer'>
                        {
                            data.map((item) => (
                                <p onClick={() => setActiveItem(item) || setIsActiveDropdown(false)} className='text-[#F2F2F2DE] mb-1'>
                                    {item}
                                </p>
                            ))
                        }
                    </div>
                ) : <></>
            }

        </div>
    );
}

export default Dropdown;























