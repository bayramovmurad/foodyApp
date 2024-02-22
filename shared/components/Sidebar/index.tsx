import { useRouter } from "next/router";
import { useState , useEffect } from "react";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
    const { t } = useTranslation()
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const router = useRouter();
    const { asPath } = router;

    useEffect(() => {
        const path = asPath.split('/')[2];
        setSelectedItem(path);
    }, [asPath]);

    const handleSelect = (item: string) => {
        router.push(`/client/${item}`);
    };

    const logout = () => {
        handleSelect("/login")
        localStorage.removeItem("userInformation")
        localStorage.removeItem("token")
    }

    return (
        <div className="bg-[#F3F4F6] w-[325px] h-[515px] flex flex-col pt-[45px] gap-[12px] px-[45px] rounded">
                <div className={`${selectedItem == "profile" ? "bg-red-300 rounded" : ""} w-[233px] h-[56px] pl-[14px] flex gap-3 items-center cursor-pointer`} onClick={() => handleSelect("/profile")}>
                    {
                        selectedItem == "profile" ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_152_2530)">
                                    <path d="M16.5 13C15.3 13 13.43 13.34 12 14C10.57 13.33 8.7 13 7.5 13C5.33 13 1 14.08 1 16.25V19H23V16.25C23 14.08 18.67 13 16.5 13ZM12.5 17.5H2.5V16.25C2.5 15.71 5.06 14.5 7.5 14.5C9.94 14.5 12.5 15.71 12.5 16.25V17.5ZM21.5 17.5H14V16.25C14 15.79 13.8 15.39 13.48 15.03C14.36 14.73 15.44 14.5 16.5 14.5C18.94 14.5 21.5 15.71 21.5 16.25V17.5ZM7.5 12C9.43 12 11 10.43 11 8.5C11 6.57 9.43 5 7.5 5C5.57 5 4 6.57 4 8.5C4 10.43 5.57 12 7.5 12ZM7.5 6.5C8.6 6.5 9.5 7.4 9.5 8.5C9.5 9.6 8.6 10.5 7.5 10.5C6.4 10.5 5.5 9.6 5.5 8.5C5.5 7.4 6.4 6.5 7.5 6.5ZM16.5 12C18.43 12 20 10.43 20 8.5C20 6.57 18.43 5 16.5 5C14.57 5 13 6.57 13 8.5C13 10.43 14.57 12 16.5 12ZM16.5 6.5C17.6 6.5 18.5 7.4 18.5 8.5C18.5 9.6 17.6 10.5 16.5 10.5C15.4 10.5 14.5 9.6 14.5 8.5C14.5 7.4 15.4 6.5 16.5 6.5Z" fill="#D63626"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_152_2530">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_152_2530)">
                                    <path d="M16.5 13C15.3 13 13.43 13.34 12 14C10.57 13.33 8.7 13 7.5 13C5.33 13 1 14.08 1 16.25V19H23V16.25C23 14.08 18.67 13 16.5 13ZM12.5 17.5H2.5V16.25C2.5 15.71 5.06 14.5 7.5 14.5C9.94 14.5 12.5 15.71 12.5 16.25V17.5ZM21.5 17.5H14V16.25C14 15.79 13.8 15.39 13.48 15.03C14.36 14.73 15.44 14.5 16.5 14.5C18.94 14.5 21.5 15.71 21.5 16.25V17.5ZM7.5 12C9.43 12 11 10.43 11 8.5C11 6.57 9.43 5 7.5 5C5.57 5 4 6.57 4 8.5C4 10.43 5.57 12 7.5 12ZM7.5 6.5C8.6 6.5 9.5 7.4 9.5 8.5C9.5 9.6 8.6 10.5 7.5 10.5C6.4 10.5 5.5 9.6 5.5 8.5C5.5 7.4 6.4 6.5 7.5 6.5ZM16.5 12C18.43 12 20 10.43 20 8.5C20 6.57 18.43 5 16.5 5C14.57 5 13 6.57 13 8.5C13 10.43 14.57 12 16.5 12ZM16.5 6.5C17.6 6.5 18.5 7.4 18.5 8.5C18.5 9.6 17.6 10.5 16.5 10.5C15.4 10.5 14.5 9.6 14.5 8.5C14.5 7.4 15.4 6.5 16.5 6.5Z" fill="#828282"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_152_2530">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        )
                    }
                    <span className={`${selectedItem == "profile" ? "text-[#D63626]" : ""} font-semibold text-[#828282] text-[20px]`}>
                        {
                            t("profile")
                        }
                    </span>
                </div>

                <div className={`${selectedItem == "userbasket" ? "bg-red-300 rounded" : ""} w-[233px] h-[56px] pl-[14px] gap-3 flex items-center cursor-pointer`} onClick={() => handleSelect("/userbasket")}>
                    {
                        selectedItem == "userbasket" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_152_2533)">
                                    <path d="M22 8.99953H17.21L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953ZM12 4.79953L14.8 8.99953H9.2L12 4.79953ZM18.5 18.9995L5.51 19.0095L3.31 10.9995H20.7L18.5 18.9995ZM12 12.9995C10.9 12.9995 10 13.8995 10 14.9995C10 16.0995 10.9 16.9995 12 16.9995C13.1 16.9995 14 16.0995 14 14.9995C14 13.8995 13.1 12.9995 12 12.9995Z" fill="#D63626"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_152_2533">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_152_2536)">
                                    <path d="M22 8.99953H17.21L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953ZM12 4.79953L14.8 8.99953H9.2L12 4.79953ZM18.5 18.9995L5.51 19.0095L3.31 10.9995H20.7L18.5 18.9995ZM12 12.9995C10.9 12.9995 10 13.8995 10 14.9995C10 16.0995 10.9 16.9995 12 16.9995C13.1 16.9995 14 16.0995 14 14.9995C14 13.8995 13.1 12.9995 12 12.9995Z" fill="#828282"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_152_2536">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        )
                    }
                    <span className={`${selectedItem == "userbasket" ? "text-[#D63626]" : ""} font-semibold text-[#828282] text-[20px]`}>
                        {
                            t("yourbasket")
                        }
                    </span>
                </div>

                <div className={`${selectedItem == "orders" ? "bg-red-300 rounded" : ""} w-[233px] h-[56px] pl-[14px] gap-3 flex items-center cursor-pointer`} onClick={() => handleSelect("/orders")}>
                    {
                        selectedItem == "orders" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_152_2533)">
                                    <path d="M22 8.99953H17.21L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953ZM12 4.79953L14.8 8.99953H9.2L12 4.79953ZM18.5 18.9995L5.51 19.0095L3.31 10.9995H20.7L18.5 18.9995ZM12 12.9995C10.9 12.9995 10 13.8995 10 14.9995C10 16.0995 10.9 16.9995 12 16.9995C13.1 16.9995 14 16.0995 14 14.9995C14 13.8995 13.1 12.9995 12 12.9995Z" fill="#D63626"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_152_2533">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_152_2536)">
                                    <path d="M22 8.99953H17.21L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953ZM12 4.79953L14.8 8.99953H9.2L12 4.79953ZM18.5 18.9995L5.51 19.0095L3.31 10.9995H20.7L18.5 18.9995ZM12 12.9995C10.9 12.9995 10 13.8995 10 14.9995C10 16.0995 10.9 16.9995 12 16.9995C13.1 16.9995 14 16.0995 14 14.9995C14 13.8995 13.1 12.9995 12 12.9995Z" fill="#828282"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_152_2536">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        )
                    }
                    <span className={`${selectedItem == "orders" ? "text-[#D63626]" : ""} font-semibold text-[#828282] text-[20px]`}>
                        {
                            t("yourorder")
                        }
                    </span>
                </div>

                <div className={`${selectedItem == "checkout" ? "bg-red-300 rounded" : ""} w-[233px] h-[56px] pl-[14px] gap-3 flex items-center cursor-pointer`} onClick={() => handleSelect("/checkout")}>
                    {
                        selectedItem == "checkout" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_152_2533)">
                                    <path d="M22 8.99953H17.21L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953ZM12 4.79953L14.8 8.99953H9.2L12 4.79953ZM18.5 18.9995L5.51 19.0095L3.31 10.9995H20.7L18.5 18.9995ZM12 12.9995C10.9 12.9995 10 13.8995 10 14.9995C10 16.0995 10.9 16.9995 12 16.9995C13.1 16.9995 14 16.0995 14 14.9995C14 13.8995 13.1 12.9995 12 12.9995Z" fill="#D63626"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_152_2533">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_152_2536)">
                                    <path d="M22 8.99953H17.21L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953ZM12 4.79953L14.8 8.99953H9.2L12 4.79953ZM18.5 18.9995L5.51 19.0095L3.31 10.9995H20.7L18.5 18.9995ZM12 12.9995C10.9 12.9995 10 13.8995 10 14.9995C10 16.0995 10.9 16.9995 12 16.9995C13.1 16.9995 14 16.0995 14 14.9995C14 13.8995 13.1 12.9995 12 12.9995Z" fill="#828282"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_152_2536">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        )
                    }
                    <span className={`${selectedItem == "checkout" ? "text-[#D63626]" : ""} font-semibold text-[#828282] text-[20px]`}>
                        {
                            t("Checkouts")
                        }
                    </span>
                </div>

                <div className={`w-[233px] h-[56px] pl-[14px] gap-3 flex items-center cursor-pointer`} onClick={logout}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_152_2536)">
                            <path d="M22 8.99953H17.21L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953ZM12 4.79953L14.8 8.99953H9.2L12 4.79953ZM18.5 18.9995L5.51 19.0095L3.31 10.9995H20.7L18.5 18.9995ZM12 12.9995C10.9 12.9995 10 13.8995 10 14.9995C10 16.0995 10.9 16.9995 12 16.9995C13.1 16.9995 14 16.0995 14 14.9995C14 13.8995 13.1 12.9995 12 12.9995Z" fill="#828282"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_152_2536">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <span className={`font-semibold text-[#828282] text-[20px]`}>
                        {
                            t("logout")
                        }
                    </span>
                </div>
        </div>
    )
}

export default Sidebar