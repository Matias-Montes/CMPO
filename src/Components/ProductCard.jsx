import React, { useState } from 'react'
import { motion, spring } from 'framer-motion'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {

  const [isOpen, setIsOpen] = useState()
  const [showClick, setShowClick] = useState()

  const variants = {
    open: {scale: 1.3, y: -50 },    
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
        className={`text-center maincards-card_container mx-4 my-3`} key={product.ip}>
        <motion.img className='text-center maincards-card_img' width="250px" height="250px" src={product.img}></motion.img>
        
        <motion.div 
        className={`${isOpen ? "" : "d-none"} `}>
          <p className='text-uppercase maincard-card_text f-bold'><strong>{product.name}</strong></p>
          <p className='maincard-card_text'>{product.desc}</p>
          <Link to={"/product"}> <button onClick={() => localStorage.setItem("product", productString)}
          className='btn maincard-card_button m-2'>Mostrar Detalles</button> </Link>
        </motion.div>

        <p className={`${showClick? "maincard-card_click": "d-none"}`}>{product.name}</p>

      </motion.div>
    </div>
  )
}
