import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import classes from "./Cart.module.css";

const cartItems = (
  <ul className={classes["cart-items"]}>
    {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
      <li>{item.name}</li>
    ))}
  </ul>
);

const Cart = (props) => {
  const { handleCartIsShowen, cartIsShowen } = useContext(CartContext);
  return (
    <>
      {cartIsShowen && (
        <Modal onClick={handleCartIsShowen}>
          {cartItems}
          <div className={classes.total}>
            <span>Total amount</span>
            <span>35.62</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button-alt"]}
              onClick={handleCartIsShowen}
            >
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default Cart;
