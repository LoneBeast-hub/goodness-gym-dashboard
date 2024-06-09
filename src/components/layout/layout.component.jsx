// react router dom
import { NavLink, Route, Routes } from "react-router-dom";
// pages
import DashboardPage from "../../pages/dashboard/dashboard.page";
import ToDoPage from "../../pages/to_do/to_do.page";
// imgs
import Logo from '../../assets/ggfm_logo.png';
// react icons
import { AiOutlineLogout } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { BsMegaphone } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
// styles
import './layout.styles.css';
import ClassSchedulePage from "../../pages/class_schedule/class_schedule.page";
import AnnouncementPage from "../../pages/announcement/announcement.page";
import SettingsPage from "../../pages/settings/settings.page";
// use context
import { useContext } from "react";
import { MyContext } from "../../App";
import EditProfile from "../../pages/edit_profile/edit_profile.page";

const Layout = () => {
    const {contextState} = useContext(MyContext);
    return(
        <div className="flex w-full">
            {/* desktop sidebar */}
            <div className={`min-w-[263px] z-10 bg-white box-border border-r-[1px] border-r-gray-e5 fixed transition-all ${contextState.showNav? 'left-[0]' : 'left-[-100%]'} lg:left-0 top-0 px-[2.45rem] pt-[3.6rem] gap-[3.6rem] flex-col min-h-[100vh] flex`}>
                {/* logo */}
                <img src={Logo} className="max-w-[160px] mx-auto max-h-[82px]" alt="Goodness Gym Fitness Center Logo" />
                {/* routes container */}
                <div className="h-full relative">
                    {/* pages routes */}
                    <div className="flex flex-col gap-[0.5rem]">
                        <NavLink to='/' activeclassname='active' className="flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]">
                            <BsGrid1X2 className="text-[2rem]" />
                            <span className="text-[1.8rem]">Dashboard</span>
                        </NavLink>
                        <NavLink to='/to_do' activeclassname='active' className="flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]">
                            <RiFileList3Line className="text-[2.2rem]" />
                            <span className="text-[1.8rem]">To-do</span>
                        </NavLink>
                        <NavLink to='/class_schedule' activeclassname='active' className="flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]">
                            <FaRegClock className="text-[2.2rem]" />
                            <span className="text-[1.8rem]">Class Schedule</span>
                        </NavLink>
                        <NavLink to='/announcement' activeclassname='active' className="flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]">
                            <BsMegaphone className="text-[2.2rem]" />
                            <span className="text-[1.8rem]">Announcement</span>
                        </NavLink>
                        <NavLink to='/settings' activeclassname='active' className="flex text-black-2 gap-[1rem] rounded-[0.5rem] w-full font-medium p-[2rem]">
                            <IoSettingsOutline className="text-[2.2rem]" />
                            <span className="text-[1.8rem]">Settings</span>
                        </NavLink>
                    </div>
                </div>
                {/* logout */}
                <p className="absolute bottom-[7.2rem] left-[3.6rem] font-medium gap-[1rem] flex text-black-2"><AiOutlineLogout className="text-[2rem] transform -rotate-90" /> <span className="text-[2rem]">Logout</span></p>
            </div>
            {/* sidebar frame */}
            <div className="min-w-[263px] min-h-[100vh] hidden lg:flex"></div>
            {/* pages container */}
            <div className="w-full pb-[2.4rem]">
                {/* Routes */}
                <Routes>
                    <Route path="/" exact element={<DashboardPage />} />
                    <Route path="/to_do" element={<ToDoPage />} />
                    <Route path="/class_schedule" element={<ClassSchedulePage />} />
                    <Route path="/announcement" element={<AnnouncementPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/settings/edit_profile" element={<EditProfile />} />
                </Routes>
            </div>
        </div>
    )
}

export default Layout;