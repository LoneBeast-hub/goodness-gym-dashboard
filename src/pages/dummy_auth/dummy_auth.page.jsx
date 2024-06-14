import { Link } from "react-router-dom";

const DummyAuth = () => {
    const membersDashboardRoute = '/members_dashboard';
    const adminDashboardRoute = '/admin_dashboard';
    return(
        <div className="w-full h-[100vh] flex items-center justify-center">
            <div className="flex flex-col gap-[2rem] w-[50%] max-w-[200px] mx-auto">
                <Link to={membersDashboardRoute} className='bg-primary-100 text-center text-white py-4 rounded-xl px-5 text-[2rem]'>Members</Link>
                <Link to={adminDashboardRoute} className='bg-primary-100 text-center text-white py-4 rounded-xl px-5 text-[2rem]'>Admin</Link>
            </div>
        </div>
    )
}

export default DummyAuth;