/* eslint-disable react/prop-types */
const Button = ({ value, handleInsertText, imgUrl }) => {
    const handleClick = () => {
        handleInsertText(value);
    };

    return (
        <button className='text-bold hover:shadow-inner hover:shadow-grey-700 border-2 border-grey-300 w-14 h-full flex items-center justify-center' onClick={handleClick}>
            <img className="h-5 w-5 invert" src={imgUrl} alt="icons" />
        </button>
    );
};

export default Button;