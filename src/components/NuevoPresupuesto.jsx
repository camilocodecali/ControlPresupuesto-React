


const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
 
  const handlePresupuesto = (e) => {
    e.preventDefault();

    console.log("Enviando formulario");

  }
  
  
  return (
    <div>
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input 
                        className="nuevo-presupuesto"
                        type="text"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={e => setPresupuesto(e.target.value)}
                        />
                </div>
                <input type="submit" value="Añadir" />
            </form>
        </div>
    </div>
  )
}

export default NuevoPresupuesto