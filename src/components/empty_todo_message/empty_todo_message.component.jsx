// imgs
import EmptyTodoImg from '../../assets/empty_todo.png';

const EmptyTodoMessage = () => {
    return(
        <div className="h-full flex-col w-full flex items-center justify-center">
            <img className='max-w-[165px] w-full md:max-w-[290px]' src={EmptyTodoImg} alt="Todo list is empty" />
            <p className='mt-[1rem] md:mt-[3rem] text-black-100 font-medium text-[1.6rem] md:text-[2.4rem]'>You have not added a task yet</p>
        </div>
    )
}

export default EmptyTodoMessage;