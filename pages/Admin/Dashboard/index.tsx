import React from 'react';
import Header from "../../../shared/adminComponents/Header/Header";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";

const Dashboard: React.FC = () => {
  return (
    <div className="px-[19px] bg-[#1E1E30]">
      <Header />

      <div className='flex gap-x-4 relative'>
        <SideBar />

        <div className='flex justify-between '>

        </div>
      </div>
    </div>

  );
}

export default Dashboard;