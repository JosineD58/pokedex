import React from "react";

export type Pokemon = {
  id: number;
  name: string;
  url: string;
};

type Props = {
  pokemon: Pokemon;
};

const DiscoverPage = ({ pokemon }: Props) => {
  return (
    <div className="Pokemon">
      <h2>{pokemon.name}</h2>
      <p>{pokemon.id}</p>
    </div>
  );
};

export default DiscoverPage;
