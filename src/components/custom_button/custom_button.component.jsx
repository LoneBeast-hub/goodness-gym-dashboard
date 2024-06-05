const CustomButton = ({children, AddClassName, clickFunction, className, primaryColored, redColored, grayColored}) => {
    return(
        <button onClick={clickFunction} className={`font-medium ${AddClassName} ${primaryColored? 'bg-primary-100 text-white' : ''} ${redColored? 'bg-red-100 text-white' : ''} ${grayColored? 'bg-gray-f2 text-black-100' : ''}`}>
            {children}
        </button>
    )
}

export default CustomButton;