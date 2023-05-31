

const Tarjeta = ({persona}) => {
  return (
    <div className="tarjeta">
      <h3> La inscripcion de {persona.name} se realizó de manera exitosa ;) </h3>
      <h3> El email al que llegará la informacion es: {persona.email}</h3>
    </div>
  )
}

export default Tarjeta