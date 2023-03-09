import React from 'react'
import '../Styles/footer.css'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'

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

          </div>
          <div className='footer-data_text footer-text d-flex  justify-content-between align-item-end'>
            <MdLocationOn className='mt-3' size={"5rem"} />
            <div className='h-25 mt-3'>
              <p className='footer-text_adress'>Alfredo Palacios 2644</p>
              <p className='footer-text_adress'>lomas del mirador - cp 1752</p>
              <p className='footer-text_adress'>buenos aires - argentina</p>
            </div>
          </div>
        </div>
        <div className='d-flex footer-container_rigth'>
          <div className='footer-contact-text footer-text d-flex flex-column'>

            <p> <FiMail className='mx-2' size={"1.5rem"} /> info@cmpo.com.ar</p>
            
          <div className='d-flex'>
            <div className='d-flex flex-column justify-content-center align-items-center mx-2'>
              <span>Whatsapp</span>
              <a href="https://wa.me/5491160200470?text=Quisiera%20contactar%20contigo%20por%20tus%20productos" target="_blank"> <BsWhatsapp className='footer-icon m-2 m-2' size={50} /> </a>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center mx-2'>
              <span>Instagram</span>
              <a href='https://www.instagram.com/cmpo.productos.plasticos/' target='_blank'> <BsInstagram className='footer-icon m-2 m-2' size={50} /></a>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
