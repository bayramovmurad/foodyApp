import React from 'react';
import Header from "../../../shared/adminComponents/Header/Header";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";

const Dashboard: React.FC = () => {
  return (
    <div className="px-[19px] bg-[#1E1E30]">
      <Header />
     <div className='flex gap-x-4'>
        <SideBar />

        <div className='flex gap-y-[30px]'>
          <div>
            <img src="/adminImg/DashboardPage/Orders.svg" alt="Orders" />
            <img src="/adminImg/DashboardPage/Assignment.svg" alt="Assignment" />
          </div>
          <div>
            <img src="/adminImg/DashboardPage/TotalSalary.svg" alt="TotalSalary" />
         
            <img src="/adminImg/DashboardPage/AssAction.svg" alt="AssAction" />
          </div>
        </div>

      </div>
     </div>

  );
}

export default Dashboard;
