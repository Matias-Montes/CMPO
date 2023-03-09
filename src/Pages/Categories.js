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
          
          <button className={`${selected === "Linea Ferretero"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Linea Ferretero")}}       
            >Linea Ferretero</button>
          
          <button className={`${selected === "Linea Cristal"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Linea Cristal")}}
            >Linea Cristal</button> 
  
          <button className={`${selected === "Linea Hogar"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Linea Hogar")}}
            >Linea Hogar</button>

              
          <button className={`${selected === "Linea Primeros Auxilios"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Linea Primeros Auxilios")}}
          >Linea Primeros Auxilios</button>

<button className={`${selected === "Linea Veterinaria"? showSelected : ""} btn categories-button me-2 text-uppercase m-2`} 
            onClick={() => {setView("Linea Veterinaria")}}
          >Linea Veterinaria</button>

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
