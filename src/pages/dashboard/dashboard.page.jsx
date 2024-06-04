// components
import Header from "../../components/header/header.component";
// react icons
import { BsFire } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import ToDoList from "../../components/to_do_list/to_do_list.component";
import ChartsContainer from "../../components/charts_container/charts_container.component";

const DashboardPage = () => {
    return(
        <div>
            {/* header */}
            <Header pageName='Dasboard' routeTo='/' />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[2.1rem] font-bold text-[2rem] lg:text-[3.2rem]">Dashboard</p>
                {/* Metrics row-1 */}
                <div className="flex md:flex-row md:gap-[2%] gap-[2.5rem] w-full flex-col">
                    {/* Calories burnt */}
                    <div className="flex flex-col w-full md:w-[33%] bg-primary-100 gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-[#fba267] w-[3.2rem] lg:w-[4.5rem] rounded-full h-[3.2rem] lg:h-[4.5rem] flex items-center justify-center">
                            <BsFire className="text-[1.7rem] lg:text-[2.4rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[1.8rem] lg:text-[2rem] text-white font-bold">Calories burnt</p>
                        {/* value */}
                        <p className="text-white font-bold"><span className="text-[1.9rem] lg:text-[3rem]">1260</span><span className="text-[1.4rem] lg:text-[2rem]">kcal</span></p>
                    </div>
                    {/* Heart Rate */}
                    <div className="flex flex-col w-full md:w-[33%] bg-gray-fa gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-red-100 w-[3.2rem] lg:w-[4.5rem] rounded-full h-[3.2rem] lg:h-[4.5rem] flex items-center justify-center">
                            <FaHeartbeat className="text-[1.7rem] lg:text-[2.4rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[1.8rem] lg:text-[2rem] text-black-100">Heart Rate</p>
                        {/* value */}
                        <p className="text-black-100 font-medium"><span className="text-[1.9rem] lg:text-[3rem]">130</span><span className="text-[1.4rem] lg:text-[2rem]">bpm</span></p>
                    </div>
                    {/* Weight */}
                    <div className="flex flex-col w-full md:w-[33%] bg-gray-fa gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-pending w-[3.2rem] lg:w-[4.5rem] rounded-full h-[3.2rem] lg:h-[4.5rem] flex items-center justify-center">
                            <IoBag className="text-[1.7rem] lg:text-[2.4rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[1.8rem] lg:text-[2rem] text-black-100">Weight</p>
                        {/* value */}
                        <p className="text-black-100 font-medium"><span className="text-[1.9rem] lg:text-[3rem]">70</span><span className="text-[1.4rem] lg:text-[2rem]">kg</span></p>
                    </div>
                </div>
                {/* Charts Container */}
                <ChartsContainer />
            </div>
            {/* To do List body (contd) */}
            <ToDoList />
        </div>
    )
}

export default DashboardPage;