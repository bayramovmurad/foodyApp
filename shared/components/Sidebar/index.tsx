import { useRouter } from "next/router";
import { useState , useEffect } from "react";

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const router = useRouter();
    const { asPath } = router;

    useEffect(() => {
        const path = asPath.split('/')[2];
        console.log(path);
        
        setSelectedItem(path);
    }, [asPath]);

    const handleSelect = (item: string) => {
        router.push(`/client/${item.toLowerCase()}`);
    };
  return (
    <div className="bg-[#F3F4F6] w-[325px] h-[515px] flex flex-col pt-[45px] gap-[12px] px-[45px] rounded">
            <div className={`${selectedItem == "profile" ? "bg-[#D63626] rounded" : ""} w-[233px] h-[56px] pl-[14px] flex items-center cursor-pointer`} onClick={() => handleSelect("/profile")}>
                <span className={`${selectedItem == "profile" ? "text-[#fff]" : ""} font-semibold text-[#828282] text-[20px]`}>
                    Profile
                </span>
            </div>
            <div className={`${selectedItem == "userbasket" ? "bg-[#D63626] rounded" : ""} w-[233px] h-[56px] pl-[14px] flex items-center cursor-pointer`} onClick={() => handleSelect("/userbasket")}>
                <span className={`${selectedItem == "userbasket" ? "text-[#fff]" : ""} font-semibold text-[#828282] text-[20px]`}>
                    Your Basket 
                </span>
            </div>
    </div>
  )
}

export default Sidebar