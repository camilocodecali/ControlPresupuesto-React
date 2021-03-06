import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  setGastos,
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto
}) => {
  return (
    <header>
        <h1>Planificador de Gastos - Camilo Rodriguez</h1>

        {isValidPresupuesto ? (
          <ControlPresupuesto
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          ></ControlPresupuesto>
        ) : (
          <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
      />
        ) };


    </header>
  )
}

export default Header