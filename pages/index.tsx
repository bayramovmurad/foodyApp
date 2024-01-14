import Description from "../shared/components/Description";
import Header from "../shared/components/Header/index";
import Footer from '../shared/components/Footer/index'
import Title from "../shared/components/Title";

import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-white">
        <div className="p-[30px]">
          <Header
              isLogin={false}
              isBasket={false}
              isAvatar={false}
              isName={false}
              isBottom={true}
          />
        </div>

        <main className="p-[30px] mb-[300px]">
            <section className="bg-white pt-[50px] w-full flex justify-center" id="features">
                <div className="flex w-full flex-col justify-center items-center text-center max-w-[1440px] ">
                  <Title
                      value="Features"
                      size={"40px"}
                      weight={900}
                      color={"#181617"}
                      mwidth={"204px"}
                  />

                  <Description 
                      value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                      mwidth={"780px"}
                      size={"22px"}
                      weight={400}
                      color={"#828282"}
                  />

                  <div className="featuresBoxes flex justify-around w-full mt-[45px]">
                      <div style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                          <Image
                              src="/client/features/features2.svg"
                              alt="features Image"
                              width={241}
                              height={223}
                          />
                          <Title
                              value="Discount Boucher"
                              size={"30px"}
                              weight={700}
                              color={"#4F4F4F"}
                              mwidth={"281px"}
                          />

                          <Description 
                              value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                              mwidth={"273px"}
                              size={"18px"}
                              weight={400}
                              color={"#828282"}
                          />
                      </div>

                      <div style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                          <Image
                              src="/client/features/features.svg"
                              alt="features Image"
                              width={241}
                              height={223}
                          />
                          <Title
                              value="Fresh healthy Food"
                              size={"30px"}
                              weight={700}
                              color={"#4F4F4F"}
                              mwidth={"281px"}
                          />

                          <Description 
                              value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                              mwidth={"273px"}
                              size={"18px"}
                              weight={400}
                              color={"#828282"}
                          />
                      </div>

                      <div style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                          <Image
                              src="/client/features/features3.svg"
                              alt="features Image"
                              width={241}
                              height={223}
                          />
                          <Title
                              value="Fast Home Delivery"
                              size={"30px"}
                              weight={700}
                              color={"#4F4F4F"}
                              mwidth={"281px"}
                          />

                          <Description 
                              value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                              mwidth={"273px"}
                              size={"18px"}
                              weight={400}
                              color={"#828282"}
                          />
                      </div>
                  </div>
                </div>
            </section>

            <section className="bg-white py-[150px] w-full flex justify-center items-center flex-col gap-[80px]">
                <div className="max-w-[1440px] flex justify-between">
                      <div className="flex flex-col gap-[30px] mt-[30px]">
                        <Title
                            value="Menu That Always Make You Fall In Love"
                            size={"50px"}
                            weight={900}
                            color={"#181617"}
                            mwidth={"653px"}
                        />

                        <Description 
                                value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                                mwidth={"499px"}
                                size={"22px"}
                                weight={400}
                                color={"#828282"}
                        />
                      </div>
                      
                      <Image
                          src="/client/kfc/kfc.svg"
                          alt='kfc'
                          width={636}
                          height={676}
                      />
                </div>

                <div className="max-w-[1440px] flex justify-between">
                        <Image
                            src="/client/pizza/pizza2.svg"
                            alt='kfc'
                            width={636}
                            height={676}
                        />

                        <div className="flex flex-col gap-[30px] mt-[30px]">
                            <Title
                                value="Yummy Always Papa John’s Pizza.Agree?"
                                size={"50px"}
                                weight={900}
                                color={"#181617"}
                                mwidth={"653px"}
                            />

                            <Description 
                                value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                                mwidth={"499px"}
                                size={"22px"}
                                weight={400}
                                color={"#828282"}
                            />
                        </div>
                </div>

                <div className="max-w-[1440px] flex justify-between">
                      <div className="flex flex-col gap-[30px] mt-[30px]">
                        <Title
                            value="Do You Like French Fries? Mmm..."
                            size={"50px"}
                            weight={900}
                            color={"#181617"}
                            mwidth={"653px"}
                        />

                        <Description 
                                value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                                mwidth={"499px"}
                                size={"22px"}
                                weight={400}
                                color={"#828282"}
                        />
                      </div>
                      
                      <Image
                          src="/client/fries/fries.svg"
                          alt='kfc'
                          width={667}
                          height={681}
                      />
                </div>
            </section>

            <section className="bg-white pt-[50px] w-full flex justify-center" id="features">
                <div className="flex w-full flex-col justify-center items-center text-center max-w-[1440px] ">
                  <Title
                      value="Our Popular Update New Foods"
                      size={"40px"}
                      weight={900}
                      color={"#181617"}
                      mwidth={"394px"}
                  />

                  <Description 
                      value="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                      mwidth={"780px"}
                      size={"22px"}
                      weight={400}
                      color={"#828282"}
                  />

                  <div className="featuresBoxes flex justify-around w-full mt-[45px]">
                      <div style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                          <Image
                              src="/client/popular/burger.svg"
                              alt="features Image"
                              width={241}
                              height={223}
                          />
                          <Title
                              value="Dubble Chees"
                              size={"30px"}
                              weight={700}
                              color={"#4F4F4F"}
                              mwidth={"281px"}
                          />

                          <Description 
                              value="Lorem ipsum is placeholder  commonly used in the graphic s"
                              mwidth={"273px"}
                              size={"18px"}
                              weight={400}
                              color={"#828282"}
                          />
                      </div>

                      <div style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                          <Image
                              src="/client/popular/pizza.svg"
                              alt="features Image"
                              width={241}
                              height={223}
                          />
                          <Title
                              value="Margarita"
                              size={"30px"}
                              weight={700}
                              color={"#4F4F4F"}
                              mwidth={"281px"}
                          />

                          <Description 
                              value="Lorem ipsum is placeholder  commonly used in the graphic "
                              mwidth={"273px"}
                              size={"18px"}
                              weight={400}
                              color={"#828282"}
                          />
                      </div>

                      <div style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} className="featuresBox flex justify-center items-center flex-col gap-2 bg-[#fff] py-[20px] px-[23px] cursor-pointer hover:scale-[1.1] transition-all">
                          <Image
                              src="/client/popular/twister.svg"
                              alt="features Image"
                              width={241}
                              height={223}
                          />
                          <Title
                              value="Twister Menu"
                              size={"30px"}
                              weight={700}
                              color={"#4F4F4F"}
                              mwidth={"281px"}
                          />

                          <Description 
                              value="Lorem ipsum is placeholder  commonly used in the graphic "
                              mwidth={"273px"}
                              size={"18px"}
                              weight={400}
                              color={"#828282"}
                          />
                      </div>
                  </div>
                </div>
            </section>
        </main>

        <Footer
            isTop={true}
        />
    </div>
  );
};

export default Home;
