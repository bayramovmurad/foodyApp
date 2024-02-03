import React, { FC, useState } from 'react';
import Modal from '../../components/Modal';

interface ProductsComponentProps {
  detail: {
    path: string;
    name: string;
    restaurantName: string;
    id: string;
  };
  deleteProduct: (id: string) => void;
}

const RestaurantComponent: FC<ProductsComponentProps> = ({ detail, deleteProduct }) => {
  const [isMenu, setIsMenu] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)

  const deleteItem = (id: string): void => {
    setDeleteModal(!deleteModal)
  }

  const response = (boolParam: boolean): void => {
    if (boolParam) {
      deleteProduct(detail.id)
      setIsMenu(!isMenu)
      setDeleteModal(!deleteModal)
    } else {
      setIsMenu(!isMenu)
      setDeleteModal(!deleteModal)
    }
  }

  return (
    <div>
      {
        <div className="w-[247px] h-[83px bg-white rounded-md flex p-3 items-center" >
          <div className="flex gap-x-[15px]">
            <div>
              <img className='max-w-[65px] max-h-[57px]' src={detail.img_url} alt="" />
            </div>
            <div>
              <p className="text-gray-800 text-lg font-medium leading-normal tracking-tight">{detail.name}</p>
              <span className="font-semibold  text-neutral-400 text-sm">{detail.address}</span>
            </div>
          </div>
          <div className="flex flex-col ml-auto gap-y-4">
            <img src="/adminImg/RestaurantPage/Pen.svg" alt="" />
            <img onClick={() => deleteItem(detail.id)} className='cursor-pointer' src="/adminImg/RestaurantPage/Bin.svg" alt="" />
          </div>
        </div>
      }

      {
        deleteModal ? (
          <Modal
            title={"Are you sure it's deleted ?"}
            description={"Attention! If you delete this order, it will not come back..."}
            response={response}
            modalResponseTitle={"delete"}
          />
        ) : (
          <>

          </>
        )
      }
    </div>
  )
}
export default RestaurantComponent;