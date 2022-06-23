import React, { useState, useEffect } from "react";
import PokemonDiscoveryPage, { Pokemon } from "./PokemonDiscoveryPage";
import axios from "axios";

type pokemonProps = {
  name: string;
};

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>();
  const [filter, setFilter] = useState("");

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
      <p>
        Search Pokemon:{" "}
        <input
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </p>
      <div>
        <h1>A list of Pokemon:</h1>
        {pokemon ? (
          pokemon
            .filter((pokeObj) => pokeObj.name.startsWith(filter))
            .map((pokeObj) => {
              return <PokemonDiscoveryPage pokemon={pokeObj} />;
            })
        ) : (
          <p>Loading Pokemon...</p>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
