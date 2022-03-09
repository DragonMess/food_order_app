import CartContext from "./CartContext";
import { useState, useReducer } from "react";

const initialCartReducer = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // Find index of the cart item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // verify if item exist in cart
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // Update the amount in updatedItem
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

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
    cartIsShowen: cartIsShowen,
    setCartIsShowen: setCartIsShowen,
    handleCartIsShowen: handleCartIsShowen,
    state: useState(0),
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
        cartIsShowen: cartIsShowen,
        setCartIsShowen: setCartIsShowen,
        handleCartIsShowen: handleCartIsShowen,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
