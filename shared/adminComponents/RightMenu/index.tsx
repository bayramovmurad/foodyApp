import React, { useEffect, useState , useCallback } from 'react'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button';
import Dropdown from '../Dropdown';

import { getRestuarants , createProduct } from '../../../services/index'
import { fileStorage } from '../../../server/configs/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import swal from 'sweetalert';

interface MenuTypes {
    right: string,
    headTitle: string,
    callBack: any
}

interface FormDataTypes {
  name: string;
  description: string;
  price: string;
}

const RightMenu: React.FC<MenuTypes> = ({ right , callBack , headTitle }) => {
    //! States
    const [IMG,setIMG] = useState("")
    const [activeRestaurantId,setActiveRestaurantId] = useState<string>("")
    const [restaurants, setRestaurants] = useState<string[]>([]);
    const [isActive,setIsActive] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormDataTypes>({
        name: "",
        description: "",
        price: "",
    });


    //! Input OnChange Function

    const handleInputChange = useCallback(
      (name: string, value: string) => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      },
      []
    );
    

    //! Filter Function

    const filterProduct = async (title:string) => {
      const data = await getRestuarants()
      const restaurant = data?.data.result.data.filter((item:any) => item.name == title)
      setActiveRestaurantId(restaurant[0].id)
    }

    //! Create Product Function
    
    const saveData = async () => {
      if(formData.name == "" || formData.description == "" || activeRestaurantId == "" || formData.price == "" || IMG == ""){
        swal("Error","Formu Doldurun","error");
      }else{
        const productData = {
            name: formData.name,
            description: formData.description,
            img_url: IMG,
            rest_id: activeRestaurantId,
            price: formData.price
        }

        const data = await createProduct(productData)

        if(data?.status == 200 || data?.status == 201){
          swal("data elave olundu");
          
          setFormData({
            name: "",
            description: "",
            price: "",
          })

          setIMG("")

          setTimeout(() => {
            callBack();
          }, 700);
        }
      }
    }



    //! Render Restaurants Function

    const renderRestaurants = async () => {
        try {
            const data = await getRestuarants();
            const restaurantNames = data?.data.result.data.map((item:any) => item.name);
            setRestaurants(restaurantNames);            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
      renderRestaurants(); 
    },[])

    //! Upload Image 

    const handleNewImg = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const randomId = `${new Date().getTime()}_${Math.floor(
          Math.random() * 1000
        )}`;
        const imageRef = ref(fileStorage, `images/${file.name + randomId}`);
        uploadBytes(imageRef, file)
          .then((snapshot) => {
            getDownloadURL(snapshot.ref)
              .then((downloadURL) => {
                console.log(downloadURL);
                setIMG(downloadURL)
              })
              .catch((error) => {
                console.error("Download URL alınırken bir hata oluştu: ", error);
              });
          })
          .catch((error) => {
            console.error("Dosya yüklenirken bir hata oluştu: ", error);
          });
      } else {
        console.error("No file selected");
      }
    };

    return (
      <div style={{ right: isActive ? "-100%" : right }} className="fixed top-0  h-screen w-[70vw] z-10 bg-[#38394E] py-[25px] pl-[25px] pr-[60px]  transition-all">
            <button onClick={callBack} className="absolute left-[-30px] top-[50px]">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="27" height="27" rx="13.5" fill="#C74FEB"/>
                      <g clipPath="url(#clip0_135_245)">
                        <path d="M19.7116 7.29826C19.3271 6.91373 18.7059 6.91373 18.3214 7.29826L13.5 12.1098L8.67861 7.2884C8.29408 6.90387 7.67292 6.90387 7.2884 7.2884C6.90387 7.67292 6.90387 8.29408 7.2884 8.67861L12.1098 13.5L7.2884 18.3214C6.90387 18.7059 6.90387 19.3271 7.2884 19.7116C7.67292 20.0961 8.29408 20.0961 8.67861 19.7116L13.5 14.8902L18.3214 19.7116C18.7059 20.0961 19.3271 20.0961 19.7116 19.7116C20.0961 19.3271 20.0961 18.7059 19.7116 18.3214L14.8902 13.5L19.7116 8.67861C20.0863 8.30394 20.0863 7.67292 19.7116 7.29826Z" fill="#F2F2F2"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_135_245">
                          <rect width="24" height="24" fill="white" transform="translate(2 1)"/>
                        </clipPath>
                      </defs>
                  </svg>
            </button>

            <p className='text-[#C7C7C7]'>
                {
                  headTitle
                }
            </p>

            <div className='flex justify-between mt-[10px]'>
                <p className='text-[#C7C7C7] text-lg not-italic font-medium leading-6'>
                  Upload your product image
                  <img
                      src={IMG}
                      alt='image'
                      className='w-[150px] h-[120px] object-cover'
                  />
                </p>

                <div className='rounded-[14px] bg-[#43445A] py-[20px] max-w-[536px] w-full flex justify-center items-center relative'>
                      <input onChange={handleNewImg}  className='cursor-pointer opacity-0 h-full w-full absolute' id='productInput' type="file" />

                      <label htmlFor="productInput" className='cursor-pointer'>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_135_286)">
                              <path d="M48.375 25.1C46.675 16.475 39.1 10 30 10C22.775 10 16.5 14.1 13.375 20.1C5.85 20.9 0 27.275 0 35C0 43.275 6.725 50 15 50H47.5C54.4 50 60 44.4 60 37.5C60 30.9 54.875 25.55 48.375 25.1ZM35 32.5V42.5H25V32.5H17.5L29.125 20.875C29.625 20.375 30.4 20.375 30.9 20.875L42.5 32.5H35Z" fill="#EC5CF8"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_135_286">
                                <rect width="60" height="60" fill="white"/>
                              </clipPath>
                            </defs>
                        </svg>

                        <p className='text-[#C7C7C7] text-lg not-italic font-medium leading-6'>
                          upload
                        </p>
                      </label>
                  </div>
            </div>

            <div className='flex justify-between mt-[50px] adminAddProduct'>
                <p className='text-[#C7C7C7] text-lg not-italic font-medium leading-6'>
                  Add your Product description and necessary information
                </p>

                <div className='rounded-[14px] bg-[#43445A] py-[20px] px-[25px] gap-5 max-w-[536px] w-full flex flex-col justify-center items-center'>
                      <div className='flex flex-col w-full'>
                          <Label value={"Name"} forId={"name"} />
                          <Input type={"text"} id={"name"} name={"name"} placeholder={""} value={formData.name} onInputChange={handleInputChange} />
                      </div>
                      <div className='flex flex-col w-full'>
                          <Label value={"Description"} forId={"description"} />
                          <Input type={"text"} id={"description"} name={"description"} placeholder={""} value={formData.description} onInputChange={handleInputChange} />
                      </div>
                      <div className='flex flex-col w-full'>
                          <Label value={"Price"} forId={"price"} />
                          <Input type={"number"} id={"price"} name={"price"} placeholder={""} value={formData.price} onInputChange={handleInputChange} />
                      </div>
                      <div className='w-full'>
                        <Label value={"Restaurants"} forId="" />
                        
                        <Dropdown
                            filterItems={filterProduct}
                            items={restaurants}
                            className={"flex bg-[#5A5B70] rounded-[14px] h-[46px] mt-2 px-[18px] py-2 relative w-full"}
                        />
                      </div>
                </div>
            </div>

            <div className="bottom border-t border-[#43445A] h-[74px] px-[50px] w-full flex gap-10 absolute bottom-0 items-center justify-center">
                <Button
                    value={"Cancel"}
                    color={"#FFF"}
                    size={"18px"}
                    background={"#43445A"}
                    width={"100%"}
                    height={"50px"}
                    isDisabled={false}
                    radius={"14px"}
                    weight={700}
                    callBack={callBack}
                />
                <Button
                    value={"Create  Product"}
                    color={"#FFF"}
                    size={"18px"}
                    background={"#C035A2"}
                    width={"100%"}
                    height={"50px"}
                    isDisabled={false}
                    radius={"14px"}
                    weight={700}
                    callBack={saveData}
                />
            </div>
      </div>
    )
}

export default RightMenu