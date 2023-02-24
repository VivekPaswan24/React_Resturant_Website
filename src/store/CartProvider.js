import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const addItemToCartHandler = (item) => {
    setTotalAmount((prevAmount) => {
      prevAmount = prevAmount + item.quantity * item.price;
      return prevAmount;
    });
    setItems((prevItems) => {
      let updatedItems;
      const existingItemIndex = prevItems.findIndex(
        (ele) => ele.id === item.id
      );
      const existingItem = prevItems[existingItemIndex];
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: Number(existingItem.quantity) + Number(item.quantity),
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevItems.concat(item);
      }

      return updatedItems;
    });
  };

  const removeItemFromCartHandler = (item) => {
    let updatedItems;
    setTotalAmount((prevAmount) => {
      prevAmount = prevAmount - item.price;
      return prevAmount;
    });
    setItems((prevItems) => {
      const quantity = Number(item.quantity);
      if (quantity === 1) {
        updatedItems = prevItems.filter((ele) => ele.id !== item.id);
      } else {
        const existingItemIndex = prevItems.findIndex(
          (ele) => ele.id === item.id
        );
        const existingItem = prevItems[existingItemIndex];
        let updatedItem = {
          ...existingItem,
          quantity: Number(existingItem.quantity) - 1,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      }
      return updatedItems;
    });
  };

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
