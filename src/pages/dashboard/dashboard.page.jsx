// components
import Header from "../../components/header/header.component";
// react icons
import { BsFire } from "react-icons/bs";
import { FaHeartbeat } from "react-icons/fa";
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
                <p className="text-primary-100 mb-[2.1rem] font-bold text-[3.2rem]">Dashboard</p>
                {/* Metrics row-1 */}
                <div className="flex md:flex-row md:gap-[2%] gap-[2.5rem] w-full flex-col">
                    {/* Calories burnt */}
                    <div className="flex flex-col w-full md:w-[33%] bg-primary-100 gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-[#fba267] w-[4.5rem] rounded-full h-[4.5rem] flex items-center justify-center">
                            <BsFire className="text-[2.4rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[2rem] text-white font-bold">Calories burnt</p>
                        {/* value */}
                        <p className="text-white font-bold"><span className="text-[3rem]">1260</span><span className="text-[2rem]">kcal</span></p>
                    </div>
                    {/* Heart Rate */}
                    <div className="flex flex-col w-full md:w-[33%] bg-gray-fa gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-red-100 w-[4.5rem] rounded-full h-[4.5rem] flex items-center justify-center">
                            <FaHeartbeat className="text-[2.4rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[2rem] text-black-100">Heart Rate</p>
                        {/* value */}
                        <p className="text-black-100 font-medium"><span className="text-[3rem]">130</span><span className="text-[2rem]">bpm</span></p>
                    </div>
                    {/* Weight */}
                    <div className="flex flex-col w-full md:w-[33%] bg-gray-fa gap-[1rem] py-[3.05rem] px-[2.5rem] rounded-[1rem]">
                        {/* icon */}
                        <div className="bg-pending w-[4.5rem] rounded-full h-[4.5rem] flex items-center justify-center">
                            <FaHeartbeat className="text-[2.4rem] text-white" />
                        </div>
                        {/* title */}
                        <p className="text-[2rem] text-black-100">Weight</p>
                        {/* value */}
                        <p className="text-black-100 font-medium"><span className="text-[3rem]">70</span><span className="text-[2rem]">kg</span></p>
                    </div>
                </div>
                {/* Charts Container */}
                <ChartsContainer />
                {/* To do List */}
                <ToDoList />
            </div>
        </div>
    )
}

export default DashboardPage;