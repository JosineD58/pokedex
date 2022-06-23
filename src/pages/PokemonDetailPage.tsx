import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { SpreadAssignment } from "typescript";

type pokemonSprites = {
  front_default: string;
};

type pokemonDetailProps = {
  name: string;
  order: number;
  id: number;
  abilities: string[];
  base_experience: number;
  height: number;
  weight: number;
  types: string;
  sprites: pokemonSprites;
  typeObj: string;
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
    <div>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.sprites.front_default} alt="front sprite" />
      {/* <p>
        Types:{" "}
        { {pokemonDetails.types.map((typeObj) => (
          <span>{typeObj.type.name} </span>
        ))} }
      </p> */}
      <p>Weight: {pokemonDetails.weight} hectograms</p>
    </div>
  ) : (
    <p>Loading ...</p>
  );
}

export default PokemonDetailPage;
