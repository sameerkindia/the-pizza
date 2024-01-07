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
    <li className="m-5 flex flex-col gap-4">
      <div className=" bg-red-700 h-20 flex justify-between rounded-md">
        <div className="bg-red-100 w w-36">img</div>
        <div className="felx-auto">
          <p className=" text-white text-2xl">{item.name}</p>
          <p className="text-xl text-gray-600">{item.price}</p>
          <p>{item.total}</p>
        </div>
        <div className="flex gap-1 items-center p-1">
          <Button onClick={() => onInc(item.id)}>+</Button>
          <span>{item.quantity}</span>
          <Button onClick={() => OnRemove(item.id)}>-</Button>
        </div>
      </div>
    </li>
  );
}

export default CartCard;
