import CartContext from "./cart-context";

const CartProvider = (props) => {
  const handleAddItem = (item) => {};

  const handleRemoveItem = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    cartIsShowen: false,
    setCartIsShowen: () => {},
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
