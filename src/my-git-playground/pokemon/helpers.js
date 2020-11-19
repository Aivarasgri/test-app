export function ReverseAbilitiesOrder(pokemonAbilitiesOrder) {
  let isAscending = "";
  pokemonAbilitiesOrder
    ? (isAscending = (a, b) => a.slot - b.slot)
    : (isAscending = (a, b) => b.slot - a.slot);
  return isAscending;
}
