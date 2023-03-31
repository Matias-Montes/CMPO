import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (    
    <Carousel className='carousel'
    activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className=''>
        <img
          className="main-carousel_img"
          src="https://i.ibb.co/jZyCQqc/Slider-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="main-carousel_text">
          <h3 className="main-carousel_text">Linea Ferretera</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          className="main-carousel_img"
          src="https://i.ibb.co/B2V1FvT/Slider-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="main-carousel_text">
          <h3>Linea Hogar</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          className="main-carousel_img"
          src="https://i.ibb.co/hMBzVkF/Slider-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="main-carousel_text">
          <h3 className="main-carousel_text">Linea Primeros Auxilios</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          className="main-carousel_img"
          src="https://i.ibb.co/bFxnxfT/DSC-0269.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="main-carousel_text">
          <h3 className="main-carousel_text">Linea Cristal</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          className="main-carousel_img"
          src="https://i.ibb.co/kcZV0HF/DSC-0262.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="main-carousel_text">
          <h3 className="main-carousel_text">Linea Veterinaria</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


  );
}