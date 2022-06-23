import React from 'react'
import {useState, useEffect} from 'react'
import { CircularProgressbar} from '@rhazegh/react-circular-progressbar'
import "@rhazegh/react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(10)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0);

        const totalDisponible = presupuesto - totalGastado;

        //calcular porcentaje gastado
        const nuevoPorcentaje = (((presupuesto- totalDisponible)/ presupuesto) * 100).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDisponible);
        
        setTimeout(()=>{
            setPorcentaje(nuevoPorcentaje);
        },1000)


    }, [gastos])
    
    
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-CO',{
            style:'currency',
            currency: 'COP'
        })
    };
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                value={porcentaje}
            ></CircularProgressbar>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible:</span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado:</span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto