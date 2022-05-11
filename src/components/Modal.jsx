
import { useState } from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";


const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('')

    const ocultarModal = () =>{
        
        setAnimarModal(false)

        setTimeout(()=>{
            setModal(false)
        },500)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(()=>{
                setMensaje('')
            }, 3000)
            return
        }
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarBtn} 
                alt="Cerrar Modal" 
                onClick={ocultarModal}
            />
        </div>
        <form
            onSubmit={handleSubmit} 
            className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <input 
                    id="nombre"
                    type="text" 
                    placeholder="Añade el Nombre del Gasto"
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input
                    id="cantidad" 
                    type="text" 
                    placeholder="Añade la cantidad del Gasto: ej $300.000"
                    value={cantidad}
                    onChange={e=>setCantidad(Number(e.target.value))}
                />
            </div>
            <div className="campo">
                <label htmlFor="categiria">Categoria</label>
                <select 
                    id="categoria"
                    value={categoria}
                    onChange={e=>setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="varios">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input 
                type="submit"
                value="Añadir Gasto"    
            />
        </form>

        </div>
  )
}

export default Modal