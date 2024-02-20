import { useState } from "react";
import Modal from '../../components/Modal';

interface OfferComponentProps {
    detail: {
        id: number | string;
        img_url: string;
        name: string;
        description: string;
    };
}

const OfferComponent = ({ detail, deleteOffer, editCategory }: any) => {
    const [isMenu, setIsMenu] = useState<boolean>(false)
    const [deleteModal, setDeleteModal] = useState<boolean>(false)

    const deleteItem = (id: string): void => {
        setDeleteModal(!deleteModal)
    }

    const response = (boolParam: boolean): void => {
        if (boolParam) {
            deleteOffer(detail.id)
            setIsMenu(!isMenu)
            setDeleteModal(!deleteModal)
        } else {
            setIsMenu(!isMenu)
            setDeleteModal(!deleteModal)
        }
    }

    return (
        <tr>
            <td className="border-t text-center  p-1 max-w-[290px]  w-[290px] overflow-x-auto whitespace-nowrap">
                <span className="border px-2 py-1 rounded-lg w-[290px]">
                    {detail.id}
                </span>
            </td>
            <td className="border-t text-center  p-1 w-[40px] h-[40px]">
                <img src={`${detail.img_url}`} className="w-[40px] object-cover h-[40px]" />
            </td>
            <td className="border-t text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">
                {detail.name}
            </td>
            <td className="border-t text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">
                {detail.description}
            </td>
            <td className="border-t text-center font-semibold flex justify-center items-center h-[54px]">
                <img onClick={() => editCategory(detail.id)} className="w-[19px] h-[19px] cursor-pointer mr-1" src="/adminImg/CategoryPage/Edit.svg" alt="" />
                <img onClick={() => deleteItem(detail.id)} className='w-[14px] h-[19px] cursor-pointer' src="/adminImg/CategoryPage/del.svg" alt="" />
            </td>

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
        </tr>
    );
}

export default OfferComponent;








