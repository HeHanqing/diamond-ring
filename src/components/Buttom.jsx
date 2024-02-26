const Buttom = ({ title, click, disabled }) => {
  return (
    <button
      onClick={click}
      disabled={disabled}
      className={`${
        disabled ? "pointer-events-none" : "pointer-events-auto"
      } w-36 h-14 border-2 border-main rounded-full flex justify-center items-center text-main hover:text-white hover:bg-main transition-all duration-300 ease-in-out`}
    >
      <p className="text-center font-playfair text-xl">{title}</p>
    </button>
  );
};

export default Buttom;
