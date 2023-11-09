const Error = ({children}) => {
    return (
        <div className='bg-red-700 text-white text-center font-bold p-2 rounded-md uppercase'>
            {children}
        </div>
    )
}

export default Error