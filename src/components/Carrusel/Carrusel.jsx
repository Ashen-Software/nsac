import "./carrusel.css";
import flec from "../../assets/arrow-big-right-dash.png";
import React, { useState } from 'react';

const Carrusel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const fadeOutSlide = (nextIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsFading(false);
    }, 300); // El tiempo de la animación (0.5 segundos en este caso)
  };

  const nextSlide = () => {
    const nextIndex = currentIndex === children.length - 1 ? 0 : currentIndex + 1;
    fadeOutSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1;
    fadeOutSlide(prevIndex);
  };

  return (
    <div className="carousel">
      <img src={flec} alt="flecha" onClick={prevSlide} className="rotado flecha"/>
      
      <div className={`carousel-content ${isFading ? 'fade-out' : 'fade-in'}`}>
        {children[currentIndex]}
      </div>
   
      <img src={flec} alt="flecha" onClick={nextSlide} className="flecha"/>
    </div>
  );
};

export default Carrusel;
