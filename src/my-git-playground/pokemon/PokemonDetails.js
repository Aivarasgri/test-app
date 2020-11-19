import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import FavoriteIcon from "./FavoriteIcon";
import nanoid from "nanoid";
import { useGetPokemonStats } from "./CustomHooks";
import { ReverseAbilitiesOrder } from "./helpers";

const PokemonDetails = (props) => {
  const {
    pokemonName,
    pokemonWeight,
    pokemonFrontImage,
    pokemonBackDefault,
    pokemonBaseStats,
    pokemonId,
    pokemonAbilities,
  } = props.location.state;

  const [pokemonAbilitiesOrder, setPokemonAbilitiesOrder] = useState(true);
  const getPokemonStats = useGetPokemonStats(pokemonBaseStats);
  const isAscending = ReverseAbilitiesOrder(pokemonAbilitiesOrder);

  const sortPokemonAbilities = () => {
    setPokemonAbilitiesOrder(!pokemonAbilitiesOrder);
  };

  return (
    <div>
      <Link to="/">
        <button className="backButton">Back</button>
      </Link>
      <div className="pokemonCardWrapper">
        <div
          className={
            props.individualPokemonId.includes(pokemonId)
              ? "isActive"
              : "isInactive"
          }
          onClick={() => props.collectUniquePokemonIds(pokemonId)}
        >
          <FavoriteIcon />
        </div>
        <h2>Pokemon Details</h2>
        <h3>Name: {pokemonName}</h3>
        <h3>Weight: {pokemonWeight}kg</h3>
        <button className="sortAbilitiesButton" onClick={sortPokemonAbilities}>
          Sort by Slot
        </button>
        <table className="abilitiesTable">
          <tbody>
            <tr></tr>
            <tr>
              <th>Abilities</th>
              <th>Slot</th>
            </tr>
            {pokemonAbilities.sort(isAscending).map((pokemonAbility) => (
              <tr key={pokemonAbility.slot}>
                <td>{pokemonAbility.ability.name}</td>
                <td>{pokemonAbility.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Base Stat</th>
              <th>Base Effort</th>
            </tr>
          </thead>
          <tbody>
            {pokemonBaseStats.map((stats) => (
              <tr key={nanoid(10)}>
                <td>{stats.base_stat}</td>
                <td>{stats.effort}</td>
              </tr>
            ))}
            <tr>
              <th>Stat Name</th>
              <th>Game Index</th>
            </tr>
            {getPokemonStats.map((statsName) => (
              <tr key={nanoid(10)}>
                <td>{statsName.data.name}</td>
                <td>{statsName.data.game_index}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <img src={pokemonFrontImage} alt={pokemonName}></img>
          <img src={pokemonBackDefault} alt={pokemonName}></img>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
