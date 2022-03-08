import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  cartIsShowen: false,
  setCartIsShowen: () => {},
  handleCartIsShowen: () => {},
});

export default CartContext;
