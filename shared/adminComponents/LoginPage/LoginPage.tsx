const LoginPage = () => {
    return (

        <div className="">
            <div className="w-[102.96px] h-[22.06px] text-center pt-[57.23px] pl-[32.04px]"><span className="text-neutral-100 text-[28px] font-extrabold font-['Mukta'] leading-normal tracking-wide">Foody</span><span className="text-yellow-500 text-[28px] font-extrabold font-['Mukta'] leading-normal tracking-wide">.</span></div>
            <div className="md:mt-[198px] mt-[75.23px]  lg:min-w-[830px] md:w-[700px] w-[320px] mx-auto  md:flex  ">
              
                    <div className="md:w-[425px] w-[320px] h-[411px] md:bg-gray-700 flex flex-col justify-center items-center">
                        <div style={{ fontFamily: "monospace" }} className="w-[337px] h-[42px] text-center text-stone-300 text-[35px] font-bold mb-[41px]">Welcome Admin</div>
                        <form action="">
                            <div className="w-[318.80px] mb-[26px] h-[50px] bg-gray-600 rounded flex items-center">
                                <input className="bg-transparent border-none outline-none pl-10" type="text" />
                            </div>
                            <div className="w-[318.80px] mb-[35px] h-[50px] bg-gray-600 rounded flex items-center">
                                <input className="bg-transparent  border-none outline-none pl-10" type="text" />
                            </div>
                            <div className="w-[318.80px] h-[50px] flex items-center justify-center bg-fuchsia-700 rounded">
                                <button className=" text-center text-white text-[25px] font-medium">sign in</button>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-[405px] w-[320px]  h-[411px] md:bg-white flex justify-center items-center relative">
                    <img className="w-[41px] h-[41px] rounded-[100px] absolute top-[9px] right-[11px]" src="/adminImg/LoginPage/EnglishLng.svg" />
                        <img className="md:w-[346.04px] w-[320.04px] h-[303.75px] rounded-[14px]" src="/adminImg/LoginPage/LoginRight.svg" />
                    </div>
               </div>
            </div>
       


    )
}
export default LoginPage