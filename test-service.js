import {
  getPokemonDetails,
  getAllPokemon,
  searchPokemon,
  getPokemonTypes,
  getPokemonByType
} from './src/services/pokemonService.js';

const runTests = async () => {
  try {
    console.log("🔹 Testing getPokemonDetails...");
    const pikachu = await getPokemonDetails('pikachu');
    console.log(pikachu.displayName);

    console.log("\n🔹 Testing getAllPokemon...");
    const list = await getAllPokemon(1, 5);
    console.log("Count:", list.pokemon.length);

    console.log("\n🔹 Testing searchPokemon...");
    const search = await searchPokemon('char');
    console.log("Search count:", search.pokemon.length);

    console.log("\n🔹 Testing getPokemonTypes...");
    const types = await getPokemonTypes();
    console.log("Types count:", types.length);

    console.log("\n🔹 Testing getPokemonByType...");
    const electric = await getPokemonByType('electric', 1, 5);
    console.log("Electric count:", electric.pokemon.length);

    console.log("\n✅ ALL TESTS PASSED");
  } catch (error) {
    console.error("❌ ERROR:", error);
  }
};

runTests();