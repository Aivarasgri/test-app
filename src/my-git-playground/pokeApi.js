// import React, { useState, useEffect } from "react";
// import "./styles.css";
// import axios from "axios";

// const ShowPokemons = () => {
//   let [pokemon, setPokemon] = useState();
//   let [weight, setweight] = useState();
//   let [id, setId] = useState(1);
//   let [image, setImage] = useState();
//   let [ability, setAbility] = useState();

//   useEffect(() => {
//     let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const abilityUrl = `https://pokeapi.co/api/v2/ability/65/`;
//     async function fetchData() {
//       try {
//         const response = await axios.get(url);
//         console.log(response.data);

//         setPokemon(response.data.name);
//         setweight(response.data.weight);
//         setImage(response.data.sprites.front_default);

//         async function fetchAbilityData() {
//           try {
//             const response = await axios.get(abilityUrl);
//             console.log(response.data);
//             setAbility(response.data.name);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//         fetchAbilityData();
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>POKEMONS</h1>
//       <div className="pokemon">
//         <p>
//           Name: {pokemon}, weight: {weight} kg, ability: {ability}.
//         </p>
//         <img src={image} alt="img" />
//       </div>
//     </div>
//   );
// };

// export default ShowPokemons;
