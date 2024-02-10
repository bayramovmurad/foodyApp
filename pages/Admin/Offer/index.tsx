import SideBar from "../../../shared/adminComponents/SideBar/SideBar";
import Header from "../../../shared/adminComponents/Header/Header";
import Button from "../../../shared/components/Button";
import OfferComponent from "../../../shared/adminComponents/OfferComponent/OfferComponent";
import RightMenu from "../../../shared/adminComponents/RightMenu";
import AddOffer from "../../../shared/adminComponents/AddOffer";
import EditOffer from '../../../shared/adminComponents/EditOffer'
import { useEffect, useState } from "react";
import { getOffers, deleteOffer } from '../../../services/index'
import { ToastContainer, toast } from "react-toastify";
import type { NextPage } from "next";
import Head from "next/head";


const AdminOffers: NextPage = () => {
  const [offers, setOffers] = useState([])
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [addIsMenu, setAddIsMenu] = useState<boolean>(false)
  const [isEditMenu, setIsEditMenu] = useState<boolean>(false)
  const [activeData, setActiveData] = useState(null);
  const [activeEditId, setActiveEditId] = useState<string>('');
  
  const renderOffers = async () => {
    const response = await getOffers()
    setOffers(response?.data.result.data);
  }

  useEffect(() => {
    renderOffers()
  }, [addIsMenu, isEditMenu])

  //! Add Product

  const addProduct = (): void => {
    setIsMenu(!isMenu)
  }

  const deleteOfferFunction = async (id: number | string) => {
    const res: any = await deleteOffer(id);

    if (res?.status == 200 || res?.status == 201 || res?.status == 204) {
      toast.success("category silindi")
      renderOffers()
    }
  };

  const addOfferFunction = (): void => {
    setAddIsMenu(!addIsMenu)
  }

  const editCategory = async (id: string) => {
    isEditCategory()
    setActiveEditId(id);
    const response = await getOffers()
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

      <ToastContainer />

      <div className="px-[19px] min-h-screen bg-[#1E1E30]">
        <RightMenu headTitle={"Offer"} callBack={addProduct} right={isMenu ? "0%" : "-100%"} />
        <EditOffer activeData={activeData} activeEditId={activeEditId} headTitle={'Edit Offer'} callBack={isEditCategory} right={isEditMenu ? '0%' : '-100%'} />
        <AddOffer headTitle={"Add Offer"} callBack={addOfferFunction} right={addIsMenu ? "0%" : "-100%"} />

        <Header />

        <div className='flex gap-x-4 '>
          <SideBar />
          <div className="flex flex-col w-full">
            <div className="flex justify-between px-8 py-5 bg-[#27283c] mb-[52px] rounded-lg">
              <h3 className="text-[#C7C7C7] text-xl font-semibold">Offer</h3>

              <Button
                value={"+ Add Offer"}
                color={"#FFF"}
                size={"14px"}
                background={"#C035A2"}
                width={"168px"}
                height={"35px"}
                isDisabled={false}
                radius={"14px"}
                weight={600}
                callBack={addOfferFunction}
              />
            </div>

            <div className="flex gap-x-10  gap-y-10 flex-wrap">
              <div className="w-full">
                <table className="border-collapse bg-white w-full">
                  <thead>
                    <tr>
                      <th className=" border-t p-5">ID</th>
                      <th className=" border-t p-5">Image</th>
                      <th className=" border-t p-5">Name</th>
                      <th className=" border-t p-5">Slug</th>
                      <th className=" border-t p-5"></th>
                    </tr>
                  </thead>
                  {
                    <tbody>
                      {
                        offers.map((detail, index) => (
                          <OfferComponent
                            detail={detail}
                            deleteOffer={deleteOfferFunction}
                            editCategory={editCategory}
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

export default AdminOffers;









