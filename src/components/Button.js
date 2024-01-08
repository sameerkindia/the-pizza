function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-none bg-[#365486] px-5 w-full py-2 rounded-2xl flex justify-center items-center hover:bg-[#263a5d] "
    >
      {children}
    </button>
  );
}

export default Button;
