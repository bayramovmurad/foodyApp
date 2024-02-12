import React from 'react';
import Button from '../Button';

function TimeAgo(timestamp:any) {
  const date = new Date(timestamp);
  const now = new Date();
  const differenceInMilliseconds = now - date;
  const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
  
  return <div>{differenceInHours} hours ago</div>;
}

const RestaurantCard = ({ detail , callBack }) => {
  return (
    <div onClick={() => callBack(detail)} className="w-[235px] pt-[18px] pb-[25px] px-[16px] flex flex-col justify-center cursor-pointer" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
      <img 
        src={detail.img_url} 
        alt="" 
        className='w-[174px] h-[161px]'
      />

      <p className="text-[22px] font-bold text-[#4F4F4F] mt-1">
        {detail.name}
      </p>

      <p className="text-[#828282] text-[16px] font-normal mt-1">
        {detail.address}
      </p>

      <div className='w-full flex justify-between mt-[12px] items-center'>
        <p className='text-[#4F4F4F] text-[16px] font-bold'>
          {detail.price} Delivery
        </p>
        <Button
          value={<TimeAgo timestamp={detail.created} />}
          color={"#FFF"}
          size={"10px"}
          background={"#D63626"}
          width={"78px"}
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
