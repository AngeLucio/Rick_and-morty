import Card from "../Card/Card";
import "./cards.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className="cards">
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
