import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHanlder = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const removeItemHandler = (item) => {
    cartCtx.removeItem(item);
  };

  const mealItemName = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        onAdd={addItemHanlder.bind(null, item)}
        onRemove={removeItemHandler.bind(null, item)}
      />
    );
  });
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  return (
    <Modal onClick={props.onClose}>
      <div>
        <ul className={classes["cart-items"]}>{mealItemName}</ul>
      </div>
      <div className={classes.total}>
        Total Amount
        <div>{totalAmount}</div>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Cancle
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
