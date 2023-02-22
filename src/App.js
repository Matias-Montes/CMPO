import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'  
import { NavBar, Footer } from "./Components";
import { AboutUs, Categories, Contact, MainPage, Product, } from "./Pages";


export const App = () => {
  return (
    <div>     
      <Router>
        <NavBar/> 
        <Routes>
          <Route path="/" exact element={<MainPage/>}></Route>
          <Route path="/Categories" element={<Categories/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/product" element={<Product/>}></Route>
          
        </Routes>  
        <Footer/>
      </Router>
   </div>
     );
}


