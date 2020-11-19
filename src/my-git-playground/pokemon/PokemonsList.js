import React, { useState } from "react";
import "./styles.css";
import FavoriteIcon from "./FavoriteIcon";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Pokemon from "./PokemonDetails";
import { useGetPokemons } from "./CustomHooks";

const PokemonsList = () => {
  const getPokemons = useGetPokemons();
  const [pokemonIds, setPokemonId] = useState([]);

  const collectUniquePokemonIds = (id) => {
    // let temporaryPokemonId = [...pokemonIds];
    // temporaryPokemonId.push(id);
    let filteredPokemonIds = pokemonIds.filter((pokemonId) => pokemonId !== id);
    if (pokemonIds.length > filteredPokemonIds.length) {
      return setPokemonId([...filteredPokemonIds]);
    }
    return setPokemonId([...pokemonIds, id]);
    // if (pokemonIds.includes(id)) {
    //   setPokemonId([...filteredPokemonId]);
    // } else {
    //   setPokemonId([...pokemonIds, id]);
    // }
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={PokemonsList}>
            <div className="pokemonsListWrapper">
              <h1 className="headerPrimary">POKEMONS</h1>
              {getPokemons.map((details) => (
                <div key={details.data.id} className="pokemon">
                  <Link
                    to={{
                      pathname: `/pokemon/${details.data.id}`,
                      state: {
                        pokemonName: details.data.name,
                        pokemonWeight: details.data.weight,
                        pokemonFrontImage: details.data.sprites.front_default,
                        pokemonBackDefault: details.data.sprites.back_default,
                        pokemonBaseStats: details.data.stats,
                        pokemonId: details.data.id,
                        pokemonAbilities: details.data.abilities,
                      },
                    }}
                  >
                    <button>View Pokemon</button>
                  </Link>
                  <div>
                    <div
                      className={
                        pokemonIds.includes(details.data.id)
                          ? "isActive"
                          : "isInactive"
                      }
                      onClick={() => collectUniquePokemonIds(details.data.id)}
                    >
                      <FavoriteIcon />
                    </div>
                    Name: {details.data.name}, Weight: {details.data.weight}kg,
                    Abilities:{" "}
                    {details.data.abilities.map(
                      (ability) => `${ability.ability.name} `
                    )}
                  </div>

                  <div className="pokemonImageWrapper">
                    <img
                      src={details.data.sprites.front_default}
                      alt={details.data.name}
                    ></img>
                    <img
                      src={details.data.sprites.back_default}
                      alt={details.data.name}
                    ></img>
                  </div>
                </div>
              ))}
            </div>
          </Route>
          <Route
            path="/pokemon/:id"
            render={(props) => (
              <Pokemon
                {...props}
                individualPokemonId={pokemonIds}
                collectUniquePokemonIds={collectUniquePokemonIds}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default PokemonsList;
