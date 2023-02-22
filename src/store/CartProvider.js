import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items,setItems]=useState([])
  const [totalAmount,setTotalAmount]=useState(0)
  const addItemToCartHandler = (item) => {
    setItems((prevItems)=>{
      return [...prevItems,item]
    })
  };

  const removeItemFromCartHandler = () => {};

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
