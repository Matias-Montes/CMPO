import React from 'react'
import '../Styles/aboutus.css'


export const AboutUs = () => {
  return (    
    <section className='aboutus-section'> 
      <h2 className='product-tittles text-center mb-4 p-2'><strong> Quiénes Somos </strong> </h2>
    <article className='aboutus-article mx-4 justify-content-center'>
      
      <div className='aboutus-div_text d-flex flex-column'>
      <h3 className='product-tittles text-center my-4 p-2'><strong> La Empresa </strong> </h3>
      <p className='aboutus-article_text'>CMPO es una empresa Argentina, joven y dinámica, la cual nace con el objetivo de producir artículos plásticos para el hogar y la industria en general.
</p>

      <p className='aboutus-article_text'>Diseñamos, desarrollamos y fabricamos todos nuestros artículos con materia prima virgen, utilizando maquinarias de última tecnología para la optimización de nuestros procesos de producción, buscando con ello otorgar productos confiables para nuestros clientes.
</p>

      <p className='aboutus-article_text'>A través de nuestra cadena de comercialización y logística logramos abastecer a pequeños y grandes distribuidores a lo largo de todo el territorio nacional.
</p> 
      <p className='aboutus-article_text'>Nuestra misión es crear una marca de referencia para el mercado argentino con un enfoque en la calidad y el diseño de todos nuestros productos.

</p> 
      </div>
    </article>
         
    </section>
  )
}


