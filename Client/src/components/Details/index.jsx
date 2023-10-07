import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character.name && (
        <div>
          <h1 className="detail-id">{character.name}</h1>
          <img className="imagen-card" src={character.image} alt={character.name} />
          <div className="detail-card">
            <h2>{character.status}</h2>
            <hr />
            <h2>{character.species}</h2>
            <hr />
            <h2>{character.gender}</h2>
            <hr />
            <h2>{character.origin.name}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
