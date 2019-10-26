import React from "react";
import "./card-list.style.css";
import { Card } from "../Card/card.component";

export const CardList = props => (
  <div className="card-list">
      
    {props.pokemons.map(pokemon => (
        <Card key={pokemon._id} pokemon={pokemon}/>
    ))}
  </div>
);
