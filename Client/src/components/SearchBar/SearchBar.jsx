import { useState } from "react";
import "./searchBar.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleOnChange = (e) => {
      setId(e.target.value);
  };

  return (
    <div className="contenedor">
      <input className="search" type="search" onChange={handleOnChange} />
      <button className="search" onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
}
