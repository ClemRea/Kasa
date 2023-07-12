import { useState } from "react";
import vector_left from "../../assets/vector_left.png";
import vector_right from "../../assets/vector_right.png";
import "../../styles/carrousel.css";

function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slide">
      {length > 1 && (
        <span className="vector_left" onClick={prevImage}>
          <img src={vector_left} alt="flèche vers la gauche" />
        </span>
      )}
      {length > 1 && (
        <span className="vector_right" onClick={nextImage}>
          <img src={vector_right} alt="flèche vers la droite" />
        </span>
      )}
      {slides.map((image, i) => {
        return (
          <div key={i} className="slider">
            {i === current && (
              <img src={image} className="slide_img" alt="logement" />
            )}
            {i === current && length > 1 && (
              <span className="slider_number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Carrousel;
