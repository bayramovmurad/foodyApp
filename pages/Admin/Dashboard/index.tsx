import Header from "../../../shared/adminComponents/Header/Header";
import SideBar from "../../../shared/adminComponents/SideBar/SideBar";

// import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart } from '@mui/x-charts/PieChart';

const Dashboard: React.FC = () => {
  return (
    <div className="px-[19px] min-h-screen bg-[#1E1E30]">
      <Header />

      <div className='flex gap-x-4 justify-between relative'>
        <SideBar />

        <div className="w-full flex justify-around gap-[30px]">
          <div className="bg-[#27283C] rounded-[14px] max-w-[472px] max-h-[472px] w-full px-[24px] py-[16px] flex text-left flex-col gap-14">
            <p className="text-[#C7C7C7] text-[20px] font-medium">
              Order
            </p>

            <div className="w-full flex justify-center items-center">
              {/* <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Kfc' },
                      { id: 1, value: 15, label: 'Mc Donalds' },
                      { id: 2, value: 20, label: 'Papa Johns' },
                    ],
                  },
                ]}
                width={400}
                height={200}
              /> */}
            </div>
          </div>

          <div className="bg-[#27283C] rounded-[14px] max-w-[634px] w-full px-[24px] py-[16px] flex text-left flex-col gap-10">
            <p className="text-[#C7C7C7] text-[20px] font-medium">
              Total Salary
            </p>

            <div className="w-full flex justify-center items-center">
              {/* <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={500}
                height={300}
                className="barChart"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dashboard;