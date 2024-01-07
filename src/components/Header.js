import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

function Header() {
  return (
    <header className="flex justify-between bg-red-400 px-10 py-5 text-5xl text-yellow-300 font-bold">
      <Link to="/" className="">
        The Pizza
      </Link>
      <nav>
        <Link to="cart" className="hover:text-yellow-400">
          <HiShoppingCart />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
