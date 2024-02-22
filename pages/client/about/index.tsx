import Description from "../../../shared/components/Description";
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'
import Title from "../../../shared/components/Title";
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-white">
        <div className="p-[30px]">
          <Header
              isLogin={true}
              isBasket={true}
              isAvatar={true}
              isName={true}
              isBottom={false}
          />
        </div>

        <main className="p-[30px] flex justify-center">
            <div className="max-w-[1440px] w-full flex px-[50px] py-[25px] justify-between gap-[20px]">
                <div className="flex flex-col gap-5">
                  <Title  
                      value={t("about")}
                      size={"45px"}
                      weight={600}
                      color={"#000"}
                      mwidth={"191px"}
                  />

                  <Description
                      value={t("aboutD")}
                      mwidth={"565px"}
                      size={"20px"}
                      weight={500}
                      color={"#828282"}
                  />
                </div>

                <div>
                <svg width="588" height="742" viewBox="0 0 588 742" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_158_6596)">
<rect x="-23.6893" y="610.301" width="686.999" height="407" rx="100" transform="rotate(-67.9341 -23.6893 610.301)" fill="#FFB64F"/>
</g>
<defs>
<filter id="filter0_d_158_6596" x="0.526733" y="0.839844" width="586.843" height="741.145" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_158_6596"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_158_6596"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_158_6596" result="shape"/>
</filter>
</defs>
</svg>

                </div>

                
            </div>
        </main>
       

        <Footer
            isTop={false}
        />
    </div>
  );
};

export default About;