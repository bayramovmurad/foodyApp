import Description from "../../../shared/components/Description";
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'
import Title from "../../../shared/components/Title";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const Works = () => {
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
                <div className="max-w-[1440px] w-full flex justify-center text-center items-center flex-col gap-[20px]">
                    <Title  
                        value={t("howitworks")}
                        size={"45px"}
                        weight={600}
                        color={"#000"}
                        mwidth={"273px"}
                    />

                    <Description
                        value={t("howitD")}
                        mwidth={"1034px"}
                        size={"20px"}
                        weight={500}
                        color={"#828282"}
                    />

                    <div className="relative w-full h-[683px] flex justify-center">
                        <Image
                            src="/client/works/background.svg"
                            alt="background"
                            width={900}
                            height={400}
                            className="w-[900px] h-[500px] absolute top-[70px]"
                        />
                        <Image
                            src="/client/works/delivery.svg"
                            alt="background"
                            width={628}
                            height={683}
                            className="w-[628px] h-[683px] absolute z-10"
                        />
                    </div>
                </div>
            </main>
        

            <Footer
                isTop={false}
            />
        </div>
    );
};

export default Works;
