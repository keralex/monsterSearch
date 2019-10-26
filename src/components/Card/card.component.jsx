import React from "react";
import "./card.style.css";
export const Card = props => (
  <div className='card-container'>
      <img src={props.pokemon.art_url} alt="pokemon"/>
    <h1>{props.pokemon.name}</h1>
  </div>
);
