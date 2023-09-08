import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h3 className="titulo-about">Presentación de la aplicación</h3>
      <div className="contenedor-about">
        <h5 className="descripcion-about">
          Este es una app de Rick and Morty, donde su principal trama gira
          entorno a Rick y Morty, cada uno de una personalidad totalmente
          distinta. Esta app fue creada con el proposito de que busques tus
          personajes favoritos y agregarlos a un lugar especial! Tienes un rango
          de buscar entre 1 y 826 personajes, todo un mundo por descubrir!
          Encuentralos. 💜{" "}
        </h5>
      </div>
    </div>
  );
};

export default About;
