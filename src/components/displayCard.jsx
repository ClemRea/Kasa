import { Link } from "react-router-dom";
import "../styles/displayCard.css";
import items from "../datas/logementsList.json";

function DisplayCard() {
  return (
    <div className="kasa_card_container">
      {items.map((item) => (
        <Link to={`/logement/${item.id}`} className="kasa_card" key={item.id}>
          <img
            className="kasa_card_img kasa_card-redimension"
            src={item.cover}
            alt={item.title}
          ></img>

          <p className="kasa_card_title">{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default DisplayCard;
