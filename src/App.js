import React from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layouts/Header/Header";
import ResturantSummary from "./components/Layouts/ResturantSummary/ResturantSummary";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header></Header>
      <main>
        <ResturantSummary />
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
