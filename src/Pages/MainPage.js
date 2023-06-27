import React from 'react';
import { Slider, MainImg, MainCards, MainCategories } from '../Components';
import { products, categories } from '../data/data';
import "../Styles/mainpage.css"

export const MainPage = () => {
  
  return (
    
    <>
    <h2 className='product-tittles text-center p-2 m-0 text-uppercase'><strong> nuestras lineas </strong> </h2>
      <Slider/>
      <MainImg/>
      <MainCards products={ products } />

    </>
    
  );
}