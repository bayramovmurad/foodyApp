import Link from "next/link";
import { useRouter } from "next/router";
import { useState, FC, useEffect } from "react";

const SideBar: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { asPath , push } = useRouter();

  useEffect(() => {
    const path = asPath.split('/')[2];
    setSelectedItem(path);
  }, [asPath]);

  const handleSelect = (item: string) => {
    if(item !== "Logout"){
      setSelectedItem(item);
      push(`/admin/${item}`);
    }else{
      localStorage.removeItem('adminToken')
      push("/admin/login")
    }
  };

  return (
    <div className="w-64 h-[474px] pl-6 pt-[30px] relative bg-fuchsia-500 rounded-[14px] flex flex-col gap-y-2">
      {["Dashboard", "Products", "Restaurants", "Category", "Orders", "Offer", "History" , "Logout"].map((item) => (
        <div key={item} className="w-64 h-10 relative cursor-pointer flex items-center" onClick={() => handleSelect(item)}>
          <div className={selectedItem === item ? "w-[216px] h-10 top-0 absolute opacity-10 bg-[#fff] rounded" : ""} />
            <div className="w-6 h-6 absolute" />
            <div className="w-[143px] pl-[14px] absolute">
              <span className="flex gap-x-6 text-white">
                <img className="w-6 h-6" src={`/adminImg/SideBar/${item}.svg`} alt={item} />
                <span className="font-semibold">{item}</span>
              </span>
            </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;