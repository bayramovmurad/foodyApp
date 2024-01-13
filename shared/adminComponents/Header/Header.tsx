const Header = () => {
  return (
    <div className="bg-[#27283c] mb-[16px] flex items-center justify-between h-16 px-6 rounded-b-xl">
      <div className="w-[92px] h-8 text-center"><span className="text-neutral-100 text-[28px] font-extrabold font-['Mukta'] leading-normal tracking-wide">Foody</span><span className="text-yellow-500 text-[28px] font-extrabold font-['Mukta'] leading-normal tracking-wide">.</span></div>

      <div className="flex items-center gap-x-[30px]">
        <div className="w-[107px] flex items-center text-white h-7 bg-fuchsia-700 rounded-[14px] shadow border-2 border-fuchsia-700">
        <img src="/adminImg/Header/Plus.svg" alt="" />
        <div className="font-semibold text-[10px]">ADD PRODUCT</div>
      </div>
      <div className="flex gap-x-2 items-center">
        <img className="rounded-full" src="/adminImg/Header/User.svg" alt="" />
          <p className="text-white font-semibold">Admin</p>
      </div>
      </div>
      
    </div>
  )
}
export default Header