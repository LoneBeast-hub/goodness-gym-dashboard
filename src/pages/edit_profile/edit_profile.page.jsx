// components
import Header from "../../components/header/header.component";
// img
import ProfileImg from '../../assets/profile.png';
// react icons
import { FaCamera } from "react-icons/fa";

const EditProfile = () => {
    return(
        <div>
            {/* header */}
            <Header nestedPage={{pageName: 'Settings', routeTo: '/settings'}} pageName='Edit Profile' routeTo='/settings/edit_profile' />
            {/* body (personal information) */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Personal Information</p>
                <div className="border border-gray-e5 pt-[1.7rem] pb-[2.5rem] px-[2.1rem] md:px-[5.6rem] md:py-[2.4rem]">
                    {/* Profile picture */}
                    <div className="relative h-fit w-fit">
                        {/* img */}
                        <img className="w-[60px] h-[60px] md:w-[98px] md:h-[98px]" src={ProfileImg} alt="profile" />
                        {/* image changer */}
                        <div className="cursor-pointer bg-primary-100 w-[22px] flex items-center justify-center absolute bottom-0 right-0 rounded-full h-[22px] md:w-[40px] md:h-[40px]">
                            <FaCamera className="text-[0.9rem] text-white md:text-[1.7rem]" />
                        </div>
                    </div>
                    {/* form */}
                    <form className="mt-[14px] md:mt[17px]" action="#">
                        {/* flex */}
                        <div className="flex flex-col md:flex-row">
                            {/* input */}
                            <div>
                                <label htmlFor="full_name" className="text-[1.4rem] md:text-[2rem] text-black-100">Full Name</label>
                                <input className="text-[2rem] text-black-100" type="text" name="full_name" id="full_name" placeholder="John Doe" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;