// images
import { Link } from 'react-router-dom';
import ProfileImg from '../../assets/profile.png'
// react icons
import { IoNotificationsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
// use context
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header = ({pageName, routeTo, nestedPage}) => {
    const {contextState, setContextState} = useContext(MyContext);
    return(
        <div className="flex items-center z-0 relative justify-between pt-[2.7rem] w-[90%] mx-auto pb-[0.9rem]">
            {/* Page name */}
            <div className='flex gap-[1rem]'>
                <button
                 className={`absolute transition-all ${contextState.showNav? 'left-[263px]' : 'left-0'} block lg:hidden text-primary-100`} 
                 onClick={() => {
                    setContextState((prevValues) => ({
                        ...prevValues,
                        showNav: !contextState.showNav
                    }))
                 }} 
                >
                    {contextState.showNav ? <FaTimes className="text-[2.4rem] fixed" /> : <GiHamburgerMenu className="text-[2.4rem]" />}
                </button>
                {/* hamburger frame */}
                <GiHamburgerMenu
                 className={`text-[2.4rem] z-10 transition-all ${contextState.showNav? 'w-0' : 'w-fit'} invisible block lg:hidden text-primary-100`}
                />
                <p className="gap-1 font-medium self-center">
                    <span className="text-black-100 text-[1.4rem] md:text-[2rem]">Home</span>
                    {nestedPage? <Link to={nestedPage.routeTo} className="text-black-100 text-[1.4rem] md:text-[2rem]"> &gt; {nestedPage.pageName}</Link> : ''}
                    <Link to={routeTo} className="text-primary-100 text-[1.4rem] md:text-[2rem]"> &gt; {pageName}</Link>
                </p>
            </div>
            {/* profile picture and notification */}
            <div className="flex items-center relative z-[-1] gap-[0.5rem] md:gap-[2rem]">
                <div className="bg-primary-light md:bg-gray-fa flex items-center justify-center w-[2.8rem] h-[2.8rem] md:w-[4.1rem] md:h-[4.1rem] relative rounded-full">
                    <IoNotificationsSharp className="text-[1.68rem] text-center md:text-[2.47rem] text-primary-100" />
                    <div className="absolute w-[0.558rem] h-[0.558rem] md:h-[0.82rem] md:w-[0.82rem] bg-red-100 rounded-full top-0 right-0"></div>
                </div>
                <div className="w-[2.8rem] md:w-[4.6rem] h-[2.8rem] md:h-[4.6rem] rounded-full">
                    <img className='bg-center bg-no-repeat' src={ProfileImg} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Header;