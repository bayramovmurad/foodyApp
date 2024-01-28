import React, { FC, useState } from 'react';
import Modal from '../../components/Modal';

interface ProductsComponentProps {
  detail: {
    path: string;
    name: string;
    restaurantName: string;
    price: number;
    id: string;
  };
  deleteProduct: (id: string) => void;
}

const ProductsComponent: FC<ProductsComponentProps> = ({ detail, deleteProduct }) => {
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
        <div className="bg-white rounded-md w-[196px] h-[273px] flex p-[15px] flex-col">
          <img src={detail.path} alt="" />
          <p className="text-left text-gray-800 text-lg font-medium leading-normal tracking-tight">{detail.name}</p>
          <span className="text-left font-semibold  text-neutral-400 text-sm">{detail.restaurantName}</span>
          <div className="flex justify-between">
            <span className="text-teal-500">
              {
                detail.price
              }
            </span>
            <div className="flex justify-between">
              <img src="/adminImg/ProductsPage/Pen.svg" alt="" />
              <img
                onClick={() => deleteItem(detail.id)}
                src="/adminImg/ProductsPage/Bin.svg"
                alt=""
              />
            </div>
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

export default ProductsComponent;












