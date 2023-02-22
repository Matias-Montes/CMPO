import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="main-carousel_img w-100 "
          src="https://i.ibb.co/jZyCQqc/Slider-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="main-carousel_text">
          <h3 className="main-carousel_text">Linea Ferretera</h3>
          <p>Excelente para talleres... </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="main-carousel_img w-100"
          src="https://i.ibb.co/B2V1FvT/Slider-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="main-carousel_text">
          <h3>Linea Hogar</h3>
          <p>Excelente para el hogar</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="main-carousel_img w-100"
          src="https://i.ibb.co/hMBzVkF/Slider-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="main-carousel_text">
          <h3 className="main-carousel_text">Linea Primeros Auxilios</h3>
          <p>excelente para la medica ¿?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
  );
}