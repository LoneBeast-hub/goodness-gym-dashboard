// component
import Header from "../../components/header/header.component";
import ScheduleCalendar from "../../components/schedule_calendar/schedule_calendar.component";

const ClassSchedulePage = () => {
    return(
        <div>
            {/* header */}
            <Header pageName='Class Schedule' routeTo='/class_schedule' />
            {/* body */}
            <div className="w-[90%] mx-auto">
                {/* heading */}
                <p className="text-primary-100 mb-[1.8rem] md:mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Schedule</p>
                {/* schedule calendar */}
                <ScheduleCalendar />
            </div>
        </div>
    )
}

export default ClassSchedulePage;