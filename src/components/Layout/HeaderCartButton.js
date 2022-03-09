import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const { items, handleCartIsShowen } = useContext(CartContext);
  const [isBumping, setIsBumping] = useState(false);

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${isBumping ? classes.bump : ""}`;
  useEffect(() => {
    const timer = setIsBumping(true);
    setTimeout(() => {
      setIsBumping(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={handleCartIsShowen}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Yout Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
