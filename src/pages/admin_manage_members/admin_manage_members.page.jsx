// components
import Header from "../../components/header/header.component";
import CustomButton from "../../components/custom_button/custom_button.component";
// react icons
import {FaPlus} from 'react-icons/fa'
import AdminManageMembersTable from "../../components/admin_manage_members_table/admin_manage_members_table.component";
import ManageMembersFilters from "../../components/manage_members_filters/manage_members_filters.component";
// context api
import { MyContext } from "../../App";
import { useContext } from "react";

const AdminManageMembersPage = () => {
    const { setContextState } = useContext(MyContext);
    const adminDashboardRoute = '/admin_dashboard';
    return(
        <div>
            {/* header */}
            <Header pageName='Manage Members' routeTo={`${adminDashboardRoute}/manage_members`} />
            {/* body */}
            <div className="">
                {/* header */}
                <div className="w-[90%] mx-auto flex mt-[1rem] gap-[1.7rem] xl:gap-0 xl:items-center justify-between mb-[1.8rem] md:mb-[2.1rem] flex-col xl:flex-row">
                    {/* heading */}
                    <p className="text-primary-100 font-bold text-[2rem] md:text-[3.2rem]">Manage Members</p>
                    {/* Manage members filter and add */}
                    <div className="flex gap-[7px] max-h-fit items-center">
                        {/* filters */}
                        <ManageMembersFilters />
                        {/* add to list */}
                        <CustomButton clickFunction={() => {
                            setContextState((prevValues) => ({
                                ...prevValues,
                                showMemberAddModal: true
                            }))
                        }} AddClassName='h-fit flex gap-[0.54rem] md:gap-[1rem] py-[0.8rem] md:py-[1.5rem] md:px-[2.2rem] px-[1rem] items-center' primaryColored>
                            <FaPlus className="text-[0.8rem] md:text-[1.5rem]" /><span className="text-[1.2rem] md:text-[1.8rem] md:font-medium">Add Member</span>
                        </CustomButton>
                    </div>
                </div>
                {/* Manage members table */}
                <AdminManageMembersTable />
            </div>
        </div>
    )
}

export default AdminManageMembersPage;