import React from 'react';
import { Slider, MainImg, MainCards, MainCategories } from '../Components';
import { products, categories } from '../data/data';
import "../Styles/mainpage.css"

export const MainPage = () => {
  
  return (
    
    <>
    <h1 className='product-tittles text-center p-2 m-0 text-uppercase'><strong> compañia manufacturera de plasticos del oeste </strong> </h1>
      <Slider/>
      <MainImg/>
      <MainCards products={ products } />

    </>
    
  );
}