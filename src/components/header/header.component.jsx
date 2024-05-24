// images
import { Link } from 'react-router-dom';
import ProfileImg from '../../assets/profile.png'
// react icons
import { IoNotificationsSharp } from "react-icons/io5";

const Header = ({pageName, routeTo}) => {
    return(
        <div className="flex items-center justify-between pt-[2.7rem] w-[90%] mx-auto pb-[0.9rem]">
            {/* Page name */}
            <p className="gap-1 font-medium">
                <span className="text-black-100 text-[2rem]">Home</span>
                <Link to={routeTo} className="text-primary-100 text-[2rem]"> &gt; {pageName}</Link>
            </p>
            {/* profile picture and notification */}
            <div className="flex items-center gap-[2rem]">
                <div className="bg-gray-fa flex items-center justify-center w-[4.1rem] h-[4.1rem] relative rounded-full">
                    <IoNotificationsSharp className="text-[2.47rem] text-primary-100" />
                    <div className="absolute w-[0.82rem] bg-red-100 rounded-full top-0 right-0 h-[0.82rem]"></div>
                </div>
                <div className="w-[4.6rem] h-[4.6rem] rounded-full">
                    <img className='bg-center bg-no-repeat' src={ProfileImg} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Header;