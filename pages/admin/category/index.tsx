import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";
import ProductsComponent from "../../../shared/adminComponents/ProductsComponent/ProductsComponent";
import Header from "../../../shared/adminComponents/Header/Header";
import CategoryComponent from "../../../shared/adminComponents/CategoryComponent/CategoryComponent";
import Button from "../../../shared/components/Button";
import EditCategory from "../../../shared/adminComponents/EditCategory";

import { useEffect, useState } from "react";
import AddCategory from "../../../shared/adminComponents/AddCategory";
import { getCategory , deleteCategory } from '../../../services/index'
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

interface CategoryData {
  id: string | number;
  name: string;
  slug: string;
  path: string;
}

const AdminCategory: NextPage = () => {
  const { t } = useTranslation()
  const [categoryData,setCategory] = useState<CategoryData[]>([])
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [isEditMenu, setIsEditMenu] = useState<boolean>(false)
  const [activeData, setActiveData] = useState<CategoryData | null>(null);
  const [activeEditId, setActiveEditId] = useState<string>('');

  const renderCategory = async () => {
      const response = await getCategory()
      setCategory(response?.data.result.data);
  }

  useEffect(() => {
    renderCategory()
  },[isMenu, isEditMenu])

  //! Add Category

  const addCategory = (): void => {
    setIsMenu(!isMenu)
  }

  const editCategory = async (id: string) => {
      isEditCategory()
      setActiveEditId(id);
      const response = await getCategory()
      const item = response?.data.result.data.filter((item:any) => item.id == id)
      setActiveData(item[0])
  };

  const isEditCategory = (): void => {
    setIsEditMenu(!isEditMenu);
  };

  //! Delete Category

  const deleteCategoryFunction = async (id: number | string) => {
    const res: any = await deleteCategory(id);
    
    if (res?.status == 200 || res?.status == 201 || res?.status == 204) {
      swal("category silindi");
      renderCategory()
    }
  }; 

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-[19px] min-h-screen bg-[#1E1E30]">
        <EditCategory activeData={activeData} activeEditId={activeEditId} headTitle={'Edit Category'} callBack={isEditCategory} right={isEditMenu ? '0%' : '-100%'} />
        <AddCategory headTitle={"Add Category"} callBack={addCategory} right={isMenu ? "0%" : "-100%"} />

        <Header />

        <div className='flex gap-x-4 '>
          <SideBar />

          <div className="flex flex-col w-full">
            <div className="flex justify-between px-8 py-5 bg-[#27283c] mb-[52px] rounded-lg">
              <h3 className="text-[#C7C7C7] text-xl font-semibold">
                {
                  t("Category")
                }
              </h3>

              <Button
                value={"+ Add Category"}
                color={"#FFF"}
                size={"14px"}
                background={"#C035A2"}
                width={"168px"}
                height={"35px"}
                isDisabled={false}
                radius={"14px"}
                weight={600}
                callBack={addCategory}
              />
            </div>


            {categoryData.length == 0 ? (
              <div className="flex justify-center items-center w-full h-[400px]">
                <span className="loader">Loading</span>
              </div>
            ) : (
              <></>
            )}

            <div className="flex gap-x-10  gap-y-10 flex-wrap">
              <div className="w-full">
                <table className="border-collapse bg-white w-full">
                  {
                    categoryData.length > 0 ? (
                      <thead>
                        <tr>
                          <th className="border-t p-5 w-[237px]">ID</th>
                          <th className="border-t p-5">Image</th>
                          <th className="border-t p-5">Name</th>
                          <th className="border-t p-5">Slug</th>
                          <th className="border-t p-5"></th>
                        </tr>
                      </thead>
                    ) : <></> 
                  }
                  
                  {
                    <tbody>
                      {
                        categoryData.map((detail,index) => (
                          <CategoryComponent
                            detail={detail}
                            index={index}
                            deleteCategory={deleteCategoryFunction}
                            editCategory={editCategory}
                            key={index}
                          />
                        ))
                      }
                    </tbody>
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;