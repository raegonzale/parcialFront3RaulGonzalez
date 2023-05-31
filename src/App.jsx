

import { useState } from 'react'
import './App.css'

import Tarjeta from './components/Tarjeta'
import Formulario from './components/Formulario'

function App() {
  
  const [show,setShow] = useState(false)
  const [error, setErr] = useState(false)

  const [persona, setPersona] = useState ({
    name: '',
    email: null
  })

  const handleSubmit = (e) => {
      e.preventDefault()
      if(persona.name.length>3 && persona.name != " " && persona.email.length>6) {

        setShow(true)
        setErr(false)

      }else {
        setShow(false)
        setErr(true)
      } 
  }

  return (
    <div className="App">
      
      <h1>Inscripción de alumnos año 2023 </h1>
      
      <Formulario setPersona={setPersona} handleSubmit={handleSubmit}/>
      {show ? <Tarjeta persona={persona}/>: null}
      {error ? 'Por favor chequea que la información sea correcta.' : null}

    </div>
  )
}

export default App
