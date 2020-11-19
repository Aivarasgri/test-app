// import React from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./styles.css";
// import FavoriteIcon from "./FavoriteIcon";

// class Pokemon extends React.Component {
//   constructor(props) {
//     super(props);
//     this.changeOrder = this.changeOrder.bind(this);
//     this.state = {
//       stats: this.props.location.state.pokemonStats,
//       stat: [],
//       order: true,
//     };
//   }

//   changeOrder = () => {
//     return this.setState({ order: !this.state.order });
//   };

//   componentDidMount = () => {
//     let outSideAsync = this;
//     const pokemonStats = this.state.stats;
//     async function getUrls() {
//       const statUrl = pokemonStats.map(
//         async (url) => await axios.get(url.stat.url)
//       );
//       const resolvedPokemonUrl = await Promise.all(statUrl);

//       outSideAsync.setState({ stat: resolvedPokemonUrl });
//       // console.log(pokemonStats);
//       // console.log(outSideAsync.state.stat);
//     }
//     getUrls();
//   };

//   render() {
//     const pokemon = this.props.location.state;

//     let abilitiesOrder = "";
//     this.state.order
//       ? (abilitiesOrder = (a, b) => b.slot - a.slot)
//       : (abilitiesOrder = (a, b) => a.slot - b.slot);

//     return (
//       <div>
//         <Link to="/">
//           <button className="backButton">Back</button>
//         </Link>
//         <div className="pokemonCardWrapper">
//           <div
//             className={
//               this.props.individualPokemonId.includes(
//                 this.props.location.state.pokemonId
//               )
//                 ? "iconWrapperTrue"
//                 : "iconWrapperFalse"
//             }
//             onClick={() =>
//               this.props.onHandleClick(this.props.location.state.pokemonId)
//             }
//           >
//             <FavoriteIcon />
//           </div>
//           <h2>Pokemon Details</h2>
//           <h3>Name: {pokemon.pokemonName}</h3>
//           <h3>Weight: {pokemon.pokemonWeight}kg</h3>

//           <table className="abilityTable">
//             <tbody>
//               <tr>
//                 <button
//                   style={{
//                     width: "100%",
//                     backgroundColor: "green",
//                     marginLeft: "20%",
//                   }}
//                   onClick={this.changeOrder}
//                 >
//                   Sort by Slot
//                 </button>
//               </tr>
//               <tr>
//                 <th>Abilities</th>
//                 <th>Slot</th>
//               </tr>
//               {pokemon.pokemonAbilities
//                 .sort(abilitiesOrder)
//                 .map((pAbility, index) => (
//                   <tr key={index}>
//                     <td>{pAbility.ability.name}</td>
//                     <td>{pAbility.slot}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//           <table>
//             <thead>
//               <tr>
//                 <th>Base Stat</th>
//                 <th>Base Effort</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pokemon.pokemonStats.map((stat, index) => (
//                 <tr key={index}>
//                   <td>{stat.base_stat}</td>
//                   <td>{stat.effort}</td>
//                 </tr>
//               ))}

//               <tr>
//                 <th>Stat Name</th>
//                 <th>Game Index</th>
//               </tr>
//               {this.state.stat.map((statName, index) => (
//                 <tr key={index}>
//                   <td>{statName.data.name}</td>
//                   <td>{statName.data.game_index}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="">
//             <img
//               src={pokemon.pokemonFrontImage}
//               alt={pokemon.pokemonName}
//             ></img>
//             <img
//               src={pokemon.pokemonBackDefault}
//               alt={pokemon.pokemonName}
//             ></img>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Pokemon;
