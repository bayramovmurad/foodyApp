import React, { useState } from 'react'

interface MenuTypes {
    right: string,
    headTitle: string,
    callBack: any
}

const ProductRightMenu = ({ right , callBack , headTitle }: MenuTypes) => {
    const [isActive,setIsActive] = useState(false)
    return (
      <div style={{ right: isActive ? "-100%" : right }} className="fixed w-[70vw] z-10 bg-[#38394E] py-[25px] px-[25px]  transition-all">
            <button onClick={callBack} className="absolute left-[-30px] top-[50px]">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="27" height="27" rx="13.5" fill="#C74FEB"/>
                      <g clip-path="url(#clip0_135_245)">
                        <path d="M19.7116 7.29826C19.3271 6.91373 18.7059 6.91373 18.3214 7.29826L13.5 12.1098L8.67861 7.2884C8.29408 6.90387 7.67292 6.90387 7.2884 7.2884C6.90387 7.67292 6.90387 8.29408 7.2884 8.67861L12.1098 13.5L7.2884 18.3214C6.90387 18.7059 6.90387 19.3271 7.2884 19.7116C7.67292 20.0961 8.29408 20.0961 8.67861 19.7116L13.5 14.8902L18.3214 19.7116C18.7059 20.0961 19.3271 20.0961 19.7116 19.7116C20.0961 19.3271 20.0961 18.7059 19.7116 18.3214L14.8902 13.5L19.7116 8.67861C20.0863 8.30394 20.0863 7.67292 19.7116 7.29826Z" fill="#F2F2F2"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_135_245">
                          <rect width="24" height="24" fill="white" transform="translate(2 1)"/>
                        </clipPath>
                      </defs>
                  </svg>
            </button>

            <p className='text-[#C7C7C7]'>
                {
                  headTitle
                }
            </p>
      </div>
    )
}

export default ProductRightMenu