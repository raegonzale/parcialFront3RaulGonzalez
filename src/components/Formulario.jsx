

const Formulario = ({setPersona, handleSubmit}) => {
  
  
  
    return (  
    <form className="formulario" onSubmit={handleSubmit}>
      <label> Nombres y Apellidos: </label>
      <input type="text" onBlur={(e) => setPersona ((prevState) => ({...prevState, name:e.target.value}))} />

      <label> Email: </label>
      <input type="text" onBlur ={(e) => setPersona ((prevState) => ({...prevState, email:e.target.value}))} />

      <button className="boton">Enviar</button>  
    </form>
  )
}

export default Formulario