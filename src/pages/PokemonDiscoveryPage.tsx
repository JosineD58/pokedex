import React from "react";

export type Pokemon = {
  //id: number;
  name: string;
  url: string;
};

type Props = {
  pokemon: Pokemon;
};

const PokemonDiscoveryPage = ({ pokemon }: Props) => {
  return (
    <div className="Pokemon">
      <h2>{pokemon.name}</h2>
      <p>{pokemon.url}</p>
    </div>
  );
};

export default PokemonDiscoveryPage;
