import React, { useEffect, useState } from 'react'
import '../Styles/product.css'
import { categories } from "../data/data"
import { MainCategories } from '../Components'

export const Product = () => {

  const getProduct = localStorage.getItem("product");
  const showProduct = JSON.parse(getProduct);
  const [image, setImage] = useState(showProduct.img);
  

  useEffect(() => {
    
  },[])

  return (
   
      <div className='w-100 product-container'>

        <h2 className='product-tittles text-center mb-4 p-2'><strong> linea {showProduct.category} </strong> </h2>

        <div className='d-flex w-100 product-container_img my-3'>
        
        <div className='d-flex flex-column justify-content-center h-100 product-imgs'>
          <div className='product-img d-flex justify-content-center align-items-center w-100'>
            
            <img className='w-50 h-50' src={image}></img>
           
          </div>

          <div className='d-flex w-100 justify-content-center flex-wrap p-2'> 
            <img className={`product-img mini w-25 h-25 m-2 
              ${image === showProduct.img? "product-img_selected" : ""}`}
              onClick={() => setImage(showProduct.img)}
              src={showProduct.img}></img> 
            <img className={`product-img mini w-25 h-25 m-2
              ${image === showProduct.imgA? "product-img_selected" : ""}
              ${showProduct.imgA? "" : "d-none"}`}
              onClick={() => setImage(showProduct.imgA)} src={showProduct.imgA}></img>
            <img className={`product-img mini w-25 h-25 m-2
              ${image === showProduct.imgB? "product-img_selected" : ""}
              ${showProduct.imgB? "" : "d-none"}`}
              onClick={() => setImage(showProduct.imgB)} src={showProduct.imgB}></img>
               <img className={`product-img mini w-25 h-25 m-2
              ${image === showProduct.imgC? "product-img_selected" : ""}
              ${showProduct.imgB? "" : "d-none"}`}
              onClick={() => setImage(showProduct.imgC)} src={showProduct.imgC}></img>
               <img className={`product-img mini w-25 h-25 m-2
              ${image === showProduct.imgB? "product-img_selected" : ""}
              ${showProduct.imgD? "" : "d-none"}`}
              onClick={() => setImage(showProduct.imgD)} src={showProduct.imgD}></img>

          </div>

          </div>

          <div className='product-separated'>
            <div className='d-flex flex-column m-4'>          
              <h5 className='product-info_tittles'>Nombre del Producto</h5>
              <p>{showProduct.name}</p>
              <h5 className='product-info_tittles'>Descripción</h5>
              <p>{showProduct.desc}</p>
            </div>
          </div>
        </div>
    
        <MainCategories categories={categories}/>
     
      </div>
    
  )
}

