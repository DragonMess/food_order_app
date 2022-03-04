import CartContext from "./cart-context";
import { useState, useReducer } from "react";

const initialCartReducer = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return initialCartReducer;
};

const CartProvider = (props) => {
  const [cartState, distpatchCartAction] = useReducer(
    cartReducer,
    initialCartReducer
  );
  const handleAddItem = (item) => {
    distpatchCartAction({ type: "ADD", item: item });
  };

  const handleRemoveItem = (id) => {
    distpatchCartAction({ type: "REMOVE", id: id });
  };

  const [cartIsShowen, setCartIsShowen] = useState(false);
  const handleCartIsShowen = () => {
    setCartIsShowen(!cartIsShowen);
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    cartIsShowen: false,
    setCartIsShowen,
    handleCartIsShowen,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
