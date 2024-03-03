import Header from "../../../shared/components/Header/index";
import Footer from '../../../shared/components/Footer/index'
import { useState , useCallback , ChangeEvent } from "react";
import { fileStorage } from '../../../server/configs/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Label from "../../../shared/components/Label";
import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";
import swal from "sweetalert";
import { db } from '../../../server/configs/firebase';
import { doc, onSnapshot, setDoc, collection } from 'firebase/firestore';

export default function Restaurants() {
    //! States 
    const [IMG, setIMG] = useState("")
    const [formData, setFormData] = useState<any>({
        name: "",
        description: "",
        url: ""
    });

     //! Input OnChange Function

    const handleInputChange = useCallback(
        (name: string, value: string) => {
            setFormData((prevData:any) => ({
                ...prevData,
                [name]: value,
            }));
        },
        []
    );

    //! Image Upload

    const handleNewImg = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const randomId = `${new Date().getTime()}_${Math.floor(Math.random() * 1000)}`;
            const imageRef = ref(fileStorage, `images/${file.name + randomId}`);
            uploadBytes(imageRef, file)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref)
                        .then((downloadURL) => {
                            setIMG(downloadURL);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.error('No file selected');
        }
    };

    const colletionRef = collection(db, 'InviteOffers');

    const saveData = () => {
        if(formData.name == "" || formData.description == "" || formData.url == "" || IMG == ""){
            swal("Error","Formu Doldurun","error")
        }else {
            const newOffer: any = {
                name: formData.name,
                description: formData.description,
                url: formData.url,
                img_url: IMG
            };
    
            const schoolRef = doc(colletionRef);
            setDoc(schoolRef, newOffer);
            swal("Sorğu göndərildi")
            
            setTimeout(() => {
                setFormData({
                    name:"",
                    description: "",
                })
                setIMG("")
            },1500)
        }
    }

    return (
        <div className="bg-white">
            <div className="p-[30px]">
            <Header
                isLogin={true}
                isBasket={true}
                isAvatar={true}
                isName={false}
                isBottom={false}
            />
            </div>

            <main className="p-[30px] flex justify-center offer">
                <div className="max-w-[1440px] flex justify-between w-full">
                    <div className="flex max-w-[500px] flex-col gap-10 justify-start w-full">
                        <p className="text-[30px] text-[#4F4F4F] py-[20px] font-semibold">
                            Fill out the form to create your Advertising
                        </p>

                        <div className="border-[#4F4F4F] border max-w-[536px] rounded-3xl py-6">
                            <div className='rounded-[14px] py-[20px]  max-w-[536px] w-full flex justify-center items-center relative'>
                                <input onChange={handleNewImg} className='cursor-pointer opacity-0 h-full w-full absolute' id='productInput' type="file" />

                                <label htmlFor="productInput" className='cursor-pointer'>
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_135_286)">
                                            <path d="M48.375 25.1C46.675 16.475 39.1 10 30 10C22.775 10 16.5 14.1 13.375 20.1C5.85 20.9 0 27.275 0 35C0 43.275 6.725 50 15 50H47.5C54.4 50 60 44.4 60 37.5C60 30.9 54.875 25.55 48.375 25.1ZM35 32.5V42.5H25V32.5H17.5L29.125 20.875C29.625 20.375 30.4 20.375 30.9 20.875L42.5 32.5H35Z" fill="#4f4f4f" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_135_286">
                                                <rect width="60" height="60" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className='text-[#4f4f4f] text-lg not-italic font-medium leading-6'>
                                        upload
                                    </p>
                                </label>
                            </div>
                    
                            <div className='rounded-[14px] py-[20px] px-[25px] gap-5 max-w-[536px] w-full flex flex-col justify-center items-center'>
                                <div className='flex flex-col w-full'>
                                    <Label value={"Title"} forId={"name"} />
                                    <Input type={"text"} id={"name"} name={"name"} placeholder={"Enter Name"} value={formData.name} onInputChange={handleInputChange} />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <Label value={"Description"} forId={"description"} />
                                    <Input type={"text"} id={"description"} name={"description"} placeholder={"Enter Description"} value={formData.description} onInputChange={handleInputChange} />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <Label value={"Reclam Link"} forId={"url"} />
                                    <Input type={"text"} id={"url"} name={"url"} placeholder={"Enter Reclam Link"} value={formData.url} onInputChange={handleInputChange} />
                                </div>
                                <div className="w-full mt-5">
                                    <Button
                                        value={"Send Request"}
                                        color={"#FFF"}
                                        size={"18px"}
                                        background={"#4F4F4F"}
                                        width={"100%"}
                                        height={"50px"}
                                        isDisabled={false}
                                        radius={"14px"}
                                        weight={700}
                                        callBack={saveData}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 pt-24">
                        <img
                            src={IMG}
                            alt="Add Adversiting Image"
                            className="w-full h-[500px] object-cover rounded-3xl"
                        />

                    </div>
                </div>
            </main>
        

            <Footer
                isTop={false}
            />
        </div>
    );
};

