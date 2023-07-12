import etoile_vide from "../../assets/etoile_vide.png";
import etoile_pleine from "../../assets/etoile_pleine.png";

function Rate(props) {
  const score = props.score;
  const rates = [1, 2, 3, 4, 5];

  return (
    <div className="rate_container">
      {rates.map((rate) =>
        score >= rate ? (
          <img
            key={rate.toString()}
            className="etoile"
            src={etoile_pleine}
            alt="etoile vide"
          />
        ) : (
          <img
            key={rate.toString()}
            className="etoile"
            src={etoile_vide}
            alt="etoile pleine"
          />
        )
      )}
    </div>
  );
}

export default Rate;
