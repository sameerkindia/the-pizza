import { useContext } from "react";
import Button from "./Button";
import CartContext from "../context/cartApi";

function CartCard({ item, onInc, onDec }) {
  const { dispatch } = useContext(CartContext);

  function OnRemove(id) {
    if (item.quantity <= 1) {
      dispatch({ type: "REMOVE", payload: item.id });
      dispatch({ type: "TOTAL" });
      return;
    }
    onDec(item.id);
  }
  return (
    <li className="flex flex-col gap-4 p-2 rounded-md bg-[#0F1035]">
      <div className="sm:h-20 sm:flex  rounded-md ">
        <div className="bg-red-100 w-36 h-fit rounded-md">
          <img className="object-cover block" src={item.img_url} alt="pizza" />
        </div>
        <div className="p-4 flex flex-row justify-between w-full gap-2 h-fit">
          <div className="flex flex-row justify-between items-center w-full text-white">
            <p className=" text-2xl">{item.name}</p>
            <div className="text-xl pr-2">
              <p>Price : {item.price}</p>
              <p>Total : {item.total.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex gap-1 items-center p-1 md:w-[20%] text-white ">
            <Button onClick={() => onInc(item.id)}>+</Button>
            <span className="block w-full text-center">{item.quantity}</span>
            <Button onClick={() => OnRemove(item.id)}>-</Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartCard;
