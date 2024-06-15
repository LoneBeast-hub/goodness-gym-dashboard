// component
import Header from "../../components/header/header.component";
import CustomButton from "../../components/custom_button/custom_button.component";

const AdminAnnouncementPage = () => {
    const adminDashboardRoute = '/admin_dashboard';
    return(
        <div>
            {/* header */}
            <Header pageName='Announcement' routeTo={`${adminDashboardRoute}/announcement`} />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 md:mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Announcement</p>
                {/* body */}
                <div className="border border-gray-e5 p-[1.7rem] md:pl-[4.7rem] md:pr-[3.8rem] md:pb-[1.9rem] md:pt-[3.8rem]">
                    {/* form */}
                    <form className="mt-[14px] md:mt[17px]" action="#">
                        {/* Title input */}
                        <div className="flex w-full flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="title" className="text-[1.4rem] md:text-[2rem] text-black-100">Title</label>
                            <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="title" id="title" />
                        </div>
                        {/* Body input */}
                        <div className="flex w-full flex-col mt-[2rem] md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="body" className="text-[1.4rem] md:text-[2rem] text-black-100">Body</label>
                            <textarea required className="border leading-normal resize-none h-[176px] border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="body" id="body"></textarea>
                        </div>
                        {/* Update button */}
                        <div className="w-full flex mt-[2rem] md:justify-end">
                            <CustomButton setType='submit' AddClassName='w-full md:w-fit py-[1.5rem] md:py-[2.5rem] md:px-[7.2rem]' primaryColored><span className="text-[1.6rem] md:text-[2.4rem]">Update</span></CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminAnnouncementPage;