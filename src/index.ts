import { Pokemon } from "./decorators/pokemon-class";

const bulbasaur = new Pokemon("bulbasaur");

// (Pokemon.prototype as any).customName = "Bulbasaur 2";
// console.log(bulbasaur);
// bulbasaur.savePokemonToDB(1);

bulbasaur.publicApi = "https://pokeapi.co/api/v2";
console.log(bulbasaur);
