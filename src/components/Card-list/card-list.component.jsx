import React from "react";
import './card-list.style.css';

export const CardList = props => {
  console.log(props);
  return <div className='card-list'>

{props.pokemons.map(pokemon => (

<h1 key={pokemon._id}>{pokemon.name}</h1>
))} 
  </div>;
};
