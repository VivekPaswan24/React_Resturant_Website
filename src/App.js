import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header/Header";
import ResturantSummary from "./components/Layouts/ResturantSummary/ResturantSummary";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartShowHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShow={cartShowHandler} />
      <main>
        <ResturantSummary />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
