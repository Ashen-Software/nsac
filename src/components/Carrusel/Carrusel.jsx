import "./carrusel.css";

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
      <button onClick={prevSlide}>Prev</button>
      <div className="carousel-content">
        {children[currentIndex]}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carrusel;
