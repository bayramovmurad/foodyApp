import React, { FC, useState } from 'react';
import Modal from '../Modal';

interface TBodyProps {
  item: { 
    id: string; 
    time: string; 
    address: string; 
    amount: number; 
    paymentMethod: string; 
    contact: string 
  };
  deleteOrder: (id: string) => void;
}

const TBody: FC<TBodyProps> = ({ item , deleteOrder }) => {
      const [isMenu,setIsMenu] = useState<boolean>(false)
      const [deleteModal,setDeleteModal] = useState<boolean>(false)

      const showModal = (id: string): void => {
          setIsMenu(!isMenu)
      }

      const deleteItem = (id: string): void => {
          setDeleteModal(!deleteModal)
      }

      const response = (boolParam: boolean) => {
          if(boolParam){
              deleteOrder(item.id)
              setIsMenu(!isMenu)
              setDeleteModal(!deleteModal)
          }else{
              setIsMenu(!isMenu)
              setDeleteModal(!deleteModal)
          }
      }
  
      return (
        <>
            <tr className='relative max-h-[50px] h-[50px] border-t border-b border-[#DFE2E9]'>
              <td className='px-[12px] h-[50px]'>
                  <p className='font-normal text-[14px] border border-[#DFE2E9] text-[#454D59] py-[2px] px-[12px] rounded-lg text-center'>
                    {
                      item.id
                    }
                  </p>
              </td>
              <td className='px-[12px]'>
                    <p className='text-center text-[14px] text-[#00072B] font-normal'>
                      {
                        item.time
                      }
                    </p>
              </td>
              <td className='px-[12px] text-center flex items-center justify-center h-full'>
                  <p className='max-w-[183px] text-[#00072B] text-[14px] font-normal text-center'>
                    {
                      item.address
                    }
                  </p>
              </td>
              <td className='px-[12px] text-center'>
                    <p className='text-center text-[#00072B] font-normal text-[14px]'>
                        {
                          item.amount
                        }
                    </p>
              </td>
              <td className='px-[12px] text-center'>
                    <p className='text-center text-[#00072B] font-normal text-[14px]'>
                        {
                          item.paymentMethod
                        }
                    </p>
              </td>
              <td className='px-[12px] text-center'>
                    <p className='text-center text-[#00072B] font-normal text-[14px]'>
                        {
                          item.contact
                        }
                    </p>
              </td>
              
              <td className='cursor-pointer' onClick={() => showModal(item.id)}>
                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="4" height="4" rx="2" fill="#828282"/>
                    <rect y="6" width="4" height="4" rx="2" fill="#828282"/>
                    <rect y="12" width="4" height="4" rx="2" fill="#828282"/>
                </svg>
              </td>

              {
                  isMenu ? (
                    <div style={{boxShadow:"0px 3px 8px -2px rgba(0, 0, 0, 0.20)"}} className='bg-white flex flex-col gap-2 z-10 top-[30px] right-[10px] absolute py-[5px] px-[13px]'>
                        <p onClick={() => showItem()} className='text-[#6FCF97] text-[14px] font-normal cursor-pointer'>
                            show
                        </p>
                        <p onClick={() => deleteItem(item.id)} className='text-[#EB5757] text-[14px] font-normal cursor-pointer'>
                            delete
                        </p>
                    </div>
                  ) : (
                    <></>
                  )
              }

              {
                deleteModal ? (
                  <Modal
                      title={"Are you sure it’s deleted ?"}
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
        </>
      );
}

export default TBody;