const RestaurantComponent = () => {
  return (
    <div>
      {
        ['Burger'].map((item) =>
          <div className="w-[247px] h-[83px bg-white rounded-md flex p-3 items-center" >
           <div className="flex gap-x-[15px]">
             <div>
              <img src={`/adminImg/RestaurantPage/${item}.svg`} alt="" />
            </div>
            <div>
              <p className="text-gray-800 text-lg font-medium leading-normal tracking-tight">{item}</p>
              <span className="font-semibold  text-neutral-400 text-sm">{item}</span>
            </div>
           </div>
           <div className="flex flex-col ml-auto gap-y-4">
              <img src="/adminImg/RestaurantPage/Pen.svg" alt="" />
              <img src="/adminImg/RestaurantPage/Bin.svg" alt="" />
           </div>
          </div>
        )
      }
    </div>
  )
}
export default RestaurantComponent