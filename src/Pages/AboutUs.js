import React from 'react'
import '../Styles/aboutus.css'


export const AboutUs = () => {
  return (    
    <section className='aboutus-section'> 
      <h2 className='product-tittles text-center mb-4 p-2'><strong> Quiénes Somos </strong> </h2>
    <article className='aboutus-article mx-4 justify-content-center'>
      
      <div className='aboutus-div_text d-flex flex-column'>
      <h3 className='product-tittles text-center my-4 p-2'><strong> La Empresa </strong> </h3>
      <p className='aboutus-article_text'>CMPO es una empresa que realiza y distribuye artículos de plástico de primera calidad. Ubicada en la zona oeste de buenos aires, pero con alcance a todo el país.</p>

      <p className='aboutus-article_text'>Cuenta con la experiencia y la infraestructura necesaria para atender sus necesidades, tanto para pequeños como para grandes proyectos. </p>

      <p className='aboutus-article_text'>Atención personalizada al cliente, lo que permite brindarle el mejor servicio para que obtenga un excelente producto y prestaciones.</p> 
      </div>
    </article>
         
    </section>
  )
}
