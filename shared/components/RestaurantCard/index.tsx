import Button from '../Button'

interface RestaurantCardTypes {
    path: string,
    name: string,
    description: string,
    price: number | string,
    time: number | string,
}

const RestaurantCard = ({ path , name , description , price , time }:RestaurantCardTypes) => {
  return (
    <div className="w-[235px] pt-[18px] pb-[25px] px-[16px] flex flex-col justify-center cursor-pointer" style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}>
        <img 
            src={path} 
            alt="" 
            className='w-[174px] h-[161px]'
        />

        <p className="text-[22px] font-bold text-[#4F4F4F] mt-1">
            {
                name
            }
        </p>

        <p className="text-[#828282] text-[16px] font-normal mt-1">
            {
                description
            }
        </p>

        <div className='w-full flex justify-between mt-[12px] items-center'>
            <p className='text-[#4F4F4F] text-[16px] font-bold'>
                {
                    price
                } Delivery
            </p>
            <Button
                value={time}
                color={"#FFF"}
                size={"16px"}
                background={"#D63626"}
                width={"78px"}
                height={"31px"}
                isDisabled={false}
                radius={"30px"}
                weight={500}
            />
        </div>
    </div>
  )
}

export default RestaurantCard