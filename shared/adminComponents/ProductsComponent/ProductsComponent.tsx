const ProductsComponent = () => {
  return (
    <div>
        {
            ["Pizza"].map((item)=>
            <div className="bg-white rounded-md w-[196px] h-[273px] flex p-[15px] flex-col">
                    <img src={`/adminImg/ProductsPage/${item}.svg`} alt="" />
                    <p className="text-left text-gray-800 text-lg font-medium leading-normal tracking-tight">{item}</p>
                    <span className="text-left font-semibold  text-neutral-400 text-sm">{item}</span>
                    <div className="flex justify-between">
                        <span className="text-teal-500">16$</span>
                        <div className="flex justify-between">
                            <img src="/adminImg/ProductsPage/Pen.svg" alt="" />
                            <img src="/adminImg/ProductsPage/Bin.svg" alt="" />
                        </div>
                    </div>
            </div>
            )
        }
    </div>
  )
}
export default ProductsComponent