import Sidebar from '../../../shared/components/Sidebar/index'
import Header from "../../../shared/components/Header/index"
import Footer from '../../../shared/components/Footer/index'

const userBasket = () => {
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

        <main className="p-[30px] flex justify-start">
              <Sidebar />
        </main>
       

        <Footer
            isTop={false}
        />
    </div>
  );
};

export default userBasket;
