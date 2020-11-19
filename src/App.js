import React from "react";
import "./App.css";
import PokemonsList from "./my-git-playground/pokemon/PokemonsList";
import Test from "./testjs";

function App() {
  return (
    <div className="App">
      <PokemonsList />

      <Test path="/test" exact="true" />
    </div>
  );
}

export default App;
