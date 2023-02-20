import React from "react";
import Header from "./components/Layouts/Header/Header";
import ResturantSummary from "./components/Layouts/ResturantSummary/ResturantSummary";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ResturantSummary />
    </React.Fragment>
  );
}

export default App;
