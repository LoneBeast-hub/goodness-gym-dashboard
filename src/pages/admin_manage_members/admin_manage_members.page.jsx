// components
import Header from "../../components/header/header.component";
import CustomButton from "../../components/custom_button/custom_button.component";
// react icons
import {FaPlus} from 'react-icons/fa'

const AdminManageMembersPage = () => {
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
                    {/* todo filter and add */}
                    <div className="flex gap-[7px] max-h-fit items-center">
                        {/* filters */}
                        <div className="max-h-fit flex gap-[7px] md:[13px]">
                            {/* <button
                                className={`md:px-[2rem] max-h-fit border gap-[3px] md:gap-[5px] flex items-center px-[0.7rem] py-[0.8rem] md:py-[1.5rem] text-black-100 bg-gray-fa ${selectedFilters.includes('just started') ? 'border-red-100' : 'border-gray-fa'}`}
                                onClick={() => handleFilterClick('just started')}
                            >
                                <span className="w-[6px] h-[6px] md:w-[11px] md:h-[11px] rounded-full bg-red-100"></span>
                                <span className="text-[1.2rem] md:text-[2rem]">Just Started</span>
                            </button>
                            <button
                                className={`md:px-[2rem] max-h-fit border gap-[3px] md:gap-[5px] flex items-center px-[0.7rem] py-[0.8rem] md:py-[1.5rem] text-black-100 bg-gray-fa ${selectedFilters.includes('pending') ? 'border-pending' : 'border-gray-fa'}`}
                                onClick={() => handleFilterClick('pending')}
                            >
                                <span className="w-[6px] h-[6px] md:w-[11px] md:h-[11px] rounded-full bg-pending"></span>
                                <span className="text-[1.2rem] md:text-[2rem]">Pending</span>
                            </button>
                            <button
                                className={`md:px-[2rem] max-h-fit border gap-[3px] md:gap-[5px] flex items-center px-[0.7rem] py-[0.8rem] md:py-[1.5rem] text-black-100 bg-gray-fa ${selectedFilters.includes('completed') ? 'border-green-100' : 'border-gray-fa'}`}
                                onClick={() => handleFilterClick('completed')}
                            >
                                <span className="w-[6px] h-[6px] md:w-[11px] md:h-[11px] rounded-full bg-green-100"></span>
                                <span className="text-[1.2rem] md:text-[2rem]">Completed</span>
                            </button> */}
                        </div>
                        {/* add to list */}
                        <CustomButton clickFunction={() => {
                            setContextState((prevValues) => ({
                                ...prevValues,
                                showTodoAddModal: true
                            }))
                        }} AddClassName='h-fit flex gap-[0.54rem] md:gap-[1rem] py-[0.8rem] md:py-[1.5rem] md:px-[2.2rem] px-[1rem] items-center' primaryColored>
                            <FaPlus className="text-[0.8rem] md:text-[1.5rem]" /><span className="text-[1.2rem] md:text-[1.8rem] md:font-medium">Add Member</span>
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminManageMembersPage;