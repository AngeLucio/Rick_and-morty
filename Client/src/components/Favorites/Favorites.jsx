import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import "./Favorites.css"

const Favorites = (props) => {
  const [aux, setAux] = useState(false);

  const optionsGender = ["All", "Male", "Female", "Genderless", "unknown"];

  const dispatch = useDispatch();

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  return (
    <div>
      <select className="option" onChange={handlerOrder}>
        <option value="Ascendente">ASCENDENTE</option>
        <option value="Descendente">DESCENDENTE</option>
      </select>

      <select className="option" onChange={handlerFilter}>
        {optionsGender.map((option) => {
          return (
            <option  key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>

      <div>
        {props.myFavorites?.map((props) => (
          <Card
            key={props.id}
            id={props.id}
            name={props.name}
            image={props.image}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
