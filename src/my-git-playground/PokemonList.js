// var resolvedPokemonsUrl = Promise.all(pokemonsUrl);
// resolvedPokemonsUrl.then((pokemonsData) => {
//   let pokemonAbilityUrl = [];
//   pokemonsData.map(async (ability) => {
//     pokemonAbilityUrl.push(ability.data.abilities[0].ability.url);
//     // console.log(pokemonAbilityUrl);
//     // console.log(ability);
//     // console.log(pokemonsData);
//     let pokemonAbilities = await axios.get(pokemonAbilityUrl);
//     console.log(pokemonAbilities);
//     return pokemonAbilities;
//   });
//   console.log(pokemonAbilities);
//   return setPokemonDetails(pokemonAbilityUrl);
// });
