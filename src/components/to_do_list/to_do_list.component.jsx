// react icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi2";

const toDoListData = [
    {
        id: 1,
        description: 'Yoga',
        progress: 50,
        due_date: '04/03/23 - 10pm'
    },
    {
        id: 2,
        description: 'Yoga',
        progress: 10,
        due_date: '04/03/23 - 10pm'
    },
    {
        id: 3,
        description: 'Yoga',
        progress: 100,
        due_date: '04/03/23 - 10pm'
    }
]

const ToDoList = () => {
    return(
        <div className="mt-[2.4rem]">
            <div className="flex w-[90%] mx-auto mb-[1.9rem] items-center justify-between">
                {/* heading */}
                <p className="text-primary-100 text-[1.6rem] lg:text-[2.4rem] font-bold">To-do List</p>
                {/* see all */}
                <p className="text-black-100 flex items-center cursor-pointer"><span className="text-[1.2rem] lg:text-[2rem]">See all</span> <MdOutlineKeyboardArrowRight className="text-[1.2rem] lg:text-[3rem]" /> </p>
            </div>
            {/* to-do table (desktop) */}
            <div className="border-[0.5px] md:block w-[90%] mx-auto hidden border-b-0 overflow-x-scroll border-gray-e5 rounded-[0.5rem]">
                <table className="w-full table-auto min-w-[600px]">
                    <thead>
                        <tr className="bg-gray-fa border-b-[0.5px] border-gray-e5">
                            <td className="text-[2rem] text-black-100 py-[2.8rem] pl-[5rem]">Description</td>
                            <td className="text-[2rem] text-black-100 py-[2.8rem]">Progress</td>
                            <td className="text-[2rem] text-black-100 py-[2.8rem]">Due Date</td>
                            <td className="text-[2rem] text-black-100 py-[2.8rem] pr-[5rem] text-right">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toDoListData.map((toDo, index) => {
                                return(
                                    <tr className="border-b-[0.5px] border-gray-e5" key={index}>
                                        <td className="text-[2rem] text-black-100 py-[2.8rem] pl-[5rem]">{toDo.description}</td>
                                        <td className="text-black-100 py-[2.8rem]">
                                            {/* progress container */}
                                            <div className="flex items-center gap-[1rem]">
                                                <div className="w-[147px] rounded-full overflow-hidden h-[3px] bg-gray-e5">
                                                    {/* progress bar*/}
                                                    <div style={{width: `${toDo.progress}%`}} className={`h-full ${toDo.progress >= 11 && toDo.progress <= 99 ? 'bg-pending' : ''} ${toDo.progress <= 10? 'bg-red-100': ''} ${toDo.progress === 100? 'bg-green-100': ''}`}></div>
                                                </div>
                                                <p className="text-[2rem]">{toDo.progress}%</p>
                                            </div>
                                        </td>
                                        <td className="text-[2rem] text-black-100 py-[2.8rem]">
                                            {toDo.due_date}
                                        </td>
                                        <td className="text-black-100 py-[2.8rem] pr-[5rem]">
                                            <div className="flex items-center gap-[1rem] justify-end">
                                                <FiEdit className="text-[2.2rem]" />
                                                <HiOutlineTrash className="text-[2.3rem] text-red-100" />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/* to-do table (mobile) */}
            <div className="block w-full table-auto md:hidden">
                {
                    toDoListData.map((toDo, index) => {
                        return(
                            <div className="border-t-[0.5px] px-[5%] items-center justify-between flex py-[1.9rem] w-full border-gray-f2" key={index}>
                                {/* left side */}
                                <div className="flex flex-col">
                                    <span className="text-black-100 text-[1.4rem]">{toDo.description}</span>
                                    {/* progress container */}
                                    <div className="flex items-center gap-[0.7rem]">
                                        <div className="w-[66px] rounded-full overflow-hidden h-[3px] bg-gray-e5">
                                            {/* progress bar*/}
                                            <div style={{width: `${toDo.progress}%`}} className={`h-full ${toDo.progress >= 11 && toDo.progress <= 99 ? 'bg-pending' : ''} ${toDo.progress <= 10? 'bg-red-100': ''} ${toDo.progress === 100? 'bg-green-100': ''}`}></div>
                                        </div>
                                        <p className="text-black-100 text-[1.2rem]">{toDo.progress}%</p>
                                    </div>
                                </div>
                                {/* right side */}
                                <div className="flex gap-[0.5rem] items-center">
                                    <div className="text-[1.2rem] text-black-100">
                                        {toDo.due_date}
                                    </div>
                                    <div className="text-black-100">
                                        <div className="flex items-center gap-[0.05rem] justify-end">
                                            <FiEdit className="text-[1.2rem]" />
                                            <HiOutlineTrash className="text-[1.3rem] text-red-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ToDoList;