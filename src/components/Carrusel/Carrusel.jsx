import "./carrusel.css";
import flec from "../../assets/arrow-big-right-dash.png"

import React, { useState } from 'react';

const Carrusel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
 
      <img src={flec} alt="flecha" onClick={prevSlide} className="rotado flecha "/>
 
      <div className="carousel-content" >
        {children[currentIndex]}
      </div>
   
      <img src={flec} alt="flecha" onClick={nextSlide} className="flecha "/>
    </div>
  );
};

export default Carrusel;
