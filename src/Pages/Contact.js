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
    <section className='contact-section'>
      <h2 className='product-tittles text-center mb-4 p-2'><strong>Contacta con nosotros </strong> </h2>
      <div className='d-flex contact-div m-4'>
      <article className='contact-article d-flex flex-column justify-content-center align-item-center text-center m-2'>
        <p>Si te interesaron nuestros productos</p>
        <p>queres ser parte de nuestros consumidores</p>
        <p>o tenes alguna duda</p>
        <p>no dudes en contactarte con nosotros con este formulario</p>
        <p>o a travez del whatsapp ubicado al pie de esta pagina.</p>
      </article>
      <form className='contact-form d-flex flex-column' ref={form} onSubmit={sendEmail}>
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