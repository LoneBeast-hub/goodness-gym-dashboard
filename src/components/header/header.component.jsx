// images
import { Link } from 'react-router-dom';
import ProfileImg from '../../assets/profile.png'
// react icons
import { IoNotificationsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({pageName, routeTo}) => {
    return(
        <div className="flex items-center justify-between pt-[2.7rem] w-[90%] mx-auto pb-[0.9rem]">
            {/* Page name */}
            <div className='flex gap-[1rem]'>
                <GiHamburgerMenu className='text-[2.4rem] block lg:hidden text-primary-100' />
                <p className="gap-1 font-medium self-center">
                    <span className="text-black-100 text-[1.4rem] lg:text-[2rem]">Home</span>
                    <Link to={routeTo} className="text-primary-100 text-[1.4rem] lg:text-[2rem]"> &gt; {pageName}</Link>
                </p>
            </div>
            {/* profile picture and notification */}
            <div className="flex items-center gap-[0.5rem] lg:gap-[2rem]">
                <div className="bg-primary-light lg:bg-gray-fa flex items-center justify-center w-[2.8rem] h-[2.8rem] lg:w-[4.1rem] lg:h-[4.1rem] relative rounded-full">
                    <IoNotificationsSharp className="text-[1.68rem] text-center lg:text-[2.47rem] text-primary-100" />
                    <div className="absolute w-[0.558rem] h-[0.558rem] lg:h-[0.82rem] lg:w-[0.82rem] bg-red-100 rounded-full top-0 right-0"></div>
                </div>
                <div className="w-[2.8rem] lg:w-[4.6rem] h-[2.8rem] lg:h-[4.6rem] rounded-full">
                    <img className='bg-center bg-no-repeat' src={ProfileImg} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Header;