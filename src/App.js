import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/Index";
import Detail from "./components/Details";
import Forms from "./components/Forms/Forms";
import Favorites from "./components/Favorites/Favorites";

const email = "diositoqueside@gmail.com";
const password = "1234567";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [access, setAcces] = useState(false);

  const login = (userData) => {
    if (userData.password === password && userData.email === email) {
      setAcces(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Forms login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {/* <Cards characters={characters} onClose={onClose} /> */}
    </div>
  );
}

export default App;
