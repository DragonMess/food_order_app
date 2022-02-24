import CartContext from "./cart-context";
import { useState } from "react";
const CartProvider = (props) => {
  const handleAddItem = (item) => {};

  const handleRemoveItem = (id) => {};

  const [cartIsShowen, setCartIsShowen] = useState(false);
  const handleCartIsShowen = () => {
    setCartIsShowen(!cartIsShowen);
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
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
