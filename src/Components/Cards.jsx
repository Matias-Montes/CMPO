import React, { useState } from 'react'
import { motion, spring } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Cards = ({ product }) => {

  const [isOpen, setIsOpen] = useState()
  const [showClick, setShowClick] = useState()

  const variants = {
    open: {scale: 1.5 },    
  }
  
  const productString = JSON.stringify(product)

  return (
    <div className=''>
      <motion.div
        animate={isOpen ? "open" : ""}
        variants={variants}
        transition={{duration: .5}}
        layout
        onClick={() => (setIsOpen(!isOpen), setShowClick())}
        onMouseEnter={() => setShowClick(true)}
        onMouseLeave={() => (setIsOpen(), setShowClick())}
        className={`text-center maincards-card_container mx-3 my-3`} key={product.ip}>
        <motion.img className='text-center maincards-card_img' width="200px" height="200px" src={product.img}></motion.img>
        
        <motion.div 
        className={`${isOpen ? "" : "d-none"} `}>
          <p className='text-uppercase maincard-card_text f-bold'><strong>linea {product.category}</strong></p>
          <p className='maincard-card_text'>{product.name}</p>
          <Link to={"/product"}> <button onClick={() => localStorage.setItem("product", productString)}
          className='btn maincard-card_button m-2'>Mostrar Detalles</button> </Link>
        </motion.div>

        <p className={`${showClick? "maincard-card_click": "d-none"}`}>Click para expandir</p>

      </motion.div>
    </div>
  )
}
