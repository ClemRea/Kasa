import "../../styles/logementDisplay.css";
import LogmentDisplay from "../Logement/LogementDisplay";
import Banner from "../banner";
import Footer from "../footer";

function Card() {
  return (
    <div>
      <header>
        <Banner />
      </header>
      <div>
        <LogmentDisplay />
      </div>
      <footer className="kasa_footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Card;
