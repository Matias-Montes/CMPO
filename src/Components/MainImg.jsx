import React from 'react'

export const MainImg = () => {
  return (
    <div className='d-flex justify-content-around'>
      <div className='d-flex flex-column justify-content-center text-center w-25'>
      <img className='main-img' src="https://i.ibb.co/Pzw0qXC/pagos-cmpo.png" alt="pagos-cmpo" border="0"></img>
      <span className='mainimg-text mb-4'>MULTIPLES MEDIOS DE PAGO</span>
      </div>
      <div className='d-flex flex-column justify-content-center text-center w-25'>
      <img className='main-img' src="https://i.ibb.co/4pn0X7T/calidad-cmpo.png" alt="calidad-cmpo" border="0"></img>
      <span className='mainimg-text mb-4'>CALIDAD ASEGURADA</span>
      </div>
      <div className='d-flex flex-column justify-content-center text-center w-25'>
      <img className='main-img' src="https://i.ibb.co/qyKnj8B/Camion-cmpo.png" alt="Camion-cmpo" border="0"></img>
      <span className='mainimg-text mb-4'>ENVIOS A TODO EL PAIS</span>
      </div>
    </div>
  )
}
