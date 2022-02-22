import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const { setCartIsShowen } = useContext(CartContext);
  return <div className={classes.backdrop} onClick={() => setCartIsShowen()} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
