import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { SpreadAssignment } from "typescript";

type pokemonSprites = {
  front_default: string;
};

type PokemonType = {
  name: string;
  url: string;
};

type PokemonTypes = {
  slot: number;
  type: PokemonType;
};
type pokemonDetailProps = {
  name: string;
  order: number;
  id: number;
  abilities: string[];
  base_experience: number;
  height: number;
  weight: number;
  sprites: pokemonSprites;
  types: PokemonTypes[];
};

function PokemonDetailPage() {
  const routeParams = useParams();
  const [pokemonDetails, setPokemonDetails] = useState<pokemonDetailProps>();

  useEffect(() => {
    const dataFetching = async () => {
      const pokemonRes = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${routeParams.pokemon_name}`
      );
      setPokemonDetails(pokemonRes.data);
      console.log(pokemonRes.data);
    };
    dataFetching();
  }, []);

  return pokemonDetails ? (
    <div className="pokemonCard">
      <h2 className="pokemonName">{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt="front sprite" />
      <p>
        Types:{" "}
        {pokemonDetails.types.map((typeObj) => (
          <span>{typeObj.type.name} </span>
        ))}
      </p>
      <p>Weight: {pokemonDetails.weight} hectograms</p>
    </div>
  ) : (
    <p>Loading ...</p>
  );
}

export default PokemonDetailPage;
