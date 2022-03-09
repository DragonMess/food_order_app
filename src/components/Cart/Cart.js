import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { handleCartIsShowen, cartIsShowen, items, totalAmount } =
    useContext(CartContext);

  const totalAmountFormated = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = () => {};
  const cartItemAddHandler = () => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <>
      {cartIsShowen && (
        <Modal onClick={handleCartIsShowen}>
          {cartItems}
          <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmountFormated}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button-alt"]}
              onClick={handleCartIsShowen}
            >
              Close
            </button>
            {hasItems && <button className={classes.button}>Order</button>}
          </div>
        </Modal>
      )}
    </>
  );
};
export default Cart;
