import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className="logo">
            <h2>Julieta⚡McFly</h2>
        </div>
        <div className="menu">
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#conciertos">CONCIERTOS</a></li>
                <li><a href="#nosotros">NOSOTROS</a></li>
                <li><a href="#contacto">CONTACTO</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav