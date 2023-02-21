import React from "react";
import Header from "./components/Layouts/Header/Header";
import ResturantSummary from "./components/Layouts/ResturantSummary/ResturantSummary";
import Meals from "./components/Meals/Meals";


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ResturantSummary />
     <Meals/>
    </React.Fragment>
  );
}

export default App;
