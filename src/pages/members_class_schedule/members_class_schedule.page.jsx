// component
import Header from "../../components/header/header.component";
import MembersScheduleCalendar from "../../components/members_schedule_calendar/members_schedule_calendar.component";

const MembersClassSchedulePage = () => {
    const membersDashboardRoute = '/members_dashboard';
    return(
        <div>
            {/* header */}
            <Header pageName='Class Schedule' routeTo={`${membersDashboardRoute}/class_schedule`} />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[1.8rem] md:mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Schedule</p>
                {/* schedule calendar */}
                <MembersScheduleCalendar />
            </div>
        </div>
    )
}

export default MembersClassSchedulePage;