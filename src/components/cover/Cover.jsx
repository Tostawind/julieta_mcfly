import React from 'react'
import './Cover.css'
import videoFuego from '../../assets/fuego.mp4'

const Cover = () => {
  return (
    <div className='cover-container' id='home'>

        <video src={videoFuego} autoPlay loop muted></video>
        <h1>JULIETA McFLY</h1>

        <div className="botones-container">
            <a href="https://open.spotify.com/?nd=1" target="_blank">SPOTIFY</a>
            <a href="https://www.youtube.com/" target="_blank">YOUTUBE</a>
        </div>
    </div>
  )
}

export default Cover