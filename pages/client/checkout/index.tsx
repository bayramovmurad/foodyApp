import FormTitle from '../../../shared/components/FormTitle/index'
import Sidebar from '../../../shared/components/Sidebar/index'
import Header from "../../../shared/components/Header/index"
import Footer from '../../../shared/components/Footer/index'

const Checkout = () => {
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
              <div className="max-w-[1440px] w-full flex gap-4">
                <Sidebar />

                <div className="content bg-[#F3F4F6] py-[42px] px-9 w-full">
                    <FormTitle
                        value={"Checkout"}
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

export default Checkout;
