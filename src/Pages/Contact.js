import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/contact.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ku2a3oq', 'template_dydpmgo', form.current, '2vX9I4k9rq8RI_j5C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='contact-section d-flex flex-column justify-content-center'>
      <h2 className='product-tittles text-center mb-4 p-2'><strong>Contacta con nosotros </strong> </h2>
      
      <div className='w-100 d-flex justify-content-center align-items-center'>
      <form className='contact-form d-flex flex-column m-4' ref={form} onSubmit={sendEmail}>
        <label>Nombre:</label>
        <input className='form-control' type="text" name="user_name"  required placeholder='Ingrese Su Nombre'/>
        <label>Email:</label>
        <input className='form-control' type="email" name="user_email" required placeholder='Ingrese Su Correo Electrónico'/>
        <label>Teléfono de contacto: *</label>
        <input className='form-control' type="number" name="user_phone"   placeholder='Ingrese Su Número'/>
        <label>Mensaje:</label>
        <textarea name="message" required placeholder='Escriba Su Mensaje'/>
        <input className='btn contact-form_btn m-2 m-2' type="submit" value="Enviar"  />
        <label>* Campo Opcional, Solo Números Sin Símbolos</label>
      </form>
      </div>
    </section>
  );
};