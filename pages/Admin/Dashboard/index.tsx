import React from 'react';
import Header from "../../../shared/adminComponents/Header/Header";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";

const Dashboard: React.FC = () => {
  return (
    <div className="px-[19px] bg-[#1E1E30]">
      <Header />
     <div className='flex gap-x-4'>
        <SideBar />

        <div className='flex justify-between '>
          <div>
            <img className='w-[472px] min-h-[472px]' src="/adminImg/DashboardPage/Orders.svg" alt="Orders" />
            <img className='w-[634px] min-h-[472px]'  src="/adminImg/DashboardPage/Assignment.svg" alt="Assignment" />
          </div>
          <div>
            <img className='w-[636px] min-h-[472px]' src="/adminImg/DashboardPage/TotalSalary.svg" alt="TotalSalary" />
         
            <img className='w-[472px] min-h-[472px]' src="/adminImg/DashboardPage/AssAction.svg" alt="AssAction" />
          </div>
        </div>

      </div>
     </div>

  );
}

export default Dashboard;
