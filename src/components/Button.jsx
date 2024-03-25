const Button = ({ value, handleInsertText, imgUrl }) => {
    const handleClick = () => {
        handleInsertText(value);
    };

    return (
        <button className='text-bold hover:shadow-inner hover:shadow-grey-700 border-r-2 w-14 h-full flex items-center justify-center' onClick={handleClick}>
            <img className="h-5 w-5" src={imgUrl} alt="lgos" />
        </button>
    );
};

export default Button;