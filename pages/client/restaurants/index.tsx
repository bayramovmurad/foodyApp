import type { NextPage } from "next";

import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'

const Restaurants: NextPage = () => {
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
       

        <Footer
            isTop={false}
        />
    </div>
  );
};

export default Restaurants;
