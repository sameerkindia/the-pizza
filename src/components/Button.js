function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-none bg-yellow-400 px-5 rounded-2xl flex justify-center items-center"
    >
      {children}
    </button>
  );
}

export default Button;
