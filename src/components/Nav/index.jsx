import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import './index.css'

const Nav = ({ onSearch }) => {
  return (
    <div>
      <Link to='/about'>
        <button className="buttonLinks">About</button>
      </Link>
      <Link to='/home'>
        <button className="buttonLinks">Home</button>
      </Link>
      <Link to='/favorites'>
        <button className="buttonLinks">Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
