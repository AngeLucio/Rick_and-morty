import "./card.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const handleFavorites = () => {
    if (isFav === true) {
      setIsFav(false);
      props.removeFavorites(props.id);
    } else {
      setIsFav(true);
      props.addFavorites(props);
    }
  };

  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorites}> 💜 </button>
      ) : (
        <button onClick={handleFavorites}> 🤍 </button>
      )}
      {/* <button onClick={onFavorites}>*</button> */}
      <img src={props.image} alt="" className="card-" />
      <Link to={`/detail/${props.id}`}>
        <h2 className="name">{props.name}</h2>
      </Link>
      {/* <h2>{status}</h2> */}
      <div className="text">
        <h2>{props.species}</h2>
        <h2>{props.origin}</h2>
        <h2>{props.gender}</h2>
      </div>
      <div className="button-container">
        <button className="button" onClick={() => props.onClose(props.id)}>
          X
        </button>
      </div>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: function (character) {
      dispatch(addFav(character));
    },
    removeFavorites: function (id) {
      dispatch(removeFav(id));
    },
  };
};

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
