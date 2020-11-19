import { useEffect, useState } from "react";
import axios from "axios";

export const useGetPokemons = () => {
  let [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=21"
      );
      let pokemons = response.data.results;

      const pokemonsUrls = pokemons.map(async ({ url }) => {
        return await axios.get(url);
      });

      const resolvedPokemonsUrls = await Promise.all(pokemonsUrls);
      setPokemonDetails(resolvedPokemonsUrls);

      // const pokemonData = resolvedPokemons.map((pData) =>
      //   pData.data.abilities.map((ability) => console.log(ability))
      // );
      // resolvedPokemons.then((pokemon) => {
      //   return setPokemonDetails(pokemon);
      // });
    }
    getPokemons();
  }, []);

  return pokemonDetails;
};

export const useGetPokemonStats = (pokemonBaseStats) => {
  const [individualPokemonStats, setIndividualPokemonStats] = useState([]);

  useEffect(() => {
    async function getPokemonStats() {
      const pokemonStatsUrl = pokemonBaseStats.map(
        async (url) => await axios.get(url.stat.url)
      );
      const resolvedPokemonStatsUrl = await Promise.all(pokemonStatsUrl);
      setIndividualPokemonStats(resolvedPokemonStatsUrl);
    }
    getPokemonStats();
  }, []);

  return individualPokemonStats;
};
