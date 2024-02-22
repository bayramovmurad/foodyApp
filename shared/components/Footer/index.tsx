import Description from "../Description"
import Button from "../Button"

import { useTranslation } from "react-i18next"
import Image from "next/image"
interface FooterTypes {
  isTop: boolean
}

const Footer = ({ isTop }:FooterTypes) => {
  const { t } = useTranslation()
  return (
    <footer className="bg-[#181617] w-full relative">
        {
          isTop ? (
            <div className="flex justify-center">
              <div className="flex justify-between absolute w-full top-[-90%] max-w-[1066px] bg-[#272727] rounded-[50px] pt-[77px] pr-[41px] pb-[62px] pl-[51px]">
                  <Image
                      src="/client/pizza/pizza.svg" 
                      alt="" 
                      width={200}
                      height={200}
                  />

                  <div className="flex flex-col items-center gap-[40px] justify-center">
                      <p className="text-[#fff] text-[50px] font-[500] text-center">
                        {
                          t("discover")
                        }
                      </p>

                      <Button
                          value={t('explore')}
                          color={"#FFF"}
                          size={"20px"}
                          background={"#FB9300"}
                          width={"220px"}
                          height={"60px"}
                          isDisabled={false}
                          radius={"30px"}
                          weight={500}
                      />
                  </div>

                  <Image
                      src="/client/miniBurger/miniBurger.svg" 
                      alt="" 
                      width={200}
                      height={200}
                  />
              </div>
            </div>
          ) : null
        }

        <div className="w-full flex justify-center">
            <div className="bottom max-w-[1440px] w-full flex justify-between pt-[129px] pr-[136px] pl-[105px] pb-[50px]">
                <div className="left flex flex-col gap-2">
                    <Image
                        src="/mate/logo/logo.svg"
                        alt={"logo"}
                        width={92}
                        height={32}
                    />

                    <Description 
                        value={t('footerDescription')}
                        mwidth={"392px"}
                        size={"22px"}
                        weight={400}
                        color={"#828282"}
                    />

                    <div className="flex gap-4">
                        <Image
                          className="border-white p-[5px] border-2 rounded-[20px]"
                          width={40}
                          height={0}
                          src={"/mate/social/facebook/facebook.svg"}
                          alt="facebook"
                        />

                        <Image
                          className="bg-[#FB9300] p-[5px] rounded-[20px]"
                          width={40}
                          height={0}
                          src={"/mate/social/instagram/instagram.svg"}
                          alt="instagram"
                        />
                        
                        <Image
                          className="border-white p-[5px] border-2 rounded-[20px]"
                          width={40}
                          height={0}
                          src={"/mate/social/twitter/twitter.svg"}
                          alt="twitter"
                        />
                        </div>
                </div>

                <div className="right flex gap-[90px]">
                  <ul className="flex flex-col gap-2">
                    <li className="text-[#fff] text-[18px] font-black">
                        {
                          t('pop')
                        }
                    </li>
                    <li className="text-[#BDBDBD] text-[13px] font-normal">
                        {
                          t('programming')
                        }
                    </li>
                    <li className="text-[#BDBDBD] text-[13px] font-normal">
                        {
                          t('child')
                        }
                    </li>
                    <li className="text-[#BDBDBD] text-[13px] font-normal">
                        {
                          t('pyshc')
                        }
                    </li>
                  </ul>

                  <ul className="flex flex-col gap-1 ">
                      <li className="text-[#fff] text-[18px] font-black">
                          {
                            t('pop')
                          }
                      </li>
                      <li className="text-[#BDBDBD] text-[13px] font-normal">
                          {
                            t('programming')
                          }
                      </li>
                      <li className="text-[#BDBDBD] text-[13px] font-normal">
                          {
                            t('child')
                          }
                      </li>
                      <li className="text-[#BDBDBD] text-[13px] font-normal">
                          {
                            t('pyshc')
                          }
                      </li>
                  </ul>

                  <ul className="flex flex-col gap-1 ">
                    <li className="text-[#fff] text-[18px] font-black">
                        {
                          t('pop')
                        }
                    </li>
                    <li className="text-[#BDBDBD] text-[13px] font-normal">
                        {
                          t('programming')
                        }
                    </li>
                    <li className="text-[#BDBDBD] text-[13px] font-normal">
                        {
                          t('child')
                        }
                    </li>
                    <li className="text-[#BDBDBD] text-[13px] font-normal">
                        {
                          t('pyshc')
                        }
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer