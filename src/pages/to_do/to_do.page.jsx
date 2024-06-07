// components
import Header from "../../components/header/header.component";

const ToDoPage = () => {
    return(
        <div>
            {/* header */}
            <Header pageName='To-do' routeTo='/to_do' />
            {/* body */}
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* heading */}
                    <p className="text-primary-100 mb-[1.8rem] md:mb-[2.1rem] font-bold text-[2rem] md:text-[3.2rem]">Schedule</p>
                    {/* todo filter and add */}
                    <div className="flex">
                        {/* filters */}
                        <div className="flex">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoPage;