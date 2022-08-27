import React from 'react'
import './Nosotros.css'
import foto_julieta from '../../assets/Julieta_Puerta.jpg'

const Nosotros = () => {
  return (
    <div className='nosotros-container' id='nosotros'>
        <div className="texto">
            <h4>Julieta McFly</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatem consequatur maxime in. Minus ut sit nemo
                odit sapiente et eum possimus quisquam obcaecati quae voluptatum itaque, necessitatibus, unde eaque
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatem consequatur maxime in. Minus ut sit nemo
                odit sapiente et eum possimus quisquam obcaecati quae voluptatum itaque, necessitatibus, unde eaque
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatem consequatur maxime in. Minus ut sit nemo
                odit sapiente et eum possimus quisquam obcaecati quae voluptatum itaque, necessitatibus, unde eaque
            </p>
        </div>

        <div className="foto">
            <img src={foto_julieta} alt="" />
        </div>
    </div>
  )
}

export default Nosotros