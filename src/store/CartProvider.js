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

  if (action.type === "REMOVE") {
    // Find index of the cart item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    // verify if item exist in cart
    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
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
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
