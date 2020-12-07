import React from "react";
import "./App.css";
import PokemonsList from "./my-git-playground/pokemon/PokemonsList";
import Test from "./testjs";
import MySVG from "./svg/hamburger";

function App() {
  return (
    <div className="App">
      <PokemonsList />
      <div>
        <h1>BURGER</h1>
        <MySVG />
      </div>
      <Test path="/test" exact="true" />
    </div>
  );
}

export default App;
