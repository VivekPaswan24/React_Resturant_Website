import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header/Header";
import ResturantSummary from "./components/Layouts/ResturantSummary/ResturantSummary";
import Meals from "./components/Meals/Meals";

function App() {
   const [showCart,setShowCart]=useState(false)

   const cartShowHandler=()=>{
    setShowCart(true);
   }
   const hideCartHandler=()=>{
    setShowCart(false)
   }
  return (
    <React.Fragment>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShow={cartShowHandler}/>
      <main>
        <ResturantSummary />
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
