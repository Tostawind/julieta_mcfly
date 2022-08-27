import './App.css'
import Nav from './components/nav/Nav'
import Cover from './components/cover/Cover'
import Conciertos from './components/conciertos/Conciertos'
import Nosotros from './components/nosotros/Nosotros'
import Contacto from './components/contacto/Contacto'



function App() {
 

  return (
    <div className="App">
      <Nav />
      <Cover />
      <Conciertos />
      <Nosotros />
      <Contacto />   
    </div>
  )
}

export default App
