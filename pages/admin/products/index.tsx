import React, { FC, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';

import ProductsComponent from '../../../shared/adminComponents/ProductsComponent/ProductsComponent';
import EditMenuProduct from '../../../shared/adminComponents/EditMenuProduct';
import SideBar from '../../../shared/adminComponents/SideBar/SideBar';
import Header from '../../../shared/adminComponents/Header/Header';
import Dropdown from '../../../shared/adminComponents/Dropdown';

import { getProducts, deleteProduct, getRestuarants } from '../../../services/index';
import RightMenu from '../../../shared/adminComponents/RightMenu';
import { useGlobalStore } from '../../../provider/provider';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  img_url: string;
  rest_id: number;
}

const AdminProducts: NextPage = () => {

  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeData, setActiveData] = useState<Product[]>([]);
  const [globalData, setGlobalData] = useState<Product[]>([]);
  const [restaurants, setRestaurants] = useState<string[]>([]);
  const [activeEditId, setActiveEditId] = useState<string>('');

  //! render Products
  const renderProducts = async (): Promise<void> => {
    try {
      const data = await getProducts();
      setActiveData(data?.data.result.data);
      setGlobalData(data?.data.result.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    renderProducts();
  }, [isMenu,activeEditId]);

  //! Delete Products
  const deleteProductHandler = async (id: number | string): Promise<void> => {
    setIsLoading(false)
    const response: any = await deleteProduct(id);
    if (response.status === 204) {
      toast.success('Product Silindi');
      renderProducts();
      setIsLoading(false)
    }
  };

  //! Filter Products
  const filterProduct = async (title: Product): Promise<void> => {
    try {
      const data = await getRestuarants();
      const restaurant = data?.data.result.data.find((item: any) => item.name === title);

      if (restaurant) {
        let newData = globalData.filter((item: any) => item.rest_id === restaurant.id);
        setActiveData(newData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //! Edit Products
  const addProduct = (): void => {
    setIsMenu(!isMenu);
  };

  const editProduct = (id: string): void => {
    addProduct();
    setActiveEditId(id);
  };

  //! Render Restaurants
  const renderRestaurants = async (): Promise<void> => {
    try {
      const data = await getRestuarants();
      const restaurant = data?.data.result.data.map((item: any) => item.name);
      setRestaurants(restaurant);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    renderRestaurants();
  }, []);

  const callBackBool = () => {
    setIsMenu(!isMenu);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-[19px] min-h-screen bg-[#1E1E30] relative">
        <EditMenuProduct activeData={activeData} activeEditId={activeEditId} headTitle={'Edit product'} callBack={addProduct} right={isMenu ? '0%' : '-100%'} />

        <Header callBackBool={callBackBool} />
        <div className="flex gap-x-4">
          <SideBar />
          <div className="flex flex-col w-full">
            <div className="flex justify-between px-8 py-5 bg-[#27283c] mb-[52px] rounded-lg">
              <h3 className="text-[#C7C7C7] text-xl font-semibold">Products</h3>
              <Dropdown
                filterItems={filterProduct}
                items={restaurants}
                className={'flex bg-[#5A5B70] rounded-[14px] px-[18px] py-2 relative w-[199px] h-[38px]'}
              />
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center w-full h-[400px]">
                <span className="loader">Loading</span>
              </div>
            ) : (
              <></>
            )}

            <div className="flex gap-x-10 gap-y-10 flex-wrap">
              {activeData?.map((item) => (
                <ProductsComponent
                  key={item.id}
                  detail={item}
                  deleteProduct={deleteProductHandler}
                  editProduct={editProduct}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;