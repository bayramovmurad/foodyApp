import { Header } from "../shared/components/Header";

const Home = () => {
  return (
    <div className="bg-white p-[30px]">
        <Header
            isLogin={false}
            isBasket={true}
            isAvatar={true}
            isName={true}
        />
    </div>
  );
};

export default Home;
