import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";
import Header from "../../../shared/adminComponents/Header/Header";
import RestaurantComponent from "../../../shared/adminComponents/RestaurantComponent/RestaurantComponent";
import Dropdown from "../../../shared/adminComponents/Dropdown";
import { useEffect, useState } from "react";
import RightMenu from "../../../shared/adminComponents/RightMenu";
import Button from "../../../shared/components/Button";
import axios from "axios";
import { deleteRestuarant, getRestuarants } from "../../../services";
import { toast,ToastContainer } from "react-toastify";



interface Restaurants {
  id: number;
  name: string;
  restaurantName: string;
  path: string;
}




const AdminRestaurants: NextPage = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [data, setData] = useState([]);


  //! Delete

  const deleteRestaurants = async (id: number | string) => {
    const res = await deleteRestuarant(id);
    console.log(res);
    
    if (res?.status == 200 || res?.status == 201 || res?.status == 204) {
      toast.success("it is okay")
    }
    console.log(id);

  };

  //! Filter Restaurant

  const filterRestaurants = (title: string): void => {
    console.log(title);
  }

  //! Add Restaurant

  const addRestaurant = (): void => {
    setIsMenu(!isMenu)
  }

  // ! Render Restaurant 

  useEffect(() => {

    renderRestaurant();

  }, [])

  const renderRestaurant = async () => {
    try {
      const res = await getRestuarants();
      setData(res.data?.result.data)
    } catch (error) {
      console.log(error);

    }
  }
 


    return (
      <div>
        <ToastContainer/>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="px-[19px] min-h-screen relative bg-[#1E1E30]">
          <RightMenu headTitle={"Add Restaurant"} callBack={addRestaurant} right={isMenu ? "0%" : "-100%"} />

          <Header />

          <div className='flex gap-x-4 justify-between'>
            <SideBar />

            <div className="flex flex-col w-full">
              <div className="flex justify-between px-8 py-5 bg-[#27283c] mb-[52px] rounded-lg">
                <h3 className="text-[#C7C7C7] text-xl font-semibold">
                  Products
                </h3>

                <div className="flex gap-x-10">
                  <Dropdown
                    filterItems={filterRestaurants}
                    items={["Papa Johns", "Kfc", "Mc Donalds", "Burger King"]}
                    className={"flex bg-[#5A5B70] rounded-[14px] px-[18px] py-2 relative w-[199px] transition-all h-[35px]"}
                  />

                  <Button
                    value={"+ Add Restaurant"}
                    color={"#FFF"}
                    size={"14px"}
                    background={"#C035A2"}
                    width={"168px"}
                    height={"35px"}
                    isDisabled={false}
                    radius={"14px"}
                    weight={600}
                    callBack={addRestaurant}
                  />
                </div>
              </div>

              <div className="flex gap-x-10 gap-y-10 flex-wrap justify-between">
                {
                  data?.map((item) => (
                    <RestaurantComponent
                      detail={item}
                      deleteProduct={deleteRestaurants}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }


  export default AdminRestaurants;