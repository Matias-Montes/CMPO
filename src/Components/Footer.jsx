import React from 'react'
import '../Styles/footer.css'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

export const Footer = () => {
  return (
    <div className='w-100'>
      <span className='w-100 footer-top '></span>
      <div className='w-100 d-flex footer-container'>
        <div className='footer-container_left d-flex '>
          <div className='footer-data-logo'>
            <a className='footer-data_img' href='#'><img
              src="https://i.ibb.co/60wHtJ1/logo.png"
              alt="CMPO logo"
              /></a>
            <div className='flex-column justify-content-center align-item-center footer-logo-expand' >
              <span className='footer-logo_text'>compania</span>
              <span className='footer-logo_text logo-text_blue'>manufacturera</span>
              <span className='footer-logo_text'>de plasticos</span>
              <span className='footer-logo_text logo-text_blue'>del oeste</span>
            </div>
          </div>
          <div className='footer-data_text footer-text d-flex flex-column justify-content-center align-item-center'>
            <h3>Datos:</h3>
            <p>Alfredo Palacios 2644</p>
            <p>lomas del mirador - cp 1752</p>
            <p>buenos aires - argentina</p>
          </div>
        </div>
        <div className='d-flex footer-container_rigth'>
          <div className='footer-contact-text footer-text d-flex flex-column'>
            <h3>Contacto:</h3>
            <span>Mail : </span>
            <p>info@cmpo.com.ar</p>
            <span>Teléfono :</span>
            <p>(011) 3529-9624</p>
          </div>
          <div className='d-flex flex-column footer-icons justify-content-center align-item-center'>

            <a href="https://wa.me/5491160200470?text=Quisiera%20contactar%20contigo%20por%20tus%20productos" target="_blank"> <BsWhatsapp className='footer-icon m-2 m-2' size={50} /> </a>
            <a href='https://www.instagram.com/cmpo.productos.plasticos/' target='_blank'> <BsInstagram className='footer-icon m-2 m-2' size={50} /></a>

          </div>
        </div>
      </div>
    </div>
  )
}
