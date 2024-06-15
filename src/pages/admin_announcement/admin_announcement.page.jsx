// component
import Header from "../../components/header/header.component";

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
            </div>
        </div>
    )
}

export default AdminAnnouncementPage;