import React, { useState } from "react";
import vector_down from "../assets/vector_down.png";
import vector_up from "../assets/vector_up.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse_dropDown_container">
      <div className="collapse_dropDown_title">
        <h2 className="about_title">{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <img
              className="vector"
              src={vector_down}
              alt="flèche vers le bas"
            />
          ) : (
            <img className="vector" src={vector_up} alt="flèche vers le bas" />
          )}
        </p>
      </div>
      <div className="collapse_dropDown_content">
        {isOpen && <div className="collapse_dropDown_text">{content}</div>}
      </div>
    </div>
  );
};

export default Collapse;
