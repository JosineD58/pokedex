import React, { useState, useEffect } from "react";
import PokemonDiscoveryPage, { Pokemon } from "./PokemonDiscoveryPage";
import axios from "axios";

type pokemonProps = {
  name: string;
};

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>();

  useEffect(() => {
    const doSomeDataFetching = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );

      setPokemon(
        res.data.results.map((pokemonProps: pokemonProps) => {
          return {
            name: pokemonProps.name,
          };
        })
      );
    };
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <p>A list of Pokemon:</p>
      {pokemon ? (
        pokemon.map((pokemon) => {
          return <PokemonDiscoveryPage pokemon={pokemon} />;
        })
      ) : (
        <p>Loading Pokemon...</p>
      )}
    </div>
  );
};

export default PokemonList;
