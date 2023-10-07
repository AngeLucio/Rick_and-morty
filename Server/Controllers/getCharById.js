const axios = require("axios");
const express = require("express"); // Agrega esta línea para importar express
const app = express();

const URL = "https://rickandmortyapi.com/api/character/";

app.use(express.json());

// Define la función getCharById y exporta un objeto con esa función


const getCharById = (req, res)=> {
    const id = req.params.id;

    axios(`${URL}${id}`)
      .then(response => {
        const character = response.data;
          if (character.error) {
          throw new Error(character.error);
        } else {
          const characterInfo = {
            id: character.id,
            status: character.status,
            name: character.name,
            species: character.species,
            origin: character.origin.name,
            image: character.image,
            gender: character.gender,
          };

          res.json(characterInfo);
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          res.status(404).send("Not found");
        } else {
          res.status(500).json({ message: error.message });
        }
      });
  }

  module.exports = {getCharById};





 
    
      
