import React, { useState } from 'react'
import { motion, spring } from 'framer-motion'

import { Link } from 'react-router-dom'


export const MainCategories = ( {categories} ) => {
 
  return (
    <>
      <div className='d-flex-colums align-items-center'>
        <h2 className='maincards-tittle d-block text-center text-uppercase'>Nuestras Lineas</h2>
        <div className='d-flex justify-content-center flex-wrap p-4 h-50'>
          {categories.map((category) =>
            <><Link to={'/categories'} className="main-category_link">
              <motion.div
                key={category.id}
                onClick={() => localStorage.setItem("category", category.name)}
                className={`text-center maincards-category_container mx-4 my-3`} >
                <motion.img className='text-center categories-category_img' width="250px" height="200px" src={category.img}></motion.img>

                <p className={"maincard-category_text"}>{category.name}</p>

              </motion.div>
            </Link></>
          )
          }

        </div>
      </div>
    </>
  )
}
