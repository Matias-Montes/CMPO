import React, { useState } from 'react'
import '../Styles/categories.css'
import { Cards} from '../Components'
import { products } from '../data/data'
import  documento  from '../data/test.pdf'
 

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
          
          <button className={`${selected === "Ferretero"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Ferretero")}}       
            >Ferretero</button>
          
          <button className={`${selected === "Cristal"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Cristal")}}
            >Cristal</button> 
  
          <button className={`${selected === "Hogar"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Hogar")}}
            >Hogar</button>

              
          <button className={`${selected === "Primeros Auxilios"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Primeros Auxilios")}}
          >Primeros Auxilios</button>

<button className={`${selected === "Veterinaria"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Veterinaria")}}
          >Veterinaria</button>

        </div>

        </div>   

        <div className='categories-card_container d-flex justify-content-center align-items-center flex-wrap '>
          {filterList.map((product) => (
            <Cards product={product} />
          ))}
        </div>    

        <div className='d-flex m-5'>
          <h4>Hace <a href={documento} download={"catalogo_cmpo.pdf"}>Click Aqui</a> para descargar nuestro catalogo completo!</h4>
        </div>

    </div>
  )
}
