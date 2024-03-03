import { doc, onSnapshot, setDoc, collection } from 'firebase/firestore';
import Description from "../../../shared/components/Description";
import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'
import Title from "../../../shared/components/Title";
import { useTranslation } from "react-i18next";
import { db } from '../../../server/configs/firebase';
import { useEffect, useState } from 'react';
import { Rating } from "primereact/rating";

const About = () => {
  const { t } = useTranslation()
  const [ratingsData, setRatingsData] = useState([])
  const [starCount, setStarCount] = useState(0)

  const collectionRef = collection(db, 'ratings')

  const renderRatings = () => {
    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
      const items:any = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setRatingsData(items);
    });

    return () => {
      unsub();
    }
  }

  useEffect(() => {
    renderRatings();
  }, [])

  useEffect(() => {
    renderRa();
  }, [ratingsData])

  const renderRa = () => {
    let count = 0;
    ratingsData.forEach((item:any) => count += item?.count || 0);
    setStarCount((count / ratingsData.length));
  }
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
                  <div className=' flex flex-col gap-4'>
                   <p className="text-[#ffa500] text-[22px]">
                    {t("score")}: {starCount.toFixed(0)}
                   </p> <Rating value={starCount} readOnly cancel={false} />
                  </div>
                  
                </div>

                <div>
                    <img
                        src="/client/404/about.svg"
                        alt='about'
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

export default About;