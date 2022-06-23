import React from "react";

export type Pokemon = {
  name: string;
};

type Props = {
  pokemon: Pokemon;
};

const PokemonDiscoveryPage = ({ pokemon }: Props) => {
  return (
    <div className="Pokemon">
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonDiscoveryPage;
