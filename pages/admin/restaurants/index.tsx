import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";
import Header from "../../../shared/adminComponents/Header/Header";
import RestaurantComponent from "../../../shared/adminComponents/RestaurantComponent/RestaurantComponent";
import Dropdown from "../../../shared/adminComponents/Dropdown";
import { useEffect, useState } from "react";
import AddRestaurant from "../../../shared/adminComponents/AddRestaurant/index";
import Button from "../../../shared/components/Button";
import { deleteRestuarant, getCategory, getRestuarants } from "../../../services";
import swal from "sweetalert";
import EditCategory from "../../../shared/adminComponents/EditRestaurant";
import { useTranslation } from "react-i18next";

interface Restaurant {
  id: number;
  name: string;
  restaurantName: string;
  path: string;
}

const AdminRestaurants: NextPage = () => {
  const { t } = useTranslation()
  const [activeEditId, setActiveEditId] = useState<string>('');
  const [activeData, setActiveData] = useState<Restaurant | null>(null);
  const [globalData, setGlobalData] = useState<Restaurant[]>([]);
  const [isEditMenu, setIsEditMenu] = useState<boolean>(false)
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [data, setData] = useState<Restaurant[]>([]);
  const [restaurants, setRestaurants] = useState<string[]>([]);
  const [noTitle,setNoTitle] = useState(false)

  //! Delete

  const deleteRestaurants = async (id: number | string): Promise<void> => {
    const res = await deleteRestuarant(id);

    if (res?.status == 200 || res?.status == 201 || res?.status == 204) {
      swal("Restoran Silindi");
      renderRestaurant()
    }
  };

  //! Filter Restaurant

  const filterRestaurants = async (title: string): Promise<void> => {
    try {
      const res = await getCategory();
      let categoryId = res?.data.result.data.filter((item: any) => item.name == title)


      let newData = globalData.filter((item: any) => item.category_id === categoryId[0].id);
      setData(newData);
      
      if(newData.length == 0){
        setNoTitle(true)
      }else{
        setNoTitle(false)
      }
    } catch (error) {
      console.error(error);
    }
  }

  //! Add Restaurant

  const addRestaurant = (): void => {
    setIsMenu(!isMenu);
  }

  // ! Render Restaurant 

  useEffect(() => {
    renderRestaurant();
  }, [isMenu, isEditMenu])

  const renderRestaurant = async (): Promise<void> => {
    try {
      const res: any = await getRestuarants();
      setData(res.data?.result.data)
      setGlobalData(res?.data?.result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const renderCategory = async (): Promise<void> => {
    const data = await getCategory();
    const restaurant = data?.data.result.data.map((item: any) => item.name);
    console.log(data?.data.result.data);
    setRestaurants(restaurant);
  }

  useEffect(() => {
    renderCategory()
  }, [])


  const editCategory = async (id: string): Promise<void> => {
    isEditCategory()
    setActiveEditId(id);
    const response = await getRestuarants()
    const item = response?.data.result.data.filter((item: any) => item.id == id)
    setActiveData(item[0])
  };


  const isEditCategory = (): void => {
    setIsEditMenu(!isEditMenu);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-[19px] min-h-screen relative bg-[#1E1E30]">
        <AddRestaurant headTitle={"Add Restaurant"} callBack={addRestaurant} right={isMenu ? "0%" : "-100%"} />
        <EditCategory activeData={activeData} activeEditId={activeEditId} headTitle={'Edit Restaurant'} callBack={isEditCategory} right={isEditMenu ? '0%' : '-100%'} />
        <Header />

        <div className='flex gap-x-4 justify-between'>
          <SideBar />

          <div className="flex flex-col w-full">
            <div className="flex justify-between px-8 py-5 bg-[#27283c] mb-[52px] rounded-lg">
              <h3 className="text-[#C7C7C7] text-xl font-semibold">
                {t("Restaurants")}
              </h3>

              <div className="flex gap-x-10">
                <Dropdown
                  filterItems={filterRestaurants}
                  items={restaurants}
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
                    editCategory={editCategory}
                  />
                ))
              }
            </div>

            <p className='text-white text-[24px] font-bold text-center'>
              {
                noTitle ? "Product Yoxdur" : ""
              }
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminRestaurants;