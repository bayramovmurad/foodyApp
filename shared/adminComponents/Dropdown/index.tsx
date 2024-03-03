import React, { useEffect, useState, useRef, FC } from 'react';
import { useTranslation } from 'react-i18next';

interface DropdownProps {
  className: string;
  items: string[];
  filterItems: (item: string) => void;
}

const Dropdown = ({ className, items, filterItems }:any) => {
  const { t } = useTranslation()
  const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("Select");
  const ref = useRef<HTMLDivElement>(null);

  const handleActive = (): void => {
    setIsActiveDropdown(!isActiveDropdown);
  };

  const handleActiveItem = (item: string): void => {
    setActiveItem(item);
    filterItems(item);

    setIsActiveDropdown(false);
  };

  const filterItem = (): string[] => {
    let newData = items?.filter((item: string) => item !== activeItem);
    return newData;
  };

  useEffect(() => {
    filterItem();
  }, [items, activeItem]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsActiveDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={className} ref={ref}>
      <div onClick={handleActive} className="flex justify-between items-center w-full cursor-pointer">
        <p className="text-[#F2F2F2DE] text-[14px]">{activeItem}</p>

        {isActiveDropdown ? (
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 8.5L12.5 15.5L5.5 8.5" stroke="#E6E5E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58335 14.2083L11 7.79166L17.4167 14.2083" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        )}
      </div>

      {isActiveDropdown && (
        <div className="absolute top-[50px] w-full h-[100px] overflow-y-scroll left-0 bg-[#5A5B70] px-[12px] rounded-[14px] py-2 cursor-pointer">
          {filterItem().map((item: string, index: number) => (
            <p key={index} onClick={() => handleActiveItem(item)} className="text-[#F2F2F2DE] mb-1">
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;