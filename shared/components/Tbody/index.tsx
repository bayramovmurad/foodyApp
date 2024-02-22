import React, { useState } from 'react';
import Modal from '../Modal';
import { getOrders } from '../../../services';

const formatDate = (timestamp:any) => {
  const currentDate = new Date();
  const date = new Date(timestamp);
  const timeDifference = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
};

const TBody = ({ item , deleteOrder }:any) => {
      let formattedDate = formatDate(item.created);
      const [isMenu,setIsMenu] = useState<boolean>(false)
      const [deleteModal,setDeleteModal] = useState<boolean>(false)
      const [isShowModal,setIsShowModal] = useState<boolean>(false)
      const [activeProducts,setActiveProducts] = useState([])

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

      const showOrders = async (id: any) => {
        setIsMenu(!isMenu)
        setIsShowModal(!isShowModal)
        const res = await getOrders()
        const activeOrder:any = res?.data.result.data.filter((item:any) => item.id == id)
        console.log(activeOrder[0].products);
        setActiveProducts(activeOrder[0].products);
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
                        formattedDate
                      }
                    </p>
              </td>
              <td className='px-[12px] text-center flex items-center justify-center h-full'>
                  <p className='max-w-[183px] text-[#00072B] text-[14px] font-normal flex items-center h-[50px] text-center'>
                    {
                      item.delivery_address
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
                          item.payment_method == 0 ? "pay at the door" : "pay at the door by credit card"
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
                        <p onClick={() => showOrders(item.id)} className='text-[#6FCF97] text-[14px] font-normal cursor-pointer'>
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

              {
                isShowModal ? (
                  <div className='fixed bg-[#00000040] w-full left-0 top-0 h-full flex justify-center items-center z-10'>
                    <div className='bg-white px-5 py-4 w-[754px] relative z-20'>
                      <table className='w-full'>
                        <thead className='bg-white w-full flex'>
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Image
                                </th>
                            </tr> 
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Name
                                </th>
                            </tr>
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Price
                                </th>
                            </tr>
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Count
                                </th>
                            </tr>
                            <tr className='pt-6 w-full h-full flex justify-center text-center'>
                                <th className='h-[30px] w-full px-[12px] text-[#00072B] text-[14px] font-semibold'>
                                  Amount
                                </th>
                            </tr>
                        </thead>
                          <tbody >
                                {
                                  activeProducts.map((item:any) => (
                                    <tr className='flex justify-between mb-3'>
                                      <td className='text-center w-full flex justify-center'>
                                        <img src={item.img_url} className='w-10 h-10' alt='image' />
                                      </td>
                                      <td className='text-center w-full'>
                                        {
                                          item.name
                                        }
                                      </td>
                                      <td className='text-center w-full'>
                                        {
                                          item.price
                                        }
                                      </td>
                                      <td className='text-center w-full'>
                                        {
                                          item.count
                                        }
                                      </td>
                                      <td className='text-center w-full'>
                                        {
                                          item.amount
                                        }
                                      </td>
                                    </tr>
                                  ))
                                }
                          </tbody>
                      </table>
                      <button onClick={() => setIsShowModal(false)} className='absolute right-3 cursor-pointer top-2 font-medium'>
                        X
                      </button>
                    </div>
                  </div>
                ) : <></>
              }
            </tr>
        </>
      );
}

export default TBody;