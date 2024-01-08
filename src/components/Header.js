import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useContext } from "react";
import CartContext from "../context/cartApi";

function Header() {
  const { state } = useContext(CartContext);
  return (
    <header className="flex justify-between px-10 py-4 text-4xl  bg-[#365486] font-bold text-[#7FC7D9]">
      <Link to="/" className="">
        The Pizza
      </Link>
      <nav>
        <Link to="cart" className="hover:text-[#629ead] relative">
          {state.totalQuantity > 0 && (
            <span className="absolute block text-sm py-1 px-2 top-[-10px] right-[-10px]  rounded-full bg-white text-[#365486]">
              {state.totalQuantity}
            </span>
          )}
          <HiShoppingCart />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
