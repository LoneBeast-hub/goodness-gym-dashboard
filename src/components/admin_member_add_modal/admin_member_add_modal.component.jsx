// context api
import { MyContext } from "../../App";
import { useContext } from "react";
// react icons
import { LiaTimesSolid } from "react-icons/lia";
import CustomButton from "../custom_button/custom_button.component";

const AdminMemberAddModal = () => {
    const {setContextState} = useContext(MyContext);

    // Notification submission handler
    const handleAddMemberSubmit = (e) => {
        e.preventDefault();
        // code to handle submit will go here

        // after submission, clear form
        // setTitle('');
        // setBody('');
        // setSelectedImage(null);

        // then, set success message
        setContextState((prevValues) => ({
            ...prevValues,
            successMessage: 'The login details will be sent to the attached mail'
        }))
        // then, show success message
        setContextState((prevValues) => ({
            ...prevValues,
            showSuccessModal: true,
            showMemberAddModal: false
        }))
    }

    return(
        <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[rgba(0,0,0,0.6)] fixed z-10 top-0">
            <div className="w-[90%] items-center relative flex flex-col md:w-[55%] md:max-w-[1096px] box-border text-center pt-[2.5rem] md:pt-[5rem] pb-[3.5rem] md:pb-[4.1rem] px-[3.5%] rounded-[5px] bg-white">
                {/* title */}
                <p className="text-[1.8rem] self-start md:text-[3.2rem] text-primary-100 font-bold mb-[1.8rem]">Add Members</p>
                {/* form */}
                <form onSubmit={handleAddMemberSubmit} className="mt-[14px] flex flex-col w-full md:mt[32px]" action="#">
                    {/* flex */}
                    <div className="flex flex-col gap-[2rem] md:flex-row">
                        {/* Full Name input */}
                        <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="full_name" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Full Name</label>
                            <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="full_name" id="full_name" />
                        </div>
                        {/* Username input */}
                        <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="username" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Username <span className="text-[1.4rem] md:text-[2rem] text-primary-100">(Optional)</span></label>
                            <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="text" name="username" id="username" />
                        </div>
                    </div>
                    {/* flex */}
                    <div className="flex flex-col gap-[2rem] mt-[2rem] md:flex-row">
                        {/* Email input */}
                        <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="email" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Email</label>
                            <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="email" name="email" id="email" />
                        </div>
                        {/* Phone number input */}
                        <div className="flex w-full md:w-[50%] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                            <label htmlFor="phone_number" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Phone Number</label>
                            <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="number" name="phone_number" id="phone_number" />
                        </div>
                    </div>
                    {/* Password */}
                    <div className="flex w-full mt-[2rem] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="password" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Password</label>
                        <input required className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="password" name="password" id="password" />
                    </div>
                    {/* note */}
                    <p className="text-primary-100 font-medium text-[1.2rem] md:text-[1.8rem] mt-[2rem] text-left">Note: The given information will create an account for this particular member</p>
                    {/* Date of Registration */}
                    <div className="flex w-full mt-[2rem] flex-col md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="date_of_registration" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Date of Registration</label>
                        <input required className="border leading-normal border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" type="date" name="date_of_registration" id="date_of_registration" />
                    </div>
                    {/* Plan input */}
                    <div className="flex mt-[2rem] w-full flex-col md:gap-[1.5rem] gap-[0.5rem]">
                        <label htmlFor="plan" className="self-start text-[1.4rem] md:text-[2rem] text-black-100">Plan</label>
                        <select className="border border-gray-e5 text-[1.4rem] py-[2rem] rounded-[5px] px-[1.5rem] md:py-[2.5rem] md:px-[2rem] md:text-[2rem] text-black-100" name="plan" id="plan">
                            <option value="intermediate">22,000 - (1 Month)</option>
                        </select>
                    </div>
                    <CustomButton setType='submit' AddClassName='self-end mt-[2rem] w-full md:w-fit py-[1.5rem] md:py-[2.5rem] md:px-[7.2rem]' primaryColored><span className="text-[1.6rem] md:text-[2.4rem]">Submit</span></CustomButton>
                </form>
                {/* cancel */}
                <div onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showMemberAddModal: false
                    }))
                }} className="cursor-pointer w-[31px] h-[31px] md:w-[65px] md:h-[65px] absolute right-[1.9rem] top-[1.9rem] justify-center rounded-full flex items-center bg-gray-f2">
                    <LiaTimesSolid className="text-[1.5rem] md:text-[2.3rem] text-black-100" />
                </div>
            </div>
        </div>
    )
}

export default AdminMemberAddModal;