import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className='contacto-container' id='contacto'>
        <h3>CONTACTO</h3>
        <form action="">
            <input type="email" placeholder='Email'/>
            <textarea name="mensaje" placeholder='Escribir mensaje...'l></textarea>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Contacto