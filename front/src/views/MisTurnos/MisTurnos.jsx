import { useState } from "react";
import misTurnos from "../../helpers/misTurnos";
import Turno from "../../components/Turno/Turno";

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(misTurnos);

    return (
        <div>
            <h4>Estas son tus citas pendientes con Willich Inmobiliaria</h4>
            <div>
                {turnos.map((turno) => {
                   <Turno 
                  key={turno.id}
                  id={turno.id}
                  date={turno.fecha}
                  time={turno.hora}
                  type={turno.tipo}
                  estado={turno.estado}
                   />
                })}
            </div>
        </div>
    );
}
export default MisTurnos