import "../../styles/logementDisplay.css";
import LogmentDisplay from "../Logement/LogementDisplay";
import Banner from "../banner";

function Card() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <LogmentDisplay />
      </div>
    </div>
  );
}

export default Card;
