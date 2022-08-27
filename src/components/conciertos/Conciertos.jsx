import React, {useState, useEffect} from 'react'
import './Conciertos.css'
import {lista_conciertos} from '../../data/conciertos.js'

const Conciertos = () => {

    const [conciertos, setConciertos] = useState([]);

    useEffect(() => {
        setConciertos(lista_conciertos)
    })

    if(conciertos.length === 0) {
        return (
            <div className='conciertos-container'>
                <h3>CONCIERTOS</h3>
                <div className="lista-conciertos">
                    <p>Proximamente...</p>
                </div>
            </div>
        )
    }

    return (
        <div className='conciertos-container' id='conciertos'>
            <h3>CONCIERTOS</h3>
            <div className="lista-conciertos">
                
                {
                    conciertos.map(concierto => (
                        <div className="card-concierto" key={concierto.id}>
                        <div className="fecha">
                            <span className='dia'>{concierto.dia}</span>
                            <span className='mes'>{concierto.mes}</span>
                        </div>

                        <div className="localizacion">
                            <h4 className='nombre-localizacion'>{concierto.localizacion}</h4>
                            <div className="linea"></div>
                            <p className='ciudad'>{concierto.ciudad}</p>
                        </div>
                        
                        <a href="https://www.ticketmaster.es/musica/todos-musica/10001/events" target='_blank' className='entrada'>COMPRAR ENTRADA</a>
                    </div>
                    ))
                }

                <a href="">+ Más conciertos...</a>
            </div>
        </div>
    )
}

export default Conciertos