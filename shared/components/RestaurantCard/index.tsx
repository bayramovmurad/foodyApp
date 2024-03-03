import React from 'react';
import Button from '../Button';

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

const RestaurantCard = ({ detail , callBack }:any) => {
  let formattedDate = formatDate(detail.created);

  return (
    <div onClick={() => callBack(detail)} className="w-[235px] pt-[18px] pb-[25px] px-[16px] flex flex-col justify-center cursor-pointer" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
      <img 
        src={detail.img_url} 
        alt="" 
        className='w-full h-[161px]'
      />

      <p className="text-[22px] font-bold text-[#4F4F4F] mt-1">
        {detail.name}
      </p>

      <p className="text-[#828282] text-[16px] font-normal mt-1">
        {detail.address}
      </p>

      <div className='w-full flex justify-between mt-[12px] items-center'>
        <p className='text-[#4F4F4F] text-[16px] font-bold'>
          {detail.delivery_price} ₼ Del
        </p>
        <Button
          value={detail.delivery_min + " Min"}
          color={"#FFF"}
          size={"10px"}
          background={"#D63626"}
          width={"80px"}
          height={"31px"}
          isDisabled={false}
          radius={"30px"}
          weight={500}
        />
      </div>
    </div>
  );
}

export default RestaurantCard;
