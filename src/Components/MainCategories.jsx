import React, { useState } from 'react'
import { motion, spring } from 'framer-motion'

import { Link } from 'react-router-dom'


export const MainCategories = ( {categories} ) => {
 
  return (
    <>
      <div className='d-flex-colums align-items-center'>
        <h2 className='maincards-tittle d-block text-center text-uppercase'>Categorias</h2>
        <div className='d-flex justify-content-center flex-wrap p-4 h-50'>
          {categories.map((category) =>
            <><Link to={'/categories'} className="main-category_link">
              <motion.div
                key={category.id}
                transition={{ duration: .5 }}
                layout
                onClick={() => localStorage.setItem("category", category.name)}
                className={`text-center maincards-card_container mx-4 my-3`} >
                <motion.img className='text-center maincards-card_img' width="225px" height="175px" src={category.img}></motion.img>

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
