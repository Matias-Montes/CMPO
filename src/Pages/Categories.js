import React, { useState } from 'react'
import '../Styles/categories.css'
import { Cards} from '../Components'
import { products } from '../data/data'

export const Categories = () => {


  const localCategory = localStorage.getItem("category")

  const [filter, setFilter] = useState(localCategory ? localCategory : "all")
  const [selected, setSelected] = useState(localCategory ? localCategory : "all")
  
  const filterList = filter != "all" ? products.filter((p) => p.category == filter) : products

  const showSelected = "category-selected"

  const setView = (item) => {
    setFilter(item)
    setSelected(item)
  }

  return (
    <div className='w-100 product-container'>

        <h2 className='product-tittles text-center mb-4 p-2'><strong> NUESTROS PRODUCTOS </strong> </h2>

        <div className='d-flex w-100 flex-column justify-content-center aling-items-center'>
        
        <div className='buttons d-flex justify-content-around my-3 flex-wrap'>
          
          <button className={`${selected === "hogar"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("hogar")}}       
            >Linea Hogar</button>
          
          <button className={`${selected === "plantas"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("plantas")}}
            >Linea plantas</button> 
  
          <button className={`${selected === "ave"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("ave")}}
            >linea ave</button>

              
          <button className={`${selected === "animal"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("animal")}}
          >linea animal</button>
  
          <button className={`${selected === "all" ? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("all")}}
            >Todos los Productos</button>
        </div>

        </div>   

        <div className='d-flex justify-content-center align-items-center flex-wrap '>
          {filterList.map((product) => (
            <Cards product={product} />
          ))}
        </div>    

    </div>
  )
}
